import axios from 'axios';
import { log } from 'console';
import { Message } from '../types/message.types';
import { toast } from 'react-toastify';

type Data = {
  chatName: string;
  senderName: string;
  senderPhone: string;
  message: string;
  translatedText: string;
  photoUrl: string;
  timeStamp: number;
};

export const getData = async (wordList: string[], dateRange: {startDate: string, endDate: string}|null) => {
    let url = "http://localhost:5000/data";
    let isAdded = false;
    if (wordList?.length > 0) {
      url = url.concat(`?message=${wordList.join(",")}`);
      url = url.substring(0, url.length);
      isAdded = true;
    }
    if (dateRange){
      url = url.concat(`${isAdded ? '&' : '?'}from_date=${dateRange.startDate}&to_date=${dateRange.endDate}`);
    }

    const response = await axios.get<Message[]>(url, {
      headers: {
        Accept: 'application/json',
        "Access-Control-Allow-Origin": '*'
      },
    });
    
    if ((response.status as Number) !== 200) {
      throw new Error(`Error! status: ${response.status}`);
    }

    return response.data;
};