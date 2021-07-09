import React from 'react'
import Flickity from "react-flickity-component";

const Carousel = () => {
    return (
        <Flickity>           
                <figure className="me-2">
                    <img src="https://placeimg.com/640/480/animals" style={{ maxHeight: "150px" }} className="border1" />
                </figure>
                <figure className="me-2">
                    <img src="https://placeimg.com/640/480/nature" style={{ maxHeight: "150px" }} className="border1" />
                </figure>
                <figure className="me-2">
                    <img src="https://placeimg.com/640/480/architecture" style={{ maxHeight: "150px" }} className="border1" />
                </figure>           
        </Flickity>

    )
}

export default Carousel
