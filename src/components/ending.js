import React, { useState, useEffect } from 'react'
import './ending.css';
import { useSelector, useDispatch } from "react-redux";
import { playAgain, logOut } from "../redux/actions/index";
import HighScoreTab from './highscoreTab';
import axios from 'axios';
import { setBlinkingId } from "../redux/actions"
import { personalHighscores, insertScore } from "../apiurls";

export default function Ending() {
    const username = useSelector((state) => state.user);
    const totalRounds = useSelector((state) => state.totalRounds);
    const score = useSelector((state) => state.score);
    const dispatch = useDispatch();
    const [highscores, setHighscores] = useState([]);
    const [inserted, setInserted] = useState(false);

    useEffect(() => {
        fetchHighscoreData();
    }, [])

    useEffect(() => {
        if (inserted) return;
        if ((score > highscores[0]?.score || highscores.length < 5) && score > 0) {
            const newHighScore = {
                username,
                score,
                rounds: totalRounds
            };
            axios.post(insertScore, newHighScore).then(res => {
                console.log(res.data.message, res.data.id);
                setInserted(true);
                dispatch(setBlinkingId(res.data.id))
            })

        }
        console.log(highscores?.length, highscores[0]?.score);

    }, [highscores])

    const fetchHighscoreData = () => {
        axios.get(`${personalHighscores}?username=${username}&rounds=${5}`).then(res => {
            setHighscores(res.data["highscores"]);
        })
            .catch(err => {
                console.err("API not reachable!");
            })
    }

    return (
        <div className="ending-container">
            <h2>Your Result:</h2>
            <div>
                <div>Username: {username}</div>
                <div>Score: {score}</div>
                <div>Rounds played: {totalRounds}</div>
            </div>
            <HighScoreTab></HighScoreTab>
            <div className="button-container" style={{ marginTop: "20px" }}>
                <button onClick={() => dispatch(playAgain())}>Play again</button>
                <button onClick={() => dispatch(logOut())}>End</button>
            </div>
        </div>
    )
}