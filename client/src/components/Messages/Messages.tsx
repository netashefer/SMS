import { CardContent, Typography } from "@mui/material";
import { useState } from "react";
import './Messages.css';

const Messages = () => {
    const [messages, setMessages] = useState(["tamar is the queen", "or also", "niz !!!"]);

    return (
        <div className="messages-container">
            <div className="messages-title">Messages</div>
            {
                messages.map(msg =>
                    <CardContent className="card">
                        <Typography sx={{ fontSize: 14, border: 3, borderRadius: 3, borderColor: "gray", borderWidth: 1, padding: 3, fontFamily: "fantasy" }} color="text.secondary" gutterBottom>
                            {msg}
                        </Typography>
                    </CardContent>
                )
            }
        </div>
    );
}

export default Messages;
