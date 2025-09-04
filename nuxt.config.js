// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: true,
	modules: ["@vite-pwa/nuxt", "@nuxt/image", "@nuxt/fonts", "@nuxt/scripts", "@nuxtjs/tailwindcss"],
	css: ["./scss/main.scss"],
	tailwindcss: {
		configPath: "./tailwind.config.js",
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {},
			},
		},
	},
	pwa: {
		registerType: "autoUpdate", // Service worker będzie aktualizował się automatycznie
		manifest: {
			name: "Gastro App",
			short_name: "gastro_app",
			description: "Moja aplikacja PWA w Nuxt 4",
			theme_color: "#1e40af",
			background_color: "#ffffff",
			icons: [
				{ src: "/pwa-192x192.png", sizes: "192x192", type: "image/png" },
				{ src: "/pwa-512x512.png", sizes: "512x512", type: "image/png" },
			],
		},
		workbox: {
			// Definiuj strategie cache (opcjonalnie)
			runtimeCaching: [
				{
					urlPattern: /^https:\/\/.*\.(png|jpg|css|js)$/,
					handler: "CacheFirst",
					options: {
						cacheName: "static-assets",
						expiration: { maxEntries: 60, maxAgeSeconds: 3600 },
					},
				},
			],
		},
		client: {
			installPrompt: true,
		},
		devOptions: {
			enabled: true,
		},
	},
	alias: {
		style: fileURLToPath(new URL("./scss", import.meta.url)),
	},
});
