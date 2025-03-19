import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../context/contextApi";

import LeftNavMenuItem from "./LeftNavMenuItem";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

import {
  TvMinimalPlay,
  Clapperboard,
  History,
  ListVideo,
  SquarePlay,
  Clock3,
  ThumbsUp,
  Radio,
  Dot,
  ChevronDown
} from "lucide-react";

// import  categories  from "../utils/constants.js";
export default function LeftNav() {
  const categories = [
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
      name: "Fashion & beauty",
      icon: <GiEclipse />,
      type: "category",
      divider: true,
    },
  ];
  const setting = [
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
  ];
  const home = [
    { name: "New", icon: <AiFillHome />, type: "home", newName: "Accueil" },
    {
      name: "Report History",
      icon: <Clapperboard />,
      type: "menu",
      newName: "shorts",
    },
    {
      name: "Help",
      icon: <TvMinimalPlay />,
      type: "menu",
      newName: "Abonements",
    },
  ];
  const vous = [
    { name: "Historique", icon: <History />, type: "menu" },
    { name: "playlist", icon: <ListVideo />, type: "menu" },
    { name: "vos video", icon: <SquarePlay />, type: "menu" },
    { name: "a regarder plus tard", icon: <Clock3 />, type: "menu" },
    { name: 'videos "j\'aime"', icon: <ThumbsUp />, type: "menu" },
  ];

  const { selectCategories, setSelectedCategories, mobileMenu } =
    useContext(Context);
  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategories(name);
      case "home":
        return setSelectedCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  console.log("nav", mobileMenu);

  return (
    <div
      className={` custom-scrollbar w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0]  transition-all ${
        mobileMenu ? "translate-x-[0]" : ""
      }`}
    >
      <div className="flex px-5 flex-col text-white  ">
        {home.map((item, index) => (
          <div key={index}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.newName}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectCategories === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {/* {item.divider && <hr className="my-5 border-white/[0.2]" />} */}
          </div>
        ))}
        <hr className="my-5 border-white/[0.2]" />
      </div>
      <div className="flex px-5 flex-col text-white  ">
        {vous.map((item, index) => (
          <div key={index}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectCategories === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {/* {item.divider && <hr className="my-5 border-white/[0.2]" />} */}
          </div>
        ))}
        <hr className="my-5 border-white/[0.2]" />
      </div>
      <div className="flex px-5 flex-col  ">
        <h3 className="text-white mb-3">Explorer</h3>
        {categories.map((item, index) => (
          <div key={index}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectCategories === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {/* {item.divider && <hr className="my-5 border-white/[0.2]" />} */}
          </div>
        ))}
      </div>
      <hr className="my-5 px-5 border-white/[0.15]" />
      <div className="flex px-5 flex-col gap-y-3 text-white  ">
        <h3 className="text-white mb-3">abonement</h3>
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaFPBTNCYgEXL1RdjcIg6yuSu1SHmV7V9nwVMl96yv_V4C94XxQS4POh5mCLrN_W1N9YM&usqp=CAU"
              alt="minute du code"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">les minute du code</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-red-600 mr-5">
              {" "}
              <Radio />{" "}
            </span>
          </div>
        </div>
        {/* ------------------------ */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://static-cse.canva.com/blob/1901308/1600w--iu48-Ns-Wk.jpg"
              alt="speek english"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">speek english</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-red-600 mr-5">
              {" "}
              <Radio />{" "}
            </span>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0cmPdmLowjbgrpafNSaMEPkAQVu4Iuwe71ZQExBIR-ZDvC4oPOkRW5X10iLo5KjI29A&usqp=CAU"
              alt="music flash"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">music flash</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-[#4c8dff]">
              {" "}
              <Dot />{" "}
            </span>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nd-Px_c-D8dqrfT7VkqgGgKFuRmArOkhjTw1aFi6KG0wRb1bL5pusfQK0NzwMHWx0XQ&usqp=CAU"
              alt="nodejs"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">NodeJs 2025</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-[#4c8dff]">
              {" "}
              <Dot />{" "}
            </span>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/337604111/original/78afacaddcac992613727dd571d710ccb24a7296/make-profile-and-banner-of-your-game-youtube-channel.jpg"
              alt="game "
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">game boy</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-red-600 mr-5">
              {" "}
              <Radio />{" "}
            </span>
          </div>
        </div>
        {/* --------------------------- */}
        {/* --------------------------- */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://i.ytimg.com/vi/ydY6eUs94N8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_adOQMU2cPrjFyiev3F3O2enFqw"
              alt="speek english"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">fluter design</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-red-600 mr-5">
              {" "}
              <Radio />{" "}
            </span>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div>
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://i.ytimg.com/vi/jb0KaJkxq_A/maxresdefault.jpg"
              alt="speek english"
            />
          </div>
          <div className="ml-3">
            <h4 className="text-[12px]">leran react js</h4>
          </div>
          <div className="ml-3 flex items-center">
            <span className="text-xl text-[#4c8dff]">
              {" "}
              <Dot />{" "}
            </span>
          </div>
        </div>
        {/* --------------------------- */}
        <div className="flex items-center overflow-x-hidden  text-center">
          <div className=" flex items-center">
            <span className="text-xl text-white">
              {" "}
              <ChevronDown />{" "}
            </span>
          </div>

          <div className="ml-3">
            <h4 className="text-[12px]">plus</h4>
          </div>
        </div>
        {/* --------------- */}
        <hr className="my-3 border-white/[0.2]" />
      </div>
      <div className="flex px-5 flex-col  ">
        {setting.map((item, index) => (
          <div key={index}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectCategories === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {/* {item.divider && <hr className="my-5 border-white/[0.2]" />} */}
          </div>
        ))}
      </div>
      <hr className="my-5 px-5 border-white/[0.15]" />
      <div className="text-white text-[16px] text-center uppercase ">
        Clone by: fonou tech
      </div>
    </div>
  );
}
