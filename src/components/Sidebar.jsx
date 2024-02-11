import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar =() => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    if(!isMenuOpen) return 

    return <div className="w-60 shadow-lg p-5">
        <ul>
        <li>
            <Link to="/">🏠 Home</Link>
        </li>    
        <li>🎶  Shorts</li>
        <li>📻 Subscriptions</li>
        </ul>
        <h1 className="">You {">"}</h1>
        <ul>
        <li>🎤 Your Channel</li>
        <li>🕜  History</li>
        <li>📻 Your videos</li>
        <li> ⌚ Watch later</li>
        <li>👍 Liked videos</li>
        </ul>
    </div>
}

export default Sidebar