import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;

  // Dynamic classes and colors
  const chatName = itsMe ? "chat-end" : "chat-start";
  const bubbleColor = itsMe
    ? "bg-[rgb(217,253,211)] text-[rgb(0,102,68)]" // Light green background with dark green text
    : "bg-[rgb(240,240,240)] text-[rgb(64,64,64)]"; // Light gray background with dark gray text

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div>
      <div className="p-6">
        <div className={`chat ${chatName}`}>
          <div
            className={`chat-bubble ${bubbleColor}`}
            style={{
              borderRadius: "8px", // Optional: Add rounded corners
              padding: "8px 12px", // Optional: Adjust padding
            }}
          >
            {message.message}
          </div>
          <div className="chat-footer text-gray-500 text-sm">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
