import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
import { BsEmojiGrin } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { CiMicrophoneOn } from "react-icons/ci";

function Typesend() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="flex space-x-1 h-[8vh]"
        style={{
          backgroundColor: "rgb(240, 242, 245)",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "30px",
            color: "rgb(84, 101, 111)",
          }}
        >
          <BsEmojiGrin />
          <IoMdAdd />
        </div>

        <div
          className=" w-[70%] mx-4"
          style={{ display: "flex", gap: "20px", color: "rgb(84, 101, 111)" }}
        >
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-xl outline-none mt-1 px-3 py-3 w-full"
            style={{ height: "40px" }}
          />
          <button>
            <IoSend className="text-3xl" style={{ fontSize: "26px" }} />
          </button>
        </div>
        <div style={{ fontSize: "30px", color: "rgb(84, 101, 111)" }}>
          <CiMicrophoneOn />
        </div>
      </div>
    </form>
  );
}

export default Typesend;
