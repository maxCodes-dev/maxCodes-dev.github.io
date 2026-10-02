import { reactRouter } from "@react-router/dev/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [devtoolsJson(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
