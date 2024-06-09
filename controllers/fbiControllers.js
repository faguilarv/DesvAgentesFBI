import dotenv from "dotenv/config";
import { generateToken, verifyToken } from "../utils/jwUtils.js";
import { results } from "../database/agentes.js";

const secretKey = process.env.SECRET_KEY;

export const verifyUserToken = async (req, res) => {
  const { token } = req.query;

  try {
    const data = await verifyToken(token, secretKey);
    res.send(data);
  } catch (error) {
    res.send("error de Token ");
  }
};
export const signIn = (req, res) => {
  try {
    const { email, password } = req.query;

    const user = results.find((u) => u.email && u.password === password);

    if (user) {
      const token = generateToken(user, secretKey, "2m");
      res.send(`
                   <a href='/Dashboard?token=${token}'> <p> Go to DashBoard </p> <a/>
                   
                   Bienvenido Agente: , ${email}.
                   <script>
                   localStorage.setItem('token', JSON.stringify('${token}))
                   </script>
                    `);
    } else {
      res.send("Usuario o contraseña incorrecta");
    }
  } catch (error) {
    console.log(error);
  }
};
