import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import ResponsiveCarousel from "./Responsive";
import NaviLinkCarousel from "./NaviLinkCarousel";
export default function Feed() {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black justify-center mx-auto">
        <div className=" text-amber-50 px-5 mb-3">
          <NaviLinkCarousel/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:p-5">
          {!loading && searchResults &&
            searchResults.map((item,index) => {
            //   if (item?.type !== "video") return false;
              return (
                <VideoCard key={index} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
