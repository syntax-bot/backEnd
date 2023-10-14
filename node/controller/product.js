const model = require("../model/product");
const Product = model.Product;

exports.createProduct = (req, res) => {
  const newData = new Product(req.body);
  newData
    .save()
    .then((doc) => {
      res.status(201).json(doc);
    })
    .catch((err) => {
      res.status(401).json({ title: err });
    });
};

exports.getAllProducts = (req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.json({ title: err });
    });
};

exports.getProduct = (req, res) => {
  Product.findById(new model.Types.ObjectId(req.params.id))
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      res.json({ title: err });
    });
};

exports.replaceProduct = (req, res) => {
  Product.findOneAndReplace(
    { _id: new model.Types.ObjectId(req.params.id) },
    req.body
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate(
    { _id: new model.Types.ObjectId(req.params.id) },
    req.body
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.deleteproduct = (req, res) => {
  Product.findOneAndDelete({ _id: new model.Types.ObjectId(req.params.id) })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
};
