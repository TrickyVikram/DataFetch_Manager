//If you haven't already installed Axios, you can do so by running: npm install axios

// Import Axios
const axios = require('axios');

// Create a reusable API service
const apiService = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000,  // Set a timeout limit of 5 seconds
});

// Function to fetch data
const fetchData = async (endpoint) => {
  try {
    // Send GET request to the specified endpoint
    const response = await apiService.get(endpoint);

    // Handle success
    console.log('Data fetched successfully:', response.data);
    return response.data; // Return the data for further use

  } catch (error) {
    // Handle error
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
  }
};

// Example usage of fetchData
fetchData('/users'); // Fetching data from /users endpoint
