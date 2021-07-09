import React from 'react'
import Flickity from "react-flickity-component";

const Carousel = () => {
    return (
        <Flickity>
            <img src="https://placeimg.com/640/480/animals" />
            <img src="https://placeimg.com/640/480/nature" />
            <img src="https://placeimg.com/640/480/architecture" />
        </Flickity>
    )
}

export default Carousel
