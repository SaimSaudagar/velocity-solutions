import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { existsSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
// Base path for GitHub Pages: use "/" for custom domain, or "/repository-name/" for github.io
// Set VITE_BASE_PATH env variable to override, or it will auto-detect based on CNAME file
const getBasePath = () => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }
  // If CNAME exists, assume custom domain (base path is "/")
  if (existsSync(path.resolve(__dirname, "public/CNAME"))) {
    return "/";
  }
  // Default to "/" - update this to your repository name if using github.io subdomain
  // Example: return "/velocity-solutions/";
  return "/";
};

export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
