package main

import (
	"context"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/ChrisFarrugiaDev/personal-website/internal/httpserver"
	"github.com/ChrisFarrugiaDev/personal-website/internal/logger"
)

const PORT = "1208"

func main() {

	// Create a context that will be cancelled when an interrupt or termination signal is received.
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)

	// stop() will stop the context from listening for further OS signals
	defer stop()

	// Channel to know when HTTP server has fully shut down
	httpCloseCh := make(chan struct{})

	srv := httpserver.NewHttpServer(PORT, httpCloseCh)
	go srv.Start(ctx)

	// -----------------------------------------------------------------
	// Block main goroutine until context is cancelled by an OS signal (e.g. CTRL+C).
	// This keeps the main function alive while the TCP server runs in the background.

	<-ctx.Done()
	logger.Info.Println("Shutdown signal received, beginning graceful shutdown...")

	// -----------------------------------------------------------------
	// Gracefully shutdown

	// Wait for the HTTP server to close, with a timeout.
	exitCode := 0
	select {
	case <-httpCloseCh:
		logger.Info.Println("HTTP server shut down cleanly.")
	case <-time.After(10 * time.Second):
		logger.Info.Println("HTTP server shutdown timeout - exiting anyway.")
	}

	os.Exit(exitCode)
}
