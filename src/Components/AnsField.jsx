import { useEffect, useRef, useState } from "react";
import "../index.css"
import Markdown from "react-markdown";
import { Spinner } from "./ui/shadcn-io/spinner";
import { GradientText } from "./ui/shadcn-io/gradient-text";

const AnsField = ({ question, answer, setLoading }) => {
  const [chats, setChats] = useState([]);
  const bottomRef = useRef();

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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  useEffect(() => {
    const hasPending = chats.some((chat) => chat.answer === null);
    setLoading(hasPending);
  }, [chats, setLoading]);

  return (
    <div className="flex flex-col gap-3 mt-3 px-0">
      {chats.map((chat, idx) => (
        <div key={idx} className="flex flex-col gap-3">
          <div className="self-end text-sm bg-primary text-primary-foreground px-3 py-2 rounded-xl wrap-break-word max-w-md">
            {chat.question}
          </div>
          {chat?.answer ? (
            <pre className="self-start text-sm bg-secondary text-secondary-foreground px-3 py-2 rounded-xl whitespace-pre-wrap wrap-break-word max-w-md font-sans">
              <Markdown>{chat.answer}</Markdown>
            </pre>
          ) : (
            <div className="flex items-center text-xs gap-1">
              <Spinner className={"text-foreground"} width={15} />
              <GradientText className="text-xs" text={"Genarating your answer....."} />
            </div>
          )
          }
          {/* {chat?.answer ? setLoading(false) : setLoading(true)} */}
        </div>
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default AnsField;
