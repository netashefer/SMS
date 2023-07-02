import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import './SearchBar.css';

const SearchBar = ({ wordsList, setWordList }: { wordsList: string[], setWordList: (list: string[]) => void }) => {
    const [value, setValue] = useState("");

    const addWord = () => {
        if (value?.trim() !== "")
            setWordList(_.uniq([...(wordsList || []), value]));
        setValue("");
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            addWord();
        }
    }

    const deleteWord = (word: string) => {
        setWordList(wordsList?.filter(w => w !== word) || []);
    }

    return (
        <div className="search-bar">
            <div className='search-container'>
                <TextField onKeyDown={onKeyPress} value={value} onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(e.target.value)} id="standard-basic" label="what word are you looking for?" variant="standard" />
                <div onClick={addWord}><AddCircleIcon /></div>
            </div>
            <List className='list-container'>
                {
                    wordsList?.map(word => {
                        return <ListItem
                            key={word}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon onClick={() => deleteWord(word)} />
                                </IconButton>
                            }
                        >
                            <ListItemText
                                primary={word}
                            />
                        </ListItem>
                    })}
            </List>
        </div>
    );
}

export default SearchBar;
