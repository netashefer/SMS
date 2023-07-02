import fetch from 'node-fetch';

type Data = {
  chatName: string;
  senderName: string;
  senderPhone: string;
  message: string;
  translatedText: string;
  photoUrl:string;
  timeStamp: number;
};

const getData = async () => {
  try {
    // 👇️ const response: Response
    const response = await fetch('https://localhost:5000/data', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // 👇️ const result: GetUsersResponse
    const result = (await response.json()) as Data;

    console.log('result is: ', JSON.stringify(result, null, 4));

    return result;

  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  };
};