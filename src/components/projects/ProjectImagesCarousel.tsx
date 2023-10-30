import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { ProjectProps } from "./projectsData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

interface CarouselProps {
    name: ProjectProps["name"];
    images: ProjectProps["images"];
    bgImages: ProjectProps["backgroungImages"];
    interval: number | null | undefined;
}

const ProjectImagesCarousel: React.FC<CarouselProps> = ({ images, bgImages, name, interval }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    const isSingleImage = images.length === 1;

    const carouselProps = {
        fade: true,
        slide: true,
        touch: true,
        interval,
        activeIndex: index,
        indicators: isSingleImage ? false : true,
        nextIcon: null,
        prevIcon: null,
        prevLabel: null,
        nextLabel: null,
        onSelect: handleSelect,
        "data-bs-theme": "dark",
        className: "project-img",
    };

    return (
        <Carousel {...carouselProps}>
            {images.map((image, index) => (
                <Carousel.Item key={index} style={{ backgroundImage: `url(${bgImages[index]})` }}>
                    <LazyLoadImage src={image} effect="opacity" alt={`${name} img-${index + 1}`} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProjectImagesCarousel;
