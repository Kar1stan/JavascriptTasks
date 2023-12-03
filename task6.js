//fetching multiple API with Promise.all

const fetchUserData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

const urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

const fetchDataFromMultipleAPIs = async () => {
  try {
    // Use Promise.all to concurrently fetch data from all URLs
    const userDataArray = await Promise.all(urls.map(fetchUserData));

    // userDataArray is an array of user data from each API
    console.log(userDataArray);
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
};

// Usage
fetchDataFromMultipleAPIs();
