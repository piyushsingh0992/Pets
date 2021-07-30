import { wishListManager } from "./reducer.js";

test("first load ", () => {
  const initialState = [];
  const action = {
    type: "FIRST_LOAD",
    payload: [
      {
        desc: "Make sure your reptile friend hava cozy home",
        fastDelivery: false,
        off: 7,
        outOfStock: false,
        price: 421,
        productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
        productName: "Reptile Home",
        rating: 4,
        tags: { animal: "reptile", category: "home" },
        wishlist: true,
        _id: "60dc22d374176500a15e79a9",
      },
      {
        desc: "Build a home  for your  bird",
        fastDelivery: false,
        off: 32,
        outOfStock: false,
        price: 772,
        productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
        productName: "Bird Home",
        rating: 0,
        tags: { animal: "bird", category: "home" },
        wishlist: true,
        _id: "60dc22d374176500a15e79b5",
      },
    ],
  };
  let result = wishListManager(initialState, action);

  const expectedState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
    {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  ];

  expect(result).toEqual(expectedState);
});

test("add to wishlist ", () => {
  const initialState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
  ];
  const action = {
    type: "ADD",
    payload: {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  };
  let result = wishListManager(initialState, action);

  const expectedState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
    {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  ];

  expect(result).toEqual(expectedState);
});

test("add to wishlist testing if we can add a item multiple time in a wishlist ", () => {
  const initialState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
    {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  ];
  const action = {
    type: "ADD",
    payload: {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  };
  let result = wishListManager(initialState, action);

  const expectedState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
    {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  ];

  expect(result).toEqual(expectedState);
});

test("remove from wishlist ", () => {
  const initialState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
    {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79b5",
    },
  ];
  const action = {
    type: "REMOVE",
    payload: {
      desc: "Build a home  for your  bird",
      fastDelivery: false,
      off: 32,
      outOfStock: false,
      price: 772,
      productImg: "https://i.ibb.co/5BY9rWh/birdhome2.png",
      productName: "Bird Home",
      rating: 0,
      tags: { animal: "bird", category: "home" },
      wishlist: false,
      _id: "60dc22d374176500a15e79b5",
    },
  };
  let result = wishListManager(initialState, action);

  const expectedState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
  ];

  expect(result).toEqual(expectedState);
});

test("logout ", () => {
  const initialState = [
    {
      desc: "Make sure your reptile friend hava cozy home",
      fastDelivery: false,
      off: 7,
      outOfStock: false,
      price: 421,
      productImg: "https://i.ibb.co/tcyWYTC/reptilehome4.png",
      productName: "Reptile Home",
      rating: 4,
      tags: { animal: "reptile", category: "home" },
      wishlist: true,
      _id: "60dc22d374176500a15e79a9",
    },
  ];
  const action = { type: "LOGOUT" };
  let result = wishListManager(initialState, action);

  const expectedState = [];

  expect(result).toEqual(expectedState);
});
