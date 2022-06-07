import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import { aiService } from "../../services/ai.service";
import { saveChecklist } from "../../store/actions/checklist.action";
import { useDispatch } from "react-redux";
import { utilService } from "../../services/util.service";
import clara from '../../assets/img/clara.png'

export function AiModal({ task, boardId, groupId }) {
  const dispatch = useDispatch();

  const onCreateAiChecklist = ({ checklistTitle, todoTitles }) => {
    const checklist = { title: checklistTitle };
    checklist.id = utilService.makeId();
    checklist.todos = [];
    todoTitles.map((title) => {
      checklist.todos.push({
        id: utilService.makeId(),
        isDone: false,
        title,
      });
    });
    dispatch(saveChecklist(checklist, boardId, groupId, task.id));
  };

  
  const commands = [
      {
      command: "build a to-do list for *",
      callback: async (sttInput) => {
        try {
          const response = await aiService.getAiTextCompletion(sttInput)
          onCreateAiChecklist(response) 
        } catch (err) {
            console.log('could not get response from stt : ', err)
        }
      },
    },
  ]

  const {listening} = useSpeechRecognition();
  let { transcript, resetTranscript } = useSpeechRecognition({ commands });
  
  return (
    <div className="ai-modal-container">
      <div className="clara-img-container avatar">
      <img src={clara} alt="" />
      </div>
      <h1>Hi Im Clara Your AI powered assistant</h1>
        <p>i was built with the <a href="https://openai.com/blog/openai-api/">GPT-3 engine from OpenAI</a></p>
        {/* <button onClick={() => SpeechRecognition.startListening({language: "en-US"})} className={`rec-btn ${listening ? 'recoding' : 'not-recording'}`}></button> */}
        {/* <button onClick={() => SpeechRecognition.startListening({language: "en-US"})} className={`rec-btn ${listening ? 'recoding' : 'not-recording'}`}></button> */}
        {/* <button className="rec-btn recoding"></button> */}
        {/* <button onClick={() => SpeechRecognition.startListening({language: "en-US"})} className="rec-btn recoding"></button> */}
        <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening({language: "en-US"})}>Start </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}
