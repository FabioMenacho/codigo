const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = "e6a0b5b21a33562e7cb9d8e2809ae840";

export const getClimaByCiudad = async (ciudad) => {
 const endpoint = `${BASE_URL}?q=${ciudad}&appid=${API_KEY}&units=metric`
 const response = await fetch(endpoint);
 const rpta = await response.json();
 return rpta;
};