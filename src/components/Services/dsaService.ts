import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'https://dsapathway-d3ezcfbthjfkfvha.canadacentral-01.azurewebsites.net';

// Define the structure of your data (User)
export interface Msg {
  msg: string;
}

// Function to get the list of users
export const getMsg = async (): Promise<Msg> => {
  try {
    const response = await axios.get<Msg>(`${BASE_URL}/greet`);
    return response.data; // Return the data
  } catch (error) {
    // Handle any errors
    throw new Error(error instanceof Error ? error.message : 'API Error');
  }
};

// You can add more API calls here, like fetching a single user, posting data, etc.
