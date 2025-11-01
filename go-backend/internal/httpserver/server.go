package httpserver

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/ChrisFarrugiaDev/personal-website/internal/api"
	"github.com/ChrisFarrugiaDev/personal-website/internal/logger"
)

type Server struct {
	HTTPServer *http.Server
	Port       string
	CloseCn    chan struct{}
}

func NewHttpServer(port string, httpCloseCh chan struct{}) *Server {

	mux := http.NewServeMux()
	mux.Handle("/", api.Router())

	srv := &http.Server{
		Addr:         fmt.Sprintf(":%s", port),
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 120 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	return &Server{
		HTTPServer: srv,
		Port:       port,
		CloseCn:    httpCloseCh,
	}
}

func (s *Server) Start(ctx context.Context) {

	go func() {

		logger.Info.Printf("HTTP server is listening Port %s/n", s.Port)

		err := s.HTTPServer.ListenAndServe()

		if err != nil && err != http.ErrServerClosed {
			logger.Error.Println("HTTP server error", err)
		}
	}()

	<-ctx.Done()
	logger.Info.Println("HTTP server - Shutdown signal received")

	// We create a new context with a 5s timeout to allow a graceful shutdown.
	// Using only the parent ctx would fail because it is already cancelled
	// once a termination signal is received, causing Shutdown() to abort immediately.
	// With this timeout, the server stops taking new requests but gives ongoing
	// requests a short grace period to complete before forcing the shutdown.
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err := s.HTTPServer.Shutdown(shutdownCtx)

	if err != nil {
		logger.Error.Println("HTTP server - graceful shutdown failed, forcing close", err)
		_ = s.HTTPServer.Close()

	} else {
		logger.Info.Println("HTTP server - stopped gracefully")
	}

	close(s.CloseCn) // <- signal to main that we're done
}
