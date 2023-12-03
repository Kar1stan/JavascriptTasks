//fetch with API and 2 second delay

const fetchEarthPopulation = async () => {
  const apiPromise = new Promise(async (resolve) => {
    try {
      // Simulating a 2-second delay
      await new Promise((delayResolve) => setTimeout(delayResolve, 2000));

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      resolve(data.length); // Returning the number of posts as a substitute for population
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  });

  return apiPromise;
};

// Usage
fetchEarthPopulation()
  .then((posts) => {
    console.log(`Number of posts: ${posts}`);
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });
