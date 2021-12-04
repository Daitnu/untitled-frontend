const deepCopy = (object: Object) => JSON.parse(JSON.stringify(object));

export default {
  deepCopy,
};
