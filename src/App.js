import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./App.css";

import NasaPhoto from './Components/NasaPhoto';

const dummyData = {
  date: "2022-08-03",
  explanation: "What created the unusual halo around the Cat's Eye nebula? No one is sure. What is sure is that the Cat's Eye Nebula (NGC 6543) is one of the best known planetary nebulae on the sky.  Although haunting symmetries are seen in the bright central region, this image was taken to feature its intricately structured outer halo, which spans over three light-years across.  Planetary nebulae have long been appreciated as a final phase in the life of a Sun-like star. Only recently however, have some planetaries been found to have expansive halos, likely formed from material shrugged off during earlier puzzling episodes in the star's evolution. While the planetary nebula phase is thought to last for around 10,000 years, astronomers estimate the age of the outer filamentary portions of the Cat's Eye Nebula's halo to be 50,000 to 90,000 years.",
  hdurl: "https://apod.nasa.gov/apod/image/2208/CatsHalo_Falls_2719.jpg",
  title: "Halo of the Cat's Eye"
};

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;