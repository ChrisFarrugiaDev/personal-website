package api

import (
	"path/filepath"

	"github.com/go-chi/chi/v5"
	chiMiddleware "github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

// Router sets up all routes and middleware.
func Router() chi.Router {
	mux := chi.NewRouter()

	// Global middleware: request IDs, logging, error recovery, gzip, CORS.
	mux.Use(chiMiddleware.RequestID)
	mux.Use(chiMiddleware.Logger)
	mux.Use(chiMiddleware.Recoverer)
	mux.Use(chiMiddleware.Compress(5))
	mux.Use(cors.Handler(cors.Options{
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link", "ETag"},
		AllowCredentials: false,
		MaxAge:           300,
		AllowedOrigins:   []string{"https://*", "http://*"},
	}))

	// Serve the CV PDF at /cv (must be before catch-all).
	mux.Get("/cv", cvHandler)

	// Catch-all: Serve static frontend or fallback to index.html for SPA routes.
	mux.Get("/*", spaHandler)

	mux.Get("/tetris-linux", tetrisLinuxHandler)
	mux.Get("/tetris-windows", tetrisWindowsHandler)

	return mux
}

// mustAbs panics if path cannot be made absolute.
func mustAbs(p string) string {
	a, err := filepath.Abs(p)
	if err != nil {
		panic(err)
	}
	return a
}
