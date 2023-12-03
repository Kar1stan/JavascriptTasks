//fetch real API 

const fetchEarthPopulation = async () => {
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length; // Returning the number of posts as a substitute for population
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

// Usage
fetchEarthPopulation()
  .then((posts) => {
    console.log(`Number of posts: ${posts}`);
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error}`);
  });
