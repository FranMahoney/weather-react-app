import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "7078ca8e45a8e54ad9b485826d119586";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <Loader type="Grid" color="#00BFFF" height={100} width={100} />;
}
