import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";
import { IoArchiveOutline } from "react-icons/io5";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div style={{ marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginTop: "20px",
          paddingLeft: "15px",
        }}
      >
        <div style={{ fontSize: "20px", color: "rgb(0, 166, 131)" }}>
          <IoArchiveOutline />
        </div>
        <div style={{}}>
          <h1>Archived</h1>
        </div>
      </div>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 16.5vh)", marginTop: "12px" }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
