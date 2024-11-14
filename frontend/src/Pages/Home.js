import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" w-full relative">
      <div
        className="h-[1000px] w-[100vw] bg-black"
        style={{
          backgroundImage: `url("homeImg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="h-[1000px] w-[100vw] flex flex-wrap justify-center items-center absolute text-green-200 text-[150px] font-bold ">
          Sign<span className="text-blue-200">Wise</span>
        </div>
      </div>

      <div className="h-[1000px] bg-black flex flex-wrap text-white">
        {/* text */}
        <div className="w-[60vw] text-[50px] font-semibold flex flex-wrap justify-center items-center text-center">
          <span>
            Welcome to <span className="text-green-200"> Sign</span>
            <span className="text-blue-200">Wise </span>, your smart solution
            for road sign detection!
          </span>
        </div>
        {/* image */}
        <div className="w-[40vw] flex flex-wrap justify-center items-center">
          <div
            className="h-[800px] w-[800px] bg-black"
            style={{
              backgroundImage: `url("speedlimit60.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </div>

      {/* 2nd panel */}

      <div className="h-[1000px] bg-black flex flex-wrap text-white">
        {/* image */}
        <div className="w-[40vw] flex flex-wrap justify-center items-center">
          <div
            className="h-[800px] w-[800px] bg-black"
            style={{
              backgroundImage: `url("home2.png")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
        </div>

        {/* text */}
        <div className="w-[60vw] text-[50px] font-semibold flex flex-wrap justify-center items-center text-center">
          <span>
            Stay informed, stay safe with
            <span className="text-green-200"> Sign</span>
            <span className="text-blue-200">Wise</span>!
          </span>
        </div>
      </div>

      {/* end panel */}
      <div
        className="h-[1000px] w-[100vw] bg-black relative"
        style={{
          backgroundImage: `url("endPage.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div className="h-[1000px] w-[100vw] flex flex-wrap justify-center pt-[600px] absolute text-[150px] font-bold ">
          <Link to={"/test"} className="text-blue-100 ">
            Test it Now.
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
