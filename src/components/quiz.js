import React, { useState, useEffect } from 'react'
import Question from './question';
import Info from './info';
import Ending from './ending';
import './quiz.css';
import { useSelector, useDispatch } from "react-redux";
import { finished } from "../redux/actions/index";

export default function Quiz() {

    const score = useSelector((state) => state.score);
    const currentRound = useSelector((state) => state.currentRound);
    const totalRounds = useSelector((state) => state.totalRounds);
    const isFinished = useSelector((state) => state.finished);
    const dispatch = useDispatch();

    useEffect(() => {
        if(currentRound > totalRounds) {
            dispatch(finished());
        }
    }, [currentRound])

    return (
        <div className="quiz-container">
            {/* <button onClick={() => dispatch(finished())}>test</button> */}
            {!isFinished && <Info totalRounds={totalRounds} score={score}></Info>}
            {!isFinished && <Question ></Question>}
            {isFinished && <Ending score={score} totalRounds={totalRounds} ></Ending>}
        </div>

    )
}