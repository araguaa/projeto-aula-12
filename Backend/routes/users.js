const express = require('express');
const router = express.Router();

const db = require('../db');

router.post('/register', (req, res) => {

  const { name, email, password } = req.body;

  if(!name || !email || !password){
    return res.status(400).json({
      message: 'Todos os campos são obrigatórios'
    });
  }

  if(password.length < 6){
    return res.status(400).json({
      message: 'Senha deve ter no mínimo 6 caracteres'
    });
  }

  db.run(
    `INSERT INTO users(name,email,password)
     VALUES(?,?,?)`,
    [name,email,password],
    function(err){

      if(err){

        if(err.message.includes('UNIQUE')){

          return res.status(400).json({
            message:'E-mail já cadastrado'
          });

        }

        return res.status(500).json({
          message:'Erro ao cadastrar'
        });

      }

      res.status(201).json({
        message:'Usuário criado'
      });

    }
  );

});

router.post('/login', (req,res)=>{

 const { email, password } = req.body;

 if(!email || !password){

   return res.status(400).json({
      message:'Campos obrigatórios'
   });

 }

 db.get(
   `SELECT * FROM users
    WHERE email = ?`,
   [email],
   (err,user)=>{

      if(err){

         return res.status(500).json({
            message:'Erro interno'
         });

      }

      if(!user){

         return res.status(401).json({
            message:'Usuário não encontrado'
         });

      }

      if(user.password !== password){

         return res.status(401).json({
            message:'Senha incorreta'
         });

      }

      res.status(200).json({
        message: "Login realizado",
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });

   }
 );

});

module.exports = router;