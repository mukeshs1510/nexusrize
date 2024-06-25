const { getMarkdownHtml } = require("../service/markdownService");

class MarkdownController {
  getMarkdownHtml = async (req, res) => {
    try {
      const { markdownContent } = req.body;
      if (!markdownContent) {
        return res.status(400).json({ error: "Markdown content is required" });
      }

      const htmlContent = await getMarkdownHtml(markdownContent);
      res.send(htmlContent);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while processing the markdown content",
      });
    }
  };
}

module.exports = new MarkdownController();
