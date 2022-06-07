import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { aiService } from "../../services/ai.service";
import { saveChecklist } from "../../store/actions/checklist.action";
import { useDispatch } from "react-redux";
import { utilService } from "../../services/util.service";
export function AiModal({ task, boardId, groupId }) {
  const dispatch = useDispatch();
  const onCreateAiChecklist = ({ checklistTitle, todoTitles }) => {
    console.log(todoTitles);
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
      callback: async (library) => {
        try {
          const response = await aiService.getAiTextCompletion(library)
          onCreateAiChecklist(response)
        } catch (err) {
          console.log('could not get response from stt : ', err)
        }
      },
    },
  ]
  const { listening } = useSpeechRecognition();
  let { transcript, resetTranscript } = useSpeechRecognition({ commands });
  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening({ language: "en-US" })}>Start </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}