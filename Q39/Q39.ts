function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // calling the function with three city-country pairs
  const city1 = city_country("Lahore", "Pakistan");
  const city2 = city_country("Barcelona", "Spain");
  const city3 = city_country("Toronto", "Canada");
  
  // printing the values returned by the function
  console.log(city1);
  console.log(city2);
  console.log(city3);
  