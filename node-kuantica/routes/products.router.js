const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];

  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: i + 1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      image: faker.image.url(),
    });
  }

  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id: id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
  });
});

router.get("/filter", (req, res) => {
  res.send("Soy un Filter");
});


router.post("/", (req, res) => {
  const body = req.body;
  const { name, price, description, image } = body;

  res.json({
    message: "Product created",
    product: {
      id: 1,
      name,
      price,
      description,
      image,
    },
  });
})
module.exports = router;
