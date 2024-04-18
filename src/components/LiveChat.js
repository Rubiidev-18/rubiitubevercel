import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [liveMessgae, setLiveMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      console.log("Data");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Commented by user 🚀",
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 w-full h-[600px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          // Dont use index as key
          chatMessages.map((chatMsg, index) => (
            <ChatMessage
              key={index}
              name={chatMsg.name}
              message={chatMsg.message}
            />
          ))
        }
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ajay",
              message: liveMessgae,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="px-2 w-96 border border-black"
          type="text"
          value={liveMessgae}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button
        //  onClick={()=>{
        //   dispatch(
        //     addMessage({
        //       name: "Ajay",
        //       message: liveMessgae,
        //     })
        //   );
        //   setLiveMessage("")
        // }}
          className="mx-2 px-2 bg-green-100 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
