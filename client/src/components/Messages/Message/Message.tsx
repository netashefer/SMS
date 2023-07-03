import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Button, CardContent, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState } from 'react';
import { formatDatetime } from "../../../helpers/date.helper";
import { Message } from '../../../types/message.types';
import './Message.css';

const EntitiesMap: Record<string, OverridableComponent<SvgIconTypeMap<{}, "svg">>> = {
    PERSON: PersonOutlineOutlinedIcon,
    ORGANIZATION: CorporateFareOutlinedIcon,
    LOCATION: RoomOutlinedIcon,
    DATE: CalendarMonthOutlinedIcon,
    PRODUCT: ProductionQuantityLimitsOutlinedIcon,
    COMPETITION: ContactSupportOutlinedIcon,
    PRIZE: EmojiEventsOutlinedIcon,
    EVENT: EventOutlinedIcon,
    DISEASE: ContactSupportOutlinedIcon,
}

const MessageContainer = ({ msg }: { msg: Message }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <CardContent className="card">
            <Typography sx={{ boxShadow: '1px 1px 1px 1px rgb(61, 61, 184)', fontSize: 14, border: 3, borderRadius: 3, borderColor: "gray", borderWidth: 1, padding: 3, fontFamily: "fantasy" }} color="text.secondary" gutterBottom>
                <div className="message-metadata">
                    <div className="message-translated"><PersonIcon /> {msg.sender_name}</div>
                    <div className="message-translated"><ChatIcon /> {msg.chat_name}</div>
                    <div className="message-datetime"><CalendarMonthIcon />{formatDatetime(msg.timestamp)}</div>
                </div>
                <div className="message-text">{msg.translated_message}</div>
                <Button className='original-btn' onClick={() => setIsOpen(prev => !prev)} variant="outlined" >{isOpen ? 'hide' : 'show'} original message</Button>
                {
                    isOpen ? <div className="message-text">{msg.message}</div> : null
                }

                <div className='entities-container'>

                    {
                        Object.entries((msg.ner)).map(([key, value]) => {
                            const Comp = EntitiesMap[key] || <ContactSupportOutlinedIcon />;
                            return <div className='entity'><Comp />{value.map(a => a).join(", ")}</div>
                        })
                    }
                </div>
            </Typography>
        </CardContent >
    )
}

export default MessageContainer;