import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar =() => {
    const isMenuOpen = useSelector((store)=> store.app.isMenuOpen)

    if(!isMenuOpen) return 

    return <div className="w-60 shadow-lg p-5">
        <ul>
        <li className="mb-1">
            <Link to="/">🏠 Home</Link>
        </li >    
        <li className="mb-1">🎶  Shorts</li>
        <li className="mb-3">🎬 Subscriptions</li>
        </ul>
        <hr/>
        <ul>
        <li className="mt-3">📚 Library</li>
        <li className="mb-1">🕜  History</li>
        <li className="mb-1">📻 Watch later</li>
        <li className="mb-3"> 👍 Liked videos</li>
        </ul>
        <hr/>
        <ul>
        <li className="mt-3">🎤 Music</li>
        <li className="mb-1">🏏  Sports</li>
        <li className="mb-1">🎮 Gaming</li>
        <li className="mb-3"> 🎥 Movies</li>
        </ul>
        <hr/>
        <ul>
        <li className="mt-3">🎤 Trending</li>
        <li className="mb-1">🛒  Shopping</li>
        <li className="mb-1">📺 Live</li>
        <li className="mb-1"> 📰 News</li>
        <li className="mb-3"> 📔 Learning</li>
        </ul>
    </div>
}

export default Sidebar