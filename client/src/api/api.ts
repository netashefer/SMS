import axios from 'axios';
import { log } from 'console';
import { Message } from '../types/message.types';
import { toast } from 'react-toastify';
import _ from 'lodash';

type Data = {
  chatName: string;
  senderName: string;
  senderPhone: string;
  message: string;
  translatedText: string;
  photoUrl: string;
  timeStamp: number;
};

export const getData = async (wordList: Record<number, string[]>, dateRange: { startDate: string, endDate: string } | null) => {
  let url = "http://localhost:5000/data";
  let isAdded = false;
  let query = '[';
  if (_.flatMap(wordList)?.length > 0) {
    Object.values(wordList).map(list => {
      if (list.length > 0)
        query += `${JSON.stringify(list).toString()},`;
    })
    query = query.substring(0, query.length - 1);
    query += ']';
    query = query.replaceAll(`"`, `'`);
    url = url.concat(`?message=${query}`);
    isAdded = true;
  }
  if (dateRange) {
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