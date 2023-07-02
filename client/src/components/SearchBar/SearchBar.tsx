import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const SearchBar = () => {
    const [wordsItems, setWordItems] = useState<string[]>([]);
    const [value, setValue] = useState("");

    const addWord = ()=>{
        setWordItems(prev=>[...prev, value]);
    }

    return (
      <div className="search-bar">
         <TextField value={value} id="standard-basic" label="Standard" variant="standard"/>
         <button onClick={addWord}>add</button>
         <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      {/* <FolderIcon /> */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={'Secondary text'}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
      </div>
    );
  }
  
  export default SearchBar;
