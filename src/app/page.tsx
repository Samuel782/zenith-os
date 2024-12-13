import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import FileExplorer from "@/components/FileExplorer";

import DesktopSelection from "@/components/DesktopSelection";

export default function Home() {
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

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}>
        
      </div>


      <Sidebar />

      


    </div>
  );
}