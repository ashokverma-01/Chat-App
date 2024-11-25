import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";
import { PiFolderSimplePlusLight } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
import { BiMessageAltDetail } from "react-icons/bi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";

function Left() {
  return (
    <>
      <div style={{ display: "flex", width: "100%" }}>
        <div
          style={{
            width: "80px",
            backgroundColor: "rgb(240, 242, 245)",
            paddingBottom: "10px",
          }}
        >
          <div style={{ padding: "20px", color: "rgb(152, 160, 165)" }}>
            <div
              style={{
                fontSize: "30px",
              }}
            >
              <BiMessageAltDetail />
            </div>
            <div style={{ fontSize: "30px", marginTop: "15px" }}>
              <HiOutlineStatusOnline />
            </div>
            <div style={{ fontSize: "30px", marginTop: "15px" }}>
              <MdOutlineChangeCircle />
            </div>
            <div style={{ fontSize: "30px", marginTop: "15px" }}>
              <MdGroups />
            </div>
          </div>
          <div
            style={{ fontSize: "25px", marginTop: "385px", padding: "20px" }}
          >
            <IoSettingsOutline />
          </div>
          <div
            style={{
              fontSize: "20px",
              // marginLeft: "10px",
            }}
          >
            <Logout />
          </div>
        </div>
        <div
          className="w-full"
          style={{
            backgroundColor: "rgb(255, 255, 255)",
            color: "rgb(84, 101, 111)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              fontSize: "20px",
            }}
          >
            <div>
              <h1 style={{ color: "black", fontWeight: "bold" }}>Chats</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <PiFolderSimplePlusLight />
              <CiMenuKebab />
            </div>
          </div>
          <Search />
          <div
            className=" flex-1  overflow-y-auto"
            style={{ minHeight: "calc(84vh - 10vh)" }}
          >
            <Users />
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              paddingLeft: "30px",
              marginTop: "10px",
            }}
          >
            <img src={Logo} style={{ width: "30px", height: "30px" }} />
            <span style={{ marginTop: "10px", color: "green" }}>
              Get WhatsApp For Windows
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
