import { useEffect, useState } from "react";
import QuestInput from "./QuestInput";
import AnsField from "./AnsField";
import axios from "axios";
import { GradientText } from "./ui/shadcn-io/gradient-text";

const Home = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState("chatGPT");
  const [context, setContext] = useState([]);

  // console.log(context);

  useEffect(() => {
    if (!question.trim()) return;

    // axios.post(`http://localhost:4000/${modal === "chatGPT" ? "Hugging-face" : "gemini"}`, { question, context })
    axios.post(`https://na-ai-server.onrender.com/${modal === "chatGPT" ? "Hugging-face" : "gemini"}`, { question, context })
      .then(res => setAnswer(res.data))
      .catch(err => console.log(err));
  }, [question, modal, context]);

  return (
    <div className="flex flex-col justify-between items-center">
      {/* Chat display area */}
      <div className="w-full md:w-4/6 flex-1 py-3 mt-10 mb-25">
        <div className="text-foreground text-center text-3xl md:text-4xl mt-40">
          <GradientText className="font-semibold" text="Hi, I am NA Ai" />
          <p className="text-xs text-gray-400">What do you think today?</p>
        </div>
        <AnsField setLoading={setLoading} question={question} answer={answer} setContext={setContext} />
      </div>

      {/* Fixed bottom input area */}
      <div className="w-full md:w-4/6 p-3 fixed bottom-0">
        <QuestInput modal={modal} setModal={setModal} loading={loading} setQuestion={setQuestion} />
      </div>
    </div>
  );
};

export default Home;
