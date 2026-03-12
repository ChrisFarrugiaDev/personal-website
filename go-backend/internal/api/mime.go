package api

import (
	"mime"
)

func init() {
	mime.AddExtensionType(".svg", "image/svg+xml")
	mime.AddExtensionType(".svgz", "image/svg+xml")
	mime.AddExtensionType(".woff", "font/woff")
	mime.AddExtensionType(".woff2", "font/woff2")
	mime.AddExtensionType(".ttf", "font/ttf")
	mime.AddExtensionType(".otf", "font/otf")
	mime.AddExtensionType(".ico", "image/x-icon")
}
