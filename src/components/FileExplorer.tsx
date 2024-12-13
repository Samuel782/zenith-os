"use client";

import Home from "@/SVG/Home";
import Documents from "@/SVG/Documents";
import Radio from "@/SVG/Radio";
import Computer from "@/SVG/Computer";
import HardDisk from "@/SVG/HardDisk";
import USB from "@/SVG/USB";
import Network from "@/SVG/Network";
import Close from "@/SVG/Close";
import Maximase from "@/SVG/Maximase";
import Minimize from "@/SVG/Minimize";

import Draggable from "react-draggable"; // Importa Draggable qui
import "./fileexplorer.css";

export default function FileExplorer() {
    return (
        <Draggable>
            <div className="AppContainer">
                <div className="sidebarApp">
                    <hr className="separator1" />
                    <h1>Folders</h1>
                    <div className="ActiveTab">
                        <Home fillColor="#fff" />
                        <p>Home</p>
                    </div>
                    <div className="Tab">
                        <Documents fillColor="#fff" />
                        <p>Documents</p>
                    </div>
                    <div className="Tab">
                        <Radio fillColor="#fff" />
                        <p>Music</p>
                    </div>
                    <div className="Tab">
                        <Computer fillColor="#fff" />
                        <p>Application</p>
                    </div>

                    <hr className="separator1" />
                    <h1>Disks</h1>
                    <div className="Tab">
                        <HardDisk fillColor="#fff" />
                        <p>ZenithDisk</p>
                    </div>
                    <div className="Tab">
                        <USB fillColor="#fff" />
                        <p>USB</p>
                    </div>
                    <div className="Tab">
                        <Network fillColor="#fff" />
                        <p>NetworkDisk</p>
                    </div>
                </div>
                <div className="mainContent">
                    <div className="windowControl">
                        <div className="WindowButton">
                            <Minimize fillColor="#fff" />
                        </div>
                        <div className="WindowButton">
                            <Maximase fillColor="#fff" />
                        </div>
                        <div className="WindowButton">
                            <Close fillColor="#fff" />
                        </div>
                    </div>
                    <hr className="separator2" />
                </div>
            </div>
        </Draggable>
    );
}