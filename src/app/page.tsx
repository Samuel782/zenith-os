import Image from "next/image";
import Sidebar from "@/components/Sidebar";

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

      <DesktopSelection />


      <Sidebar />
    </div>
  );
}