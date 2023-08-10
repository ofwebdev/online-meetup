import React, { useEffect, useState } from "react";
import HomeCard from "./components/HomeCard/v1/HomeCard";

// import { useAuth } from "../context/AuthContext";

import { v4 as uuid } from "uuid";

// icons
import { MdVideoCall as NewCallIcon } from "react-icons/md";
import { MdAddBox as JoinCallIcon } from "react-icons/md";
import { BsCalendarDate as CalenderIcon } from "react-icons/bs";
import { MdScreenShare as ScreenShareIcon } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "./components/Header/v1/Header";
import Sidebar from "./components/SideBar/v1/sidebar";
import MainLayout from "./layout/MainLayout";

const roomId = uuid();

const Home = () => {
  // const { user } = useAuth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <MainLayout>
      <div>
        <div className="bg-darkBlue1 min-h-screen text-slate-400">
          <div className="flex h-full md:gap-2 flex-col md:flex-row">
            <div className="p-3 w-auto h-auto items-center">
              <div className="flex gap-2 md:gap-6 mb-3 md:mb-6">
                <Link to={`/room/${roomId}`} className="block w-full">
                  <HomeCard
                    title="New Meeting"
                    desc="Create a new meeting"
                    icon={<NewCallIcon />}
                    iconBgColor="lightYellows"
                    bgColor="bg-yellow-500"
                    route={`/room/`}
                  />
                </Link>
                <Link to={`/join`} className="block w-full">
                  <HomeCard
                    title="Join Meeting"
                    desc="via invitation link"
                    icon={<JoinCallIcon />}
                    bgColor="bg-blue-500"
                  />
                </Link>
              </div>
              <div className="flex gap-2 md:gap-6">
                <HomeCard
                  title="Schedule"
                  desc="schedule your meeting"
                  icon={<CalenderIcon size={20} />}
                  bgColor="bg-blue-500"
                />
                <HomeCard
                  title="Screen Share"
                  desc="show your work"
                  icon={<ScreenShareIcon size={22} />}
                  bgColor="bg-blue-500"
                />
              </div>
              <div>
                <div className="p-3 md:p-4 md:rounded-xl rounded md:text-base text-sm md:mt-6 mt-2 text-white md:font-semibold text-center w-full bg-blue-500">
                  Made with love by
                  <a
                    href="https://github.com/ofwebdev"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    - Omor Faruk
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-grow md:h-screen md:border-l-2 border-lightGray p-3 md:p-4">
              <div className="relative md:h-52 w-full bg-violet-700 rounded md:rounded-2xl p-3">
                <div className="md:absolute bottom-2 left-2 md:bottom-6 md:left-6">
                  {/* {user && (
                <h1 className="text-4xl">Welcome {user?.displayName}</h1>
              )} */}

                  <p className="md:text-7xl text-4xl text-white">
                    {`${
                      date.getHours() < 10
                        ? `0${date.getHours()}`
                        : date.getHours()
                    }:${
                      date.getMinutes() < 10
                        ? `0${date.getMinutes()}`
                        : date.getMinutes()
                    }`}
                  </p>
                  <p className="text-slate-300 font-thin my-1">
                    {`${days[date.getDay()]},${date.getDate()} ${
                      months[date.getMonth()]
                    } ${date.getFullYear()}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
