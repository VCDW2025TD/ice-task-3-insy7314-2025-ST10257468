// server.mjs
import https from "https";
import fs from "fs";
import dotenv from "dotenv";
import app from "./app.mjs"; // use import instead of require
import mongoose from 'mongoose';
import { error } from "console";

dotenv.config();

const PORT = process.env.PORT || 5000;

const sslOptions = {
  key: fs.readFileSync("ssl/privatekey.pem"),
  cert: fs.readFileSync("ssl/certificate.pem"),
};

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    https.createServer(sslOptions, app).listen(PORT, () => {
      console.log(`✅ Secure API running at https://localhost:${PORT}`);
  });

})
.catch((err) => {
  console.error('Mongo connection error:', err)
});