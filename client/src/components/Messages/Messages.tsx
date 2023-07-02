import { CardContent, Typography } from "@mui/material";
import { formatDatetime } from "../../helpers/date.helper";
import { Message } from "../../types/message.types";
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import './Messages.css';

const Messages = ({ messages }: { messages: Message[] }) => {
    return (
        <div className="messages-container">
            <div className="messages-title">Messages</div>
            {
                messages.length ? messages.map(msg =>
                    <>
                        {
                            msg?.message ? <CardContent className="card">
                                <Typography sx={{ fontSize: 14, border: 3, borderRadius: 3, borderColor: "gray", borderWidth: 1, padding: 3, fontFamily: "fantasy" }} color="text.secondary" gutterBottom>
                                    <div className="message-metadata">
                                        <div className="message-translated"><PersonIcon /> {msg.sender_name}</div>
                                        <div className="message-translated"><ChatIcon /> {msg.chat_name}</div>
                                        <div className="message-datetime">{formatDatetime(msg.timestamp)}</div>
                                    </div>
                                    <div className="message-text"><b>Original Message: </b>{msg.message}</div>
                                    <div className="message-translated"><b>Translated Message: </b>{msg.translated_message}</div>
                                </Typography>
                            </CardContent> : null
                        }
                    </>
                ) : <div>There are not messages</div>
            }
        </div>
    );
}

export default Messages;
