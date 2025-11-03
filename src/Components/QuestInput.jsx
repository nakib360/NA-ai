import { ArrowUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const QuestInput = ({ setQuestion }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = value ? textareaRef.current.scrollHeight + "px" : "24px";
    }
  }, [value]);

  return (
    <div className="relative bg-secondary rounded-2xl text-sm p-5">
      <textarea
        ref={textareaRef}
        onChange={(e) => setValue(e.target.value)}
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        className="w-full resize-none focus:outline-none mb-10 max-h-[72px]"
        placeholder={"Ask NA what you want to know....."}
        value={value}
        rows={1}
      />
      <div
        onClick={() => {
          if(value.trim()) {
            setQuestion(value);
            setValue("");
          }
        }}
        className="text-background text-sm bg-foreground absolute right-3 bottom-3 p-1.5 md:p-2 rounded-full cursor-pointer dark:hover:bg-foreground/90 hover:bg-foreground/70"
      >
        <ArrowUp size={20} />
      </div>
    </div>
  );
};

export default QuestInput;
