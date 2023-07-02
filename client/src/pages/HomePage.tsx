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
        } catch {
            alert("There is a problem with the server")
        }
    }

    const addTab = () => {
        const index = Object.keys(wordsList).length;
        setWordList(prev => {
            prev[index] = [];
            return prev;
        })
        setTab(index)
    }

    return (
        <div className="home-page">
            <div className="side-bar">
                <DateRangePicker start={start} end={end} setStart={setStart} setEnd={setEnd} />
                <TabsComp tab={tab} setTab={setTab} tabsLength={Object.keys(wordsList).length} addTab={addTab} />
                <SearchBar wordsList={wordsList[tab]} setWordList={handleWordListChange} />
                <Button onClick={onSubmit} variant="contained" className="submit-btn">submit</Button>
            </div>
            <Messages messages={allMessages} />
        </div>
    );
}

export default HomePage;
