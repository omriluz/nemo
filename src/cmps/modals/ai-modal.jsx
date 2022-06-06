import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Configuration, OpenAIApi } from "openai";
import { useEffect, useState } from "react";
import { aiService } from "../../services/ai.service";
import { saveChecklist, saveTodo } from "../../store/actions/checklist.action";
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

    // aiTodos.map(todo => {
    // checklist.todos.push()
    // })
    // dispatch(saveChecklist(checklist, boardId, groupId, task.id))
  };

  const {
    //     transcript,
    listening,

    //     resetTranscript,
    //     browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const commands = [
    {
      command: "build a to-do list for *",
      callback: (library) => {
        console.log(library);
        aiService.getAiTextCompletion(library).then((res) => {
          onCreateAiChecklist(res);
        });
        // console.log(aiService.getAiTextCompletion(library))
      },
    },
  ];

  //   if (!browserSupportsSpeechRecognition) {
  //     return null
  //   }

  //   if (!browserSupportsSpeechRecognition) {
  //     return <span>Browser doesn't support speech recognition.</span>;
  //   }

  let { transcript, resetTranscript } = useSpeechRecognition({ commands });

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => SpeechRecognition.startListening({language: "en-US"})}>Start </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}
