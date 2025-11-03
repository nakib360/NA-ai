import { useEffect, useState } from "react";
import "../index.css"
import Markdown from "react-markdown";

const AnsField = ({ question, answer }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (question?.trim()) {
      setChats(prev => [...prev, { question, answer: null }]);
    }
  }, [question]);

  useEffect(() => {
    if (answer?.trim()) {
      setChats(prev =>
        prev.map((chat) =>
          chat.answer === null ? { ...chat, answer } : chat
        )
      );
    }
  }, [answer]);

  return (
    <div className="flex flex-col gap-3 mt-3 overflow-y-auto scrollbar-hide px-2">
      {chats.map((chat, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <div className="self-end text-sm bg-primary text-primary-foreground px-3 py-2 rounded-xl wrap-break-word max-w-md">
            {chat.question}
          </div>
          {chat.answer && (
            <pre className="self-start text-sm bg-secondary text-secondary-foreground px-3 py-2 rounded-xl whitespace-pre-wrap wrap-break-word max-w-md">
              <Markdown>{chat.answer}</Markdown>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnsField;
