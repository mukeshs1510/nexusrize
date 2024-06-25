import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

const MarkdownEditor: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [htmlContent, setHtmlContent] = useState<string>("");

  const debouncedMarkdownUpdate = debounce(async (content: string) => {
    try {
      const response = await axios.post<string>("render-markdown", {
        markdownContent: content,
      });
      setHtmlContent(response.data);
    } catch (error) {
      console.error("Error submitting Markdown content:", error);
    }
  }, 500);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const content = e.target.value;
    if (content == "" || !content) {
      setMarkdownContent("");
      setHtmlContent("");
    } else {
      setMarkdownContent(content);
      debouncedMarkdownUpdate(content);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={(e) => e.preventDefault()} className="w-full">
        <div className="flex justify-center">
          <textarea
            className="w-full h-40 p-2 border rounded-md shadow-md resize-none"
            value={markdownContent}
            onChange={handleInputChange}
            placeholder="Enter your Markdown content here"
          />
        </div>
      </form>
      <div className="w-full mt-4 p-4 bg-white rounded-md shadow-md text-gray-600 text-left">
        <h2 className="text-lg font-bold mb-2">Rendered HTML:</h2>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
      <div className="w-full mt-4 p-4 bg-white rounded-md shadow-md text-gray-600 text-left overflow-x-auto">
        <h2 className="text-lg font-bold mb-2">Raw HTML Code:</h2>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code>{htmlContent}</code>
        </pre>
      </div>
    </div>
  );
};

export default MarkdownEditor;
