"use client";
import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import PlusInformation from "./PlusInformation";
import UserProfile from "./UserProfile";
import NotificationCard from "./NotificationCard";

const TopBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };
  return (
    <div className="flex w-full flex-col gap-4 p-4 bg-bgCard sticky top-0 z-10">
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex justify-end gap-[24px]"> 
          <PlusInformation />
           <NotificationCard />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
