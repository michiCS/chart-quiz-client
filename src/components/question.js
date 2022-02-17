import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Chart from './chart';
import "./question.css";
import { useSelector, useDispatch } from "react-redux";
import { nextRound, updateScore } from "../redux/actions/index";
import { FaAngleRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { newQuizRound } from '../apiurls';

export default function Question() {
    const [correctOption, setCorrectOption] = useState({});
    const [options, setOptions] = useState([]);

    const [answer, setAnswer] = useState("");
    const [active, setActive] = useState(true);

    const [counter, setCounter] = useState(15);

    const currentRound = useSelector((state) => state.currentRound);
    const dispatch = useDispatch();

    let mounted = true;

    useEffect(() => {
        if (mounted) {
            fetchQuizRoundData();
            setActive(true);
            setAnswer("");
            setCounter(15);
        }
        return () => { mounted = false }
    }, [currentRound])

    useEffect(() => {
        mounted && counter > 1 && active && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter])

    const fetchQuizRoundData = () => {
        axios.get(newQuizRound)
            .then(res => {
                if (mounted) {
                    const { correctOption, options } = res.data;
                    setCorrectOption(correctOption);
                    setOptions(options);
                }
            })
            .catch(err => {
                console.err("API not reachable!");
            })
    }

    const checkAnswer = (e) => {
        if (active) {
            setActive(false);
            setAnswer(e.target.dataset.txt);
            if (e.target.dataset.txt === correctOption.ticker) {
                dispatch(updateScore(100 * counter));
            }
        }
    }

    const next = () => {
        if (answer) dispatch(nextRound());
    }

    return (
        <div className="question-container">
            <Chart priceData={correctOption.priceData}></Chart>
            <div className="answer-container">
                <div className="answers">
                    {options.map((ticker, index) => (
                        <div key={index}
                            onClick={(e) => checkAnswer(e, ticker)}
                            className={`answer ${active ? "answer-hover " : (correctOption.ticker === ticker) ? "correct " : (answer === ticker ? "wrong " : "")}`}
                            data-txt={ticker}>{ticker}
                        </div>
                    ))}
                </div>
                {answer && <IconContext.Provider value={{ color: "white", size: "4em", className:"button-next" }}>
                        <FaAngleRight onClick={next}/>
                </IconContext.Provider>}
            </div>
        </div>
    )
}