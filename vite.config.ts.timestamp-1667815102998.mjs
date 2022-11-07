// vite.config.ts
import react from "file:///Users/prince.patel/Demos/packages/kreattix-design-icons/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/prince.patel/Demos/packages/kreattix-design-icons/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/prince.patel/Demos/packages/kreattix-design-icons/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/prince.patel/Demos/packages/kreattix-design-icons/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/prince.patel/Demos/packages/kreattix-design-icons/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { resolve } from "node:path";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/component/"]
    })
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "kreattix-design-icons",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`
    },
    minify: "esbuild",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcHJpbmNlLnBhdGVsL0RlbW9zL3BhY2thZ2VzL2tyZWF0dGl4LWRlc2lnbi1pY29uc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3ByaW5jZS5wYXRlbC9EZW1vcy9wYWNrYWdlcy9rcmVhdHRpeC1kZXNpZ24taWNvbnMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3ByaW5jZS5wYXRlbC9EZW1vcy9wYWNrYWdlcy9rcmVhdHRpeC1kZXNpZ24taWNvbnMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcidcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludFxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnRW52KSA9PiAoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB0c0NvbmZpZ1BhdGhzKCksXG4gICAgbGludGVyUGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IFsnLi9zcmN9LyoqLyoue3RzLHRzeH0nXSxcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ3NyYy9jb21wb25lbnQvJ10sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2luZGV4LnRzJyksXG4gICAgICBuYW1lOiAna3JlYXR0aXgtZGVzaWduLWljb25zJyxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluZGV4LiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgcmVhY3Q6ICdSZWFjdCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFYsT0FBTyxXQUFXO0FBQzVXLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7QUFFMUIsU0FBUyxlQUFlO0FBRHhCLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUluQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLHNCQUFzQjtBQUFBLE1BQ2hDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3ZDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE9BQU8sVUFBVTtBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxTQUFTO0FBQUEsSUFDakM7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
