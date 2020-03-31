import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import Person from '../models/personModel';
import moment from 'moment';
export const signUp = async (req, res) => {
  let person = new Person(req.body);
  let createPerson = await person.save();
  res.json(createPerson);
};

export const login = async (req, res) => {
  const person = await Person.findOne({ email: req.body.email });

  if (!person) {
    return res.send('La personne existe pas');
  }
  const password = req.body.password;
  bcrypt.compare(password, person.password, function (error, success) {
    if (success) {
      const payload = {
        exp: moment().add(1, 'hour').unix(),
        iat: moment().unix(),
        iss: person.id
      };

      let token = jwt.encode(payload, process.env.TOKEN_SECRET);
      return res.json({
        firstName: person.firstName,
        lastName: person.lastName,
        token: `Bearer ${token}`,
        expiration: moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss')
      });
    }
    return res.send('Mot de passe incorect');
  });
};
