export function sortHandler(data, sort) {
  switch (sort) {
    case "HIGH_TO_LOW":
      return data.sort((a, b) => {
        return b.price - a.price;
      });
    case "LOW_TO_HIGH":
      return data.sort((a, b) => {
        return a.price - b.price;
      });
    default:
      return data;
  }
}
export function ratingHandler(data, rating) {
  return data.filter((product) => {
    if (product.rating >= rating) {
      return true;
    }
    return false;
  });
}

export function categoryHandler(data, category) {
  switch (category) {
    case "all":
      return data;

    default:
      return data.filter((product) => {
        if (product.tags.category === category) {
          return true;
        }
        return false;
      });
  }
}
export function animalHandler(data, animal) {
  switch (animal) {
    case "all":
      return data;
    case "dog":
      return data.filter((product) => {
        if (product.tags.animal === "dog") {
          return true;
        }
        return false;
      });

    case "cat":
      return data.filter((product) => {
        if (product.tags.animal === "cat") {
          return true;
        }
        return false;
      });

    case "bird":
      return data.filter((product) => {
        if (product.tags.animal === "bird") {
          return true;
        }
        return false;
      });

    case "fish":
      return data.filter((product) => {
        if (product.tags.animal === "fish") {
          return true;
        }
        return false;
      });

    case "reptile":
      return data.filter((product) => {
        if (product.tags.animal === "reptile") {
          return true;
        }
        return false;
      });

    case "":
      return data.filter((product) => {
        if (product.tags.animal === "") {
          return true;
        }
        return false;
      });

    default:
      return data;
  }
}

export function fastDeliveryHandler(data, fastDelivery) {
  if (fastDelivery) {
    return data.filter((product) => {
      if (product.fastDelivery && !product.outOfStock) {
        return true;
      }
      return false;
    });
  }
  return data;
}

export function outOfStockHandler(data, outOfStock) {
  if (outOfStock) {
    return data;
  }

  return data.filter((product) => {
    if (product.outOfStock) {
      return false;
    }
    return true;
  });
}
