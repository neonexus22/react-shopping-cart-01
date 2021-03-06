import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Nishant",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "./images/p1.jpg",
      price: 95,
      countInStock: 11,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Adidas Slim Shirt",
      category: "Shirts",
      image: "./images/p2.jpg",
      price: 120,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 9,
      description: "high quality product",
    },
    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "./images/p3.jpg",
      price: 110,
      countInStock: 0,
      brand: "Lacoste",
      rating: 3,
      numReviews: 21,
      description: "medium quality product",
    },
    {
      name: "Rebok Slim Pant",
      category: "Pants",
      image: "./images/p4.jpg",
      price: 90,
      countInStock: 16,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
      description: "standard quality product",
    },
    {
      name: "Nepal Slim Pant",
      category: "Pants",
      image: "./images/p5.jpg",
      price: 75,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 29,
      description: "fine quality product",
    },
    {
      name: "India Fit Pant",
      category: "Pants",
      image: "./images/p6.jpg",
      price: 100,
      countInStock: 30,
      brand: "India",
      rating: 2,
      numReviews: 31,
      description: "low quality product",
    },
  ],
};
