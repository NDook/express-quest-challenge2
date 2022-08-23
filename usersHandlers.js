const database = require("./database");

const getUser = (req, res) => {
  database
    .query("select * from users")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if(users[0]) {
        res.json(users[0]);
      } else {
        res.status(404).send("Not found");
      }
      
    })
    .catch((err) => {
      err.status(404);
    });
};

module.exports = {
  getUser,
  getUserById,
};
