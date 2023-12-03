/**
 * Fetch earth population from our mocked API.
 * This function should return a promise that resolves in 2 seconds returing population number.
 */
const fetchEarthPopulation = async () => {
    const apiPromise = new Promise((resolve) => {
    // Simulating an asynchronous API call with setTimeout
    setTimeout(() => {
      const populationData = 8000000;
      resolve(populationData);
    }, 2000); // Resolves after 2 seconds
    });
  
    return apiPromise;
  };
  
  // Usage
fetchEarthPopulation()
.then((population) => {
  console.log(`Earth population: ${population}`);
})
.catch((error) => {
  console.error(`Error fetching population: ${error}`);
});

  test("Verify population API promise", async () => {
    const population = await fetchEarthPopulation();
    expect(population).toEqual(8000000);
  });