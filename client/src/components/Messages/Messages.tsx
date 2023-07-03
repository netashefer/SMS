import { CardContent, Typography } from "@mui/material";
import { formatDatetime } from "../../helpers/date.helper";
import { Message } from "../../types/message.types";
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import './Messages.css';
import MessageContainer from "./Message/Message";

const Messages = ({ messages }: { messages: Message[] }) => {
    return (
        <div className="messages-container">
            <div className="messages-title">Messages</div>
            {
                messages.length ? messages.map(msg =>
                    <>
                        {
                            msg?.message ? <MessageContainer msg={msg} /> : null
                        }
                    </>
                ) : <div>There are not messages</div>
            }
        </div>
    );
}

export default Messages;
