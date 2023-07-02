import { CardContent, Typography } from "@mui/material";
import { formatDatetime } from "../../helpers/date.helper";
import { Message } from "../../types/message.types";
import './Messages.css';

const Messages = ({messages}: {messages: Message[]}) => {
    return (
        <div className="messages-container">
            <div className="messages-title">Messages</div>
            {
                messages.length ? messages.map(msg =>
                    <CardContent className="card">
                        <Typography sx={{ fontSize: 14, border: 3, borderRadius: 3, borderColor: "gray", borderWidth: 1, padding: 3, fontFamily: "fantasy" }} color="text.secondary" gutterBottom>
                            <div>{msg.message}</div>
                           <div>{msg.translated_message}</div>
                           <div>{formatDatetime(msg.timestamp)}</div>
                        </Typography>
                    </CardContent>
                ): <div>There are not messages</div>
            }
        </div>
    );
}

export default Messages;
