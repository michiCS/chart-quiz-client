import React, { useState, useEffect } from 'react';
import { useDispatch, batch } from "react-redux";
import { logIn, setTotalRounds } from "../redux/actions/index";

import "./landing.css";

export default function Landing() {

    const [username, setUsername] = useState("");
    const [rounds, setRounds] = useState(0);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !rounds) return;
        batch(() => {
            dispatch(logIn(username));
            dispatch(setTotalRounds(rounds));
        })
    }

    return (
        <div className="container">
            <div className="background">
                <form className="form" onSubmit={handleSubmit}>
                    <input className={"input-username"} type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
                    <select className={"select-rounds"} defaultValue={"default"} onChange={(e) => setRounds(e.target.value)}>
                        <option disabled value="default">Rounds</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <button type="submit" className="button-submit">OK</button>
                </form>
            </div>
        </div>
    )
}