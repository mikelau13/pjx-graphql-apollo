export const transformCity = (result: any = {}) => {
  return {
    id: result.id,
    name: result.name,
    city: result.city
  };
};

export const transformCities = (results: any = {}) => {
  if (!Array.isArray(results.items)) {
    return [];
  }

  return results[0].cities.map(item => {
    return transformCity(item);
  });
};
