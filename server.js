const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Base de datos temporal (solo para simulación)
let usuarios = [];

// Endpoint que recibe datos de registro
app.post("/registrar", (req, res) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({ ok: false, error: "Faltan datos" });
    }

    usuarios.push({ correo, password, fecha: new Date().toISOString() });
    console.log("Nuevo registro:", { correo, password });

    return res.json({ ok: true, mensaje: "Datos recibidos" });
});

// Endpoint para ver todos los usuarios
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});
