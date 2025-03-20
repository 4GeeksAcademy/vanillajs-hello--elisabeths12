import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Agrega el plugin de React para Vite
  root: "./src",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 3000,
  },
});