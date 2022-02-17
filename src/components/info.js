import React from 'react'
import "./info.css";
import { useSelector } from "react-redux";

export default function Info() {
    const username = useSelector((state) => state.user);
    const currentRound = useSelector((state) => state.currentRound);
    const totalRounds = useSelector((state) => state.totalRounds);
    const score = useSelector((state) => state.score);

    return (
        <div className="info-container">
            <div>Username: {username}</div>
            <div>Round: {currentRound} / {totalRounds}</div>
            <div>Score: {score}</div>
        </div>
    )
}