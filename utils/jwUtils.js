import jwt from "jsonwebtoken";

export const generateToken = (user, secretKey, expiresIn) => {
  return jwt.sign({ data: user }, secretKey, { expiresIn });
};
export const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });
};
