import { cartManager } from "./reducer.js";

test("first load", () => {
  const initialState = [];

  const action = {
    type: "FIRST_LOAD",
    payload: [
      {
        desc: "Toy's  for Cat",
        fastDelivery: false,
        off: 5,
        outOfStock: false,
        price: 114,
        productImg: "https://i.ibb.co/vc018V8/toy5.png",
        productName: "Cat Toy",
        quantity: 1,
        rating: 6,
        tags: { animal: "cat", category: "toy" },
        wishlist: false,
        _id: "60dc22d374176500a15e79ca",
      },
      {
        desc: "Toy's  for Dog",
        fastDelivery: false,
        off: 5,
        outOfStock: false,
        price: 114,
        productImg: "https://i.ibb.co/vc018V8/toy5.png",
        productName: "Dog",
        quantity: 1,
        rating: 6,
        tags: { animal: "cat", category: "toy" },
        wishlist: false,
        _id: "60dc22d374176500a15e79ca",
      },
    ],
  };
  let result = cartManager(initialState, action);

  const expectedState = [
    {
      desc: "Toy's  for Cat",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Cat Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
    {
      desc: "Toy's  for Dog",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Dog",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  ];

  expect(result).toEqual(expectedState);
});

test("Add to Cart ", () => {
  const initialState = [];

  const action = {
    type: "ADD",
    payload: {
      desc: "Toy's  for Cat",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Cat Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  };
  let result = cartManager(initialState, action);
  const expectedState = [
    {
      desc: "Toy's  for Cat",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Cat Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  ];
  expect(result).toEqual(expectedState);
});

test("Add to Cart2", () => {
  const initialState = [
    {
      desc: "Toy's  for Dog",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "DOg Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  ];

  const action = {
    type: "ADD",
    payload: {
      desc: "Toy's  for Cat",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Cat Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  };
  let result = cartManager(initialState, action);
  const expectedState = [
    {
      desc: "Toy's  for Dog",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "DOg Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
    {
      desc: "Toy's  for Cat",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Cat Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  ];
  expect(result).toEqual(expectedState);
});

test("Remove from Cart", () => {
  const initialState = [
    {
      desc: "Toy's  for Dog",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "DOg Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];

  const action = {
    type: "REMOVE",
    payload: {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  };
  let result = cartManager(initialState, action);

  const expectedState = [
    {
      desc: "Toy's  for Dog",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "DOg Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  ];
  expect(result).toEqual(expectedState);
});

test("Remove from Cart 2", () => {
  const initialState = [
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];

  const action = {
    type: "REMOVE",
    payload: {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  };
  let result = cartManager(initialState, action);

  const expectedState = [];
  expect(result).toEqual(expectedState);
});
test("Increase   quantity ", () => {
  const initialState = [
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      quantity: 4,
      price: 700,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];

  const action = {
    type: "INCREASE",
    payload: {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      quantity: 5,
      price: 700,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  };
  let result = cartManager(initialState, action);

  const expectedState = [
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      quantity: 5,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];
  expect(result).toEqual(expectedState);
});

test("Decrease  quantity ", () => {
  const initialState = [
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      quantity: 5,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];

  const action = {
    type: "DECREASE",
    payload: {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      quantity: 4,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  };
  let result = cartManager(initialState, action);

  const expectedState = [
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      quantity: 4,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];
  expect(result).toEqual(expectedState);
});

test("Decrease   quantity  and remove the item if It's quantity is 0", () => {
  const initialState = [
    {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      quantity: 1,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  ];

  const action = {
    type: "DECREASE",
    payload: {
      desc: "Nutrient food for your reptile friend",
      fastDelivery: true,
      off: 22,
      outOfStock: false,
      price: 700,
      quantity: 0,
      productImg: "https://i.ibb.co/0tmyPg8/reptilefood2.png",
      productName: "Reptile Food",
      rating: 3,
      tags: { animal: "reptile", category: "food" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ad",
    },
  };
  let result = cartManager(initialState, action);

  const expectedState = [];
  expect(result).toEqual(expectedState);
});

test("Empty the Cart when someone Logout", () => {
  const initialState = [
    {
      desc: "Toy's  for Cat",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Cat Toy",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
    {
      desc: "Toy's  for Dog",
      fastDelivery: false,
      off: 5,
      outOfStock: false,
      price: 114,
      productImg: "https://i.ibb.co/vc018V8/toy5.png",
      productName: "Dog",
      quantity: 1,
      rating: 6,
      tags: { animal: "cat", category: "toy" },
      wishlist: false,
      _id: "60dc22d374176500a15e79ca",
    },
  ];
  const action = { type: "LOGOUT" };
  let result = cartManager(initialState, action);

  const expectedState = [];

  expect(result).toEqual(expectedState);
});
