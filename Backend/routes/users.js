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

router.get("/", (req, res) => {

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;

  const offset = (page - 1) * limit;

  db.all(
    `
    SELECT id, name, email
    FROM users
    LIMIT ? OFFSET ?
    `,
    [limit, offset],
    (err, users) => {

      if (err) {

        return res.status(500).json({
          message: "Erro ao buscar usuários"
        });

      }

      db.get(
        "SELECT COUNT(*) as total FROM users",
        [],
        (err, result) => {

          if (err) {

            return res.status(500).json({
              message: "Erro ao contar usuários"
            });

          }

          res.status(200).json({

            users,

            total: result.total,

            page,

            totalPages: Math.ceil(
              result.total / limit
            )

          });

        }
      );

    }
  );

});

router.put("/change-password", (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {

    return res.status(400).json({
      message: "Dados obrigatórios"
    });

  }

  if (password.length < 6) {

    return res.status(400).json({
      message: "A senha deve possuir no mínimo 6 caracteres"
    });

  }

  db.run(
    `
    UPDATE users
    SET password = ?
    WHERE email = ?
    `,
    [password, email],
    function (err) {

      if (err) {

        return res.status(500).json({
          message: "Erro ao atualizar senha"
        });

      }

      if (this.changes === 0) {

        return res.status(404).json({
          message: "Usuário não encontrado"
        });

      }

      return res.status(200).json({
        message: "Senha alterada com sucesso"
      });

    }
  );

});

module.exports = router;