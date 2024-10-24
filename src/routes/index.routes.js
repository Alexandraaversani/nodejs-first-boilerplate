import { Router } from "express";

// Lista de importação das rotas do projeto
import usuariosRoutes from "./usuarios.routes.js";
const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Vai Corinthians!" });
});

// Lista de uso das rotas do projeto
routes.use("/usuarios", usuariosRoutesRoutes);

export default routes;