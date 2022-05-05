const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended:true
  })
);

app.use(express.json());

app.use(require('body-parser').json());
const routes = require("../routes/transactions");
app.use("", routes);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(
    `Server running at http://localhost:${app.get("port")}`
  );
});
