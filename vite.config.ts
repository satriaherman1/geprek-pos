import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import replace from "@rollup/plugin-replace";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [
    react(),
    // replace({
    //   preventAssignment: true,
    //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    //   global: "window",
    //   __dirname: "__dirname",
    //   __filename: "__filename",
    //   "import.meta.env.VITE_APP_API_BASE_URL": JSON.stringify(process.env.VITE_APP_API_BASE_URL || ""),
    // }),
  ],
});
