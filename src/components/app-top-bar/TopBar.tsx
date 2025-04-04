"use client";
import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import PlusInformation from "./PlusInformation";
import UserProfile from "./UserProfile";
import NotificationCard from "./NotificationCard";
import MobileTrigger from "./MobileTrigger";

const TopBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };
  return (
    <div className="flex w-full gap-4 p-4 bg-bgCard sticky top-0 z-10 justify-between  ">
       <MobileTrigger /> 
      <div className="flex md:grid auto-rows-min gap-[14px] md:gap-4 md:grid-cols-2 md:w-full items-center justify-between">
       
        <div className="">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex justify-end gap-[14px] md:gap-[24px]"> 
          <PlusInformation />
           <NotificationCard />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
