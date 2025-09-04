// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: true,
	modules: ["@nuxt/image", "@nuxt/fonts", "@nuxt/scripts", "@nuxtjs/tailwindcss"],
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
	// pwa: {
	// 	workbox: {
	// 		assetsURLPattern: "/",
	// 		publicPath: "/",
	// 	},
	// },
	alias: {
		style: fileURLToPath(new URL("./scss", import.meta.url)),
	},
});
