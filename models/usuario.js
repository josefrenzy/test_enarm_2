import  mongoose, { mongo, Schema }  from "mongoose";

const UsuarioSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Usuario no encontrado"],
    },
    correo:{
        type: String,
        required: [true, "correo no encontrado"],
    },
    contrasena:{
        type: String,
        required: [true, "contrasena no encontrada"],
    },
    rol:{
        type: String,
        required: [true, "rol no encontrado"],
    },
    foto:{
        type: String,
        required: [true, "foto no encontrado"],
    },
    especialidad:{
        type: String,
        required: [true, "especialidad no encontrada"],
    },

});

export default mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema)