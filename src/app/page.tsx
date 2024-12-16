"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import FileExplorer from "@/components/FileExplorer";
import WeatherWidget from "@/components/Widget/WeatherWidget";

import DesktopSelection from "@/components/DesktopSelection";
import { useState } from "react";


export default function Home() {
  const [showFileExplorer, setShowFileExplorer] = useState(false);

  const handleToggleFileExplorer = () => {
    setShowFileExplorer((prev) => !prev);
  };


  let backgroundImage = "url('/Background.png')";
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      width: "100%",
      backgroundImage: backgroundImage,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>


      <div style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}>
        <DesktopSelection />
      </div>


      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "5vh",
        display: "flex",
        justifyContent: "center",
        zIndex: 102,
      }}>
        <Topbar />
      </div>


      {showFileExplorer && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <FileExplorer />
        </div>
      )}


      <Sidebar onToggleFileExplorer={function (): void {
        handleToggleFileExplorer();
      }} />



      <div style={{
        position: "absolute", top: 350,
        right: 50,
        zIndex: 1
      }}>
        <WeatherWidget />


      </div>



    </div>
  );
}