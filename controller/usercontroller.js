import User from "../model/usermodel.js";

export function createUser(req, res) {
  const newuser = new User(req.body);

  newuser
    .save()
    .then(() => {
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}