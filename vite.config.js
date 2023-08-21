import path from "path"

export default {
    root: path.resolve(__dirname, "src"),
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "src/index.html"),
                exemplo01: path.resolve(__dirname, "src/lista-disciplinas.html"),
                exemplo02: path.resolve(__dirname, "src/fila-atendimento.html")
            }
        }
    }
}
