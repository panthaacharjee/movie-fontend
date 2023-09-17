import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://movie-6pmp.onrender.com/",
      // "/api": "http://localhost:4000/",
    },
  },
});
