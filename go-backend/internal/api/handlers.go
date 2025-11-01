package api

import (
	"net/http"

	"path/filepath"
	"time"
)

var (
	distPath = mustAbs("../cf-personal-website/dist")
	distFS   = http.Dir(distPath)
)

// cvHandler serves your PDF at /cv.
func cvHandler(w http.ResponseWriter, r *http.Request) {
	cvFile := mustAbs("../cv/CV_Chris_Nov_2025.pdf")
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", `inline; filename="CV - Chris.pdf"`)
	http.ServeFile(w, r, cvFile)
}

// tetrisLinuxHandler serves the Linux binary as a download.
func tetrisLinuxHandler(w http.ResponseWriter, r *http.Request) {
	bin := mustAbs("../tetris/go-tetris")
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Header().Set("Content-Disposition", `attachment; filename="go-tetris"`)
	http.ServeFile(w, r, bin)
}

// tetrisWindowsHandler serves the Windows .exe binary as a download.
func tetrisWindowsHandler(w http.ResponseWriter, r *http.Request) {
	bin := mustAbs("../tetris/go-tetris.exe")
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Header().Set("Content-Disposition", `attachment; filename="go-tetris.exe"`)
	http.ServeFile(w, r, bin)
}

// spaHandler serves static files from dist/, falling back to index.html for client-side routing.
func spaHandler(w http.ResponseWriter, r *http.Request) {
	distServer := http.FileServer(distFS)
	path := filepath.Clean(r.URL.Path)
	if path == "/" || path == "" {
		path = "/index.html"
	}

	// Try to serve the requested file.
	if f, err := distFS.Open(path); err == nil {
		f.Close()
		distServer.ServeHTTP(w, r)
		return
	}

	// If not found, serve index.html (SPA fallback).
	f, err := distFS.Open("/index.html")
	if err != nil {
		http.NotFound(w, r)
		return
	}
	defer f.Close()

	// ServeContent needs a file modtime.
	mod := time.Now()
	if fi, err := f.Stat(); err == nil {
		mod = fi.ModTime()
	}
	http.ServeContent(w, r, "index.html", mod, f)
}
