"use client";

import { useState, useRef, useEffect } from "react";
import Moveable from "react-moveable";

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

import "./fileexplorer.css";

export default function FileExplorer() {
    const [position, setPosition] = useState({ top: 100, left: 100 });
    const explorerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true); // Quando il componente è montato, aggiorna lo stato
    }, []);

    const handleDrag = ({ top, left }: { top: number; left: number }) => {
        setPosition({ top, left });
    };

    return (
        <>
            <div
                ref={explorerRef}
                style={{
                    position: "absolute",
                    top: position.top,
                    left: position.left,
                    border: "none", // Rimuove il bordo
                    outline: "none", // Rimuove il bordo blu
                    cursor: "move", // Imposta il cursore come "move" durante il drag
                }}
            >
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
            </div>
            {/* Componente Moveable */}
            {isMounted && (
                <Moveable
                    target={explorerRef.current} // Elemento bersaglio
                    draggable={true} // Abilita trascinamento
                    onDrag={({ target, left, top }) => {
                        target.style.left = `${left}px`;
                        target.style.top = `${top}px`;
                        handleDrag({ top, left });
                    }}
                    // Rimuove il punto centrale del drag
                    renderDirections={[]} // Disabilita le direzioni del drag
                />
            )}
        </>
    );
}