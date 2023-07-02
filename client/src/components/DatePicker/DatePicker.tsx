import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './DatePicker.css';

const DateRangePicker = ({ start, end, setStart, setEnd }: {
    start: any;
    end: any;
    setStart: (v: any) => void;
    setEnd: (v: any) => void;
}) => {

    return (
        <div className="date-range-picker">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    className='date-picker-start'
                    label="start date"
                    value={start}
                    onChange={(newValue) => setStart(newValue)}
                />
                <DatePicker
                    className='date-picker-end'
                    label="end date"
                    value={end}
                    onChange={(newValue) => setEnd(newValue)}
                />
            </LocalizationProvider>
        </div>
    );
}

export default DateRangePicker;
