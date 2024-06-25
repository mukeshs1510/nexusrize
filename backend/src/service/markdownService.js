const { Remarkable } = require("remarkable");
const md = new Remarkable();

const getMarkdownHtml = async (markdownContent) => {
  try {
    const htmlContent = md.render(markdownContent);
    return htmlContent;
  } catch (error) {
    throw new Error("Markdown conversion failed " + error);
  }
};

module.exports = { getMarkdownHtml };
