const express = require('express');
const { faker, fa } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    users.push({
      name: faker.person.fullName(),
      gender: faker.person.sex(),
    });
  }

  res.json(users);
});

module.exports = router;
