const model = require("../model/product");
const Product = model.Product;
const ejs = require("ejs");
const path = require("path");

exports.createProduct = (req, res) => {
  console.log(req.body);
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
      ejs.renderFile(
        path.resolve(__dirname, "../pages/index.ejs"),
        { products: products },
        (err, str) => {
          if (err) {
            res.json(err);
          } else {
            res.send(str);
          }
        }
      );
    })
    .catch((err) => {
      res.json({ title: err });
    });
};

exports.getProduct = (req, res) => {
  Product.findById(new model.Types.ObjectId(req.params.id))
    .then((product) => {
      ejs.renderFile(
        path.resolve(__dirname, "../pages/index.ejs"),
        { products: [product] },
        (err, str) => {
          if (err) {
            res.json(err);
          } else {
            res.send(str);
          }
        }
      );
    })
    .catch((err) => {
      res.json({ title: err });
    });
};

exports.getAddProduct = (req, res) => {
  ejs.renderFile(
    path.resolve(__dirname, "../pages/add.ejs"),
    (err, str) => {
      if (err) {
        res.json(err);
      } else {
        res.send(str);
      }
    }
  );
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
