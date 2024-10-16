const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    categories.push({
      categorieName: faker.commerce.department(),
    });
  }

  res.json(categories);
});

module.exports = router;

// categories/:categoryId/products/:productId

// const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
