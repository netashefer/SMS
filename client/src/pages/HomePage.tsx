import { Button } from "@mui/material";
import { useState } from "react";
import { getData } from "../api/api";
import DateRangePicker from "../components/DatePicker/DatePicker";
import Messages from "../components/Messages/Messages";
import SearchBar from "../components/SearchBar/SearchBar";
import { formatDate } from "../helpers/date.helper";
import { Message } from "../types/message.types";
import './HomePage.css';
import TabsComp from "../components/Tabs/Tabs";
import _ from "lodash";
import Image from '../images/logo.jpeg';

const HomePage = () => {
    const [wordsList, setWordList] = useState<Record<number, string[]>>({ 0: [] });
    const [start, setStart] = useState<any>(null);
    const [end, setEnd] = useState<any>(null);
    const [allMessages, setAllMessages] = useState<Message[]>([]);
    const [tab, setTab] = useState<number>(0);

    const handleWordListChange = (list: string[]) => {
        setWordList(prev => {
            prev[tab] = list;
            return { ...prev };
        })
    }

    const onSubmit = async () => {
        try {
            const startDate = formatDate(start);
            const endDate = formatDate(end);
            const dateRange = startDate && endDate ? { startDate, endDate } : null;
            const result = await getData(wordsList, dateRange);
            setAllMessages(result);
            if (!result.length) {
                alert("There aren't results");
            }
        } catch {
            alert("There is a problem with the server")
        }
    }

    const addTab = () => {
        const index = +(_.max(Object.keys(wordsList)) || 0) + 1;
        setWordList(prev => {
            prev[index] = [];
            return prev;
        })
        setTab(index)
    }

    const deleteTab = (tabNum: number) => {
        setWordList(prev => {
            delete prev[tabNum];
            return { ...prev };
        });
        const index = +(_.min(Object.keys(wordsList)) || 0);
        setTab(index)
    }

    return (
        <div className="home-page">
            <div className="side-bar">
                <DateRangePicker start={start} end={end} setStart={setStart} setEnd={setEnd} />
                <TabsComp tab={tab} setTab={setTab} tabs={Object.keys(wordsList)} addTab={addTab} deleteTab={deleteTab} />
                <SearchBar wordsList={wordsList[tab]} setWordList={handleWordListChange} />
                <Button onClick={onSubmit} variant="contained" className="submit-btn">submit</Button>
            </div>
            <div className="messages-section">
                <img src={Image} className="logo" />
                <Messages messages={allMessages} />
            </div>
        </div>
    );
}

export default HomePage;
