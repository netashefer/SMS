import { Message } from "../../types/message.types";
import MessageContainer from "./Message/Message";
import './Messages.css';

const Messages = ({ messages }: { messages: Message[] }) => {
    return (
        <div className="messages-container">
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
