const express = require ('express');
const app = express();
const morgan = require ('morgan');

const cors =require ('cors');
//configuracion del servidor 
app.set ('port', process.env.port || 3000);
app.set ('json spaces', 2)
//midddleware
app.use (morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//nuestro primer web services 
app.get ('/',(req,res)=> {
res.json(
    {
    "title" : "este es mi primer micro servicio"
    });
})

//endpoint o micro servicio que suma 2 numeros
app.post('/sumar',(req,res)=> {
    const{num1,num2} = req.body;
    //validar que se hayan enviado los dos numeros 
    if(!num1 || !num2) {
        return res.status(400).send({error:'Faltan numeros para sumar'});

    }
        
            console.log()
            //sumar los numeros 
            const resultado = num1 + num2;
            //enviar el resultado
            res.send({resultado});
        
    
});

//endpoint o micro servicio que suma 2 numeros
app.post('/areacuadrado',(req,res)=> {
    const{lado1,lado2} = req.body;
    //validar que se hayan enviado los dos numeros 
    if(!lado1 || !lado2) {
        return res.status(400).send({error:'Faltan numeros para sumar'});

    }
        
            console.log()
            //multipilicar lado por lado  
            const resultado = lado1 * lado2;
            //enviar el resultado
            res.send({resultado});
        
    
});

//iniciando el servidor 
app.listen(app.get('port'),()=>{
console.log('servidor en el puerto    3000')


});




