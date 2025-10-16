// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { fileURLToPath } from "url";
// import { dirname, resolve } from "path";
// import { copyFileSync, existsSync } from "fs";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       name: "copy-redirects",
//       closeBundle() {
//         const src = resolve(__dirname, "_redirects");
//         const dest = resolve(__dirname, "dist/_redirects");
//         if (existsSync(src)) {
//           copyFileSync(src, dest);
//           console.log("✅ _redirects file copied to dist/");
//         } else {
//           console.warn("⚠️ No _redirects file found at project root");
//         }
//       },
//     },
//   ],
//   build: {
//     outDir: "dist",
//   },
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { resolve } from 'path'
// import { copyFileSync } from 'fs'
export default defineConfig({
  plugins: [
    react(),
    // {
    //   name: 'copy-redirects',
    //   writeBundle() {
    //     copyFileSync(resolve('public/_redirects'), resolve('dist/_redirects'))
    //   }
    // }
  ]
})

