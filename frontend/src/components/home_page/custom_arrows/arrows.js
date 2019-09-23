import React from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


export const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div class="custom-right" onClick={() => onClick()}>
        <MdChevronRight/>
    </div>;
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        // state: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div class="custom-left" onClick={() => onClick()}>
        <MdChevronLeft/>
    </div>;
};

export const CustomRightSplashArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div class="custom-right-splash" onClick={() => onClick()}>
        <MdChevronRight />
    </div>;
};

export const CustomLeftSplashArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        // state: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <div class="custom-left-splash" onClick={() => onClick()}>
        <MdChevronLeft />
    </div>;
};