import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[8vh]">
      <div className="px-1 py-1">
        <form onSubmit={handleSubmit}>
          <div
            className="flex items-center rounded-lg p-2"
            style={{ backgroundColor: "rgb(240, 242, 245)", width: "100%" }}
          >
            {/* Input Field */}
            <input
              type="text"
              className="grow outline-none bg-transparent"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="text-gray-500 ml-2 mr-2" />
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          className=" p-2 rounded-[15px] hover:bg-[rgb(220,220,220)] duration-300"
          style={{ backgroundColor: "rgb(217, 253, 211)" }}
        >
          <button>All</button>
        </div>

        <div className="bg-[rgb(240,242,245)] p-2 rounded-[15px] hover:bg-[rgb(220,220,220)] duration-300">
          <button>Unread</button>
        </div>
        <div className="bg-[rgb(240,242,245)] p-2 rounded-[15px] hover:bg-[rgb(220,220,220)] duration-300">
          <button>Favourites</button>
        </div>
        <div className="bg-[rgb(240,242,245)] p-2 rounded-[15px] hover:bg-[rgb(220,220,220)] duration-300">
          <button>Groups</button>
        </div>
      </div>
    </div>
  );
}

export default Search;
