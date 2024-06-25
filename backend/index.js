const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const MarkdownController = require("./src/controller/markdownController");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.post("/render-markdown", MarkdownController.getMarkdownHtml);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
