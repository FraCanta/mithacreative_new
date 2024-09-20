import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Video = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePlayClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseClick = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="relative flex justify-center">
      {!isFullScreen && (
        <>
          <div
            className="absolute inset-0 flex items-center justify-center w-20 h-20 border-4 rounded-full cursor-pointer bg-primary dark:bg-purple border-purple dark:border-white"
            onClick={handlePlayClick}
          >
            <Icon
              icon="weui:play-filled"
              width="2rem"
              height="2rem"
              className="text-white dark:text-primary"
            />
          </div>

          <div
            className="w-[400px] h-20 rounded-[32px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://img.youtube.com/vi/2scPZ1U-KLk/hqdefault.jpg')`,
            }}
          ></div>
        </>
      )}

      {/* Fullscreen Video */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full max-w-5xl h-[80vh]">
            <iframe
              className="w-full h-full object-cover rounded-[32px]"
              src="https://www.youtube.com/embed/2scPZ1U-KLk?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0"
              title="YouTube video"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            {/* Close button */}
            <button
              onClick={handleCloseClick}
              className="absolute p-2 text-white bg-red-500 rounded-full top-4 right-4"
            >
              <Icon icon="carbon:close" width="2rem" height="2rem" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
