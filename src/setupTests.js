class LocalStorage {
  constructor(jest) {
    Object.defineProperty(this, "getItem", {
      value: jest.fn((key) => (this[key] !== undefined ? this[key] : null)),
    });
    Object.defineProperty(this, "setItem", {
      // not mentioned in the spec, but we must always coerce to a string
      value: jest.fn((key, val = "") => {
        this[key] = val + "";
      }),
    });
    Object.defineProperty(this, "removeItem", {
      value: jest.fn((key) => {
        delete this[key];
      }),
    });
    Object.defineProperty(this, "clear", {
      value: jest.fn(() => {
        Object.keys(this).map((key) => delete this[key]);
      }),
    });
  } // end constructor

  get length() {
    return Object.keys(this).length;
  }
}

global.localStorage = new LocalStorage(jest);
