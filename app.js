const data = {
  user: "ubuntu",
  os: "linux",
  virtual: false,
};

const pick = ["virtual"];

const pickValues = (data, pick) => {
  let result = {};
  for (const parametr of pick) {
    if (data[parametr] !== undefined) {
      result[parametr] =
        data[parametr] !== undefined ? data[parametr] : result[parametr];
    }
  }
  return result;
};
console.log(pickValues(data, pick));
