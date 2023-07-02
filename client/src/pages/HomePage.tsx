import { Button } from "@mui/material";
import { useState } from "react";
import { getData } from "../api/api";
import DateRangePicker from "../components/DatePicker/DatePicker";
import Messages from "../components/Messages/Messages";
import SearchBar from "../components/SearchBar/SearchBar";
import { formatDate } from "../helpers/date.helper";
import { Message } from "../types/message.types";
import './HomePage.css';

const HomePage = () => {
    const [wordsList, setWordList] = useState<string[]>([]);
    const [start, setStart] = useState<any>(null);
    const [end, setEnd] = useState<any>(null);
    const [allMessages, setAllMessages] = useState<Message[]>([]);

    const onSubmit = async () => {
        try {
            const startDate = formatDate(start);
            const endDate = formatDate(end);
            const dateRange = startDate && endDate  ? {startDate, endDate} : null;
            const result = await getData(wordsList, dateRange);
            setAllMessages(result);
        } catch {
            alert("There is a problem with the server")
        }
    }

    return (
        <div className="home-page">
            <div className="side-bar">
                <DateRangePicker start={start} end={end} setStart={setStart} setEnd={setEnd} />
                <SearchBar wordsList={wordsList} setWordList={setWordList} />
                <Button onClick={onSubmit} variant="contained" className="submit-btn">submit</Button>
            </div>
            <Messages messages={allMessages} />
        </div>
    );
}

export default HomePage;
