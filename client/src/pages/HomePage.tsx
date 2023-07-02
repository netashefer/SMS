import { Button } from "@mui/material";
import { useState } from "react";
import DateRangePicker from "../components/DatePicker/DatePicker";
import Messages from "../components/Messages/Messages";
import SearchBar from "../components/SearchBar/SearchBar";
import './HomePage.css';

const HomePage = () => {
    const [wordsList, setWordList] = useState<string[]>([]);
    const [start, setStart] = useState<any>(null);
    const [end, setEnd] = useState<any>(null);

    const onSubmit = () => {
        const startDate = new Date(start).getTime();
        const endDate = new Date(end).getTime();
    }

    return (
        <div className="home-page">
            <div className="side-bar">
                <DateRangePicker start={start} end={end} setStart={setStart} setEnd={setEnd} />
                <SearchBar wordsList={wordsList} setWordList={setWordList} />
                <Button onClick={onSubmit} variant="contained" className="submit-btn">submit</Button>
            </div>
            <Messages />
        </div>
    );
}

export default HomePage;
