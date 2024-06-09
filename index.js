import express from "express";
import fbiRoutes from "./routes/fbiRoutes.js";

const __dirname = import.meta.dirname + "/public";

const app = express();

app.use(express.static(__dirname));

app.use("/", fbiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Srv_Conectado exitosamente al puerto ${PORT}`);
});
