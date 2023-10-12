const http = require("http");
const fs = require("fs");
let index = fs.readFileSync("node/index.html", "utf-8");
let data = JSON.parse(fs.readFileSync("node/data.json", "utf-8"));
let products = data.products;
const server = http.createServer((req, res) => {
  console.log("server started");
  console.log(req.url,req.method);
  res.setHeader("dummy", "value");

  if (req.url.startsWith("/product") && !(req.url.endsWith('/product'))) {
    console.log("inside if");
    const id = req.url.split("/")[2];
    const product = products.find((p) => p.id === +id);
    console.log(product);
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**price**", product.price);
    res.end(modifiedIndex);
  } else {
    switch (req.url) {
      case "/":
        res.setHeader("Content-Type", "text/html");
        res.end(index);
        break;

      case "/api":
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
        break;

      case "/product":
        res.setHeader("Content-Type", "text/html");
        let modifiedIndex = index
          .replace("**title**", products[0].title)
          .replace("**price**", products[0].price);
        res.end(modifiedIndex);
        break;

      default:
        res.writeHead(404, "invalid route");
        res.end("<h1>Invalid route</h1>");
        break;
    }
  }
});

server.listen(8080);
