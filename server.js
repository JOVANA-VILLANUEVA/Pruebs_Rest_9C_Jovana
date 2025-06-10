const express = require('express');
const app = express();
PORT = 3000;

app.listen(PORT,()=>{
    console.log('El servidor esta corriendo en el puerto ${PORT}')
})