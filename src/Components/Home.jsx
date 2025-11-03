import { useEffect, useState } from "react";
import QuestInput from "./QuestInput";
import AnsField from "./AnsField";
import axios from "axios";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (!question.trim()) return;

    axios.post("https://na-ai-server.onrender.com/gemini", { question })
      .then(res => setAnswer(res.data))
      .catch(err => console.log(err));
  }, [question]);

  return (
    <div className="flex flex-col justify-between items-center">
      {/* Chat display area */}
      <div className="w-full md:w-4/6 flex-1 p-3 mt-10 mb-25">
        <AnsField question={question} answer={answer} />
      </div>

      {/* Fixed bottom input area */}
      <div className="w-full md:w-4/6 p-3 bg-background fixed bottom-0">
        <QuestInput setQuestion={setQuestion} />
      </div>
    </div>
  );
};

export default Home;
