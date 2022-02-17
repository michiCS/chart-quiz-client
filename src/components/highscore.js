import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./highscore.css";
import { useSelector } from "react-redux";

export default function Highscore({ url, username, title }) {

    const blinkingId = useSelector((state) => state.blinkingId);
    const [highscores, setHighscores] = useState([]);

    useEffect(() => {
        console.log(url);
        fetchHighscoreData();
    }, [blinkingId])

    const fetchHighscoreData = () => {
        axios.get(url).then(res => {
            console.log(res.data["highscores"]);
            setHighscores(res.data["highscores"]);
        }).catch(err => {
            console.log("API not reachable!");
        })
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <div>
                    <div className="highscore">
                        {highscores.length > 0 && Object.keys(highscores[0]).filter(k => k !== "_id").map(k => (
                            <strong key={k}>{k.toUpperCase()}</strong>
                        ))}
                    </div>
                </div>
                <div>
                    {highscores.map((item) => {
                        return (<div key={item._id} className={`highscore ${item._id === blinkingId ? "blink" : ""}`}>
                            {Object.keys(item).filter(k => k !== "_id").map(k => {
                                return <div key={k}>{item[k]}</div>
                            })}
                        </div>)
                    })}
                </div>
            </div>

        </div>
    );
}