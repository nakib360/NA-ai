import { ArrowUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";

const QuestInput = ({ setQuestion, loading, modal, setModal }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = value
        ? textareaRef.current.scrollHeight + "px"
        : "24px";
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setQuestion(value);
        setValue("");
      }
    }
  };

  return (
    <div className="relative bg-secondary rounded-2xl text-sm p-5 shadow-lg  dark:md:shadow-secondary">
      <textarea
        ref={textareaRef}
        onChange={(e) => setValue(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        onKeyDown={loading ? undefined : handleKeyDown}
        className="w-full resize-none focus:outline-none mb-10 max-h-[72px] placeholder:text-gray-500"
        placeholder={"Ask NA what you want to know....."}
        value={value}
        rows={1}
      />

      <div className="absolute right-3 bottom-3 flex items-center gap-3">
        <div className="flex items-center bg-primary text-primary-foreground rounded-full cursor-pointer">
          <div onClick={() => setModal("gemini")} className={modal === "gemini" ? " p-2 bg-blue-400 rounded-l-full" : "p-2"}>
            Gemini
          </div>
          <div onClick={() => setModal("chatGPT")} className={modal === "chatGPT" ? "p-2 bg-blue-400 rounded-r-full" : "p-2"}>
            Chat GPT
          </div>
        </div>
        <button
          type="submit"
          onClick={loading ? undefined : () => {
            if (value.trim()) {
              setQuestion(value);
              setValue("");
            }
          }}
          className=" text-background text-sm bg-foreground p-1.5 md:p-2 rounded-full cursor-pointer dark:hover:bg-foreground/90 hover:bg-foreground/70"
        >
          {loading ? <RiCheckboxBlankFill className="text-xl" /> : <ArrowUp size={20} />}
        </button>
      </div>
    </div>
  );
};

export default QuestInput;
