import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    base: "/css-5-proyecto-html-con-estilos/",
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        contacto: resolve(__dirname, "contacto.html"),
        cursos: resolve(__dirname, "cursos.html"),
        legal: resolve(__dirname, "legal.html"),
        login: resolve(__dirname, "login.html"),
        quienes_somos: resolve(__dirname, "quienes_somos.html"),
        registro: resolve(__dirname, "registro.html"),

        curso_full_stack: resolve(__dirname, "cursos/curso_full_stack.html"),
        curso_ia: resolve(__dirname, "cursos/curso_ia.html"),
        noticia1: resolve(__dirname, "noticias/noticia1.html"),
        noticia2: resolve(__dirname, "noticias/noticia2.html"),
      },
    },
  },
});