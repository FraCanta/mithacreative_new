import React from "react";

export default function Footer() {
  return (
    <div
      className="relative h-[400px] bg-primary dark:bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] -top-[100vh]">
        <div className="h-[400px] sticky top-[calc(100vh-400px)]">
          <div className="flex items-end justify-between text-white dark:text-primary">
            <h1 className="text-8xl leading-[0.8] mt-10">Sticky Footer</h1>
            <p>©copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}
