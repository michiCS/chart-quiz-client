import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Highscore from "./highscore";
import { useSelector, useDispatch } from "react-redux";
import {personalHighscores, globalHighscores} from "../apiurls";


export default function HighScoreTab() {

    const {user, totalRounds} = useSelector((state) => state);

    return (
        <Tabs style={{width: "90%", marginLeft: "15px", marginRight: "15px"}}>
            <TabList>
                <Tab>Personal Bests</Tab>
                <Tab>Global Bests</Tab>
            </TabList>

            <TabPanel>
                <Highscore
                url={`${personalHighscores}?username=${user}&rounds=${totalRounds}`}
                title="Your Highscores 🏆"
                ></Highscore>
            </TabPanel>

            <TabPanel>
                <Highscore
                 url={`${globalHighscores}?rounds=${totalRounds}`}
                 username={user}
                 title="Global Highscores for current settings 🌍"
                ></Highscore>
            </TabPanel>
        </Tabs>
    )
}