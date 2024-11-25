import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";
import { IoVideocam } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log(selectedConversation.fullname);
  return (
    <div
      className="relative flex items-center h-[8%]  gap-4  duration-300 "
      style={{
        backgroundColor: "rgb(240, 242, 245)",
        justifyContent: "space-between",
        paddingRight: "20px",
      }}
    >
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh]  duration-300 p-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={
                selectedConversation?.image
                  ? `http://localhost:4002/${selectedConversation?.image}`
                  : placeholderImage
              }
              alt="user-avatar"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImage;
              }}
            />
          </div>
        </div>
        <div style={{ color: "rgb(84, 101, 111)", fontSize: "10px" }}>
          <h1 className="text-xl ">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ fontSize: "20px", color: "rgb(84, 101, 111)" }}>
          <IoVideocam />
        </div>
        <div style={{ fontSize: "20px", color: "rgb(84, 101, 111)" }}>
          <IoMdSearch />
        </div>
        <div style={{ fontSize: "20px", color: "rgb(84, 101, 111)" }}>
          <CiMenuKebab />
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
