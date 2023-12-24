import React from "react";

function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col border border-gray-400 m-2 h-96">Intro</div>
        <div className="flex flex-1 flex-col border border-gray-400 m-2">profile pic</div>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col border border-gray-400 m-2 h-96">Project 1</div>
        <div className="flex flex-1 flex-col border border-gray-400 m-2">Project 2</div>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col border border-gray-400 m-2 h-96">Project 3</div>
        <div className="flex flex-1 flex-col border border-gray-400 m-2">Project 4</div>
      </div>
    </div>
  );
}

export default Home;
