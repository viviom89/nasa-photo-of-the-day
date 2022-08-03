import React from 'react';

const dummyData = {
    date: "2022-08-03",
    explanation: "What created the unusual halo around the Cat's Eye nebula? No one is sure. What is sure is that the Cat's Eye Nebula (NGC 6543) is one of the best known planetary nebulae on the sky.  Although haunting symmetries are seen in the bright central region, this image was taken to feature its intricately structured outer halo, which spans over three light-years across.  Planetary nebulae have long been appreciated as a final phase in the life of a Sun-like star. Only recently however, have some planetaries been found to have expansive halos, likely formed from material shrugged off during earlier puzzling episodes in the star's evolution. While the planetary nebula phase is thought to last for around 10,000 years, astronomers estimate the age of the outer filamentary portions of the Cat's Eye Nebula's halo to be 50,000 to 90,000 years.",
    hdurl: "https://apod.nasa.gov/apod/image/2208/CatsHalo_Falls_2719.jpg",
    title: "Halo of the Cat's Eye"
  };

  const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explantion}</p>
        </div>
    )
  }

  export default NasaPhoto;