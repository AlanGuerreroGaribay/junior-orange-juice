import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/tournament/api": {
        target: "https://jobtennislatam.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
