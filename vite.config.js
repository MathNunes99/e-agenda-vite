import { resolve } from "path";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  base: "/e-agenda-vite/",
  plugins: [ghPages()],
  root: root,
  build: {
    outDir: outDir,
    emptyOutDir: true,
    rollupOptions: {
      input:{
        index: resolve(root, "index.html"),
        tarefaList: resolve(root, "tarefas/tarefas.list.html"),
        tarefaCreate: resolve(root, "tarefas/tarefa.create.html"),
      }
    }
  },
  publicDir: "../public"
})