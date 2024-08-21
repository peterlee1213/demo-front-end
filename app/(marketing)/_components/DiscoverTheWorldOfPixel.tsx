"use client"

import STYLE from "../_const/style";
import DiscoverTheWorldItem, { DiscoverTheWorldItemProps } from "./DiscoverTheWorldItem";
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from "../_style/hidescrollbar.module.css";
import React from "react";

const discoverTheWorldItemList: DiscoverTheWorldItemProps[] = [
    {
        pictureUrl: "/images/discover/pixel-phone-design.webp",
        width: 400,
        height: 330,
        alt: "Pixel phone design - how Pixel designers make the call.",
        description: "Pixel phone design - how Pixel designers make the call.",
        readArticleAction: function () { }
    }, {
        pictureUrl: "/images/discover/kick-with-pixel.webp",
        width: 400,
        height: 330,
        alt: "Kick with Pixel: Summer of Football - Win promo codes, prizes, and more.",
        description: "Kick with Pixel: Summer of Football - Win promo codes, prizes, and more.",
        readArticleAction: function (): void {
        }
    }, {
        pictureUrl: "/images/discover/try.webp",
        width: 400,
        height: 330,
        alt: "Try all Pixel 9 phones on for size.",
        description: "Try all Pixel 9 phones on for size.",
        readArticleAction: function (): void {
        }
    }, {
        pictureUrl: "/images/discover/ai-photo.webp",
        width: 400,
        height: 330,
        alt: "Make your photos pop with Google’s AI-powered photo editing tool.",
        description: "Make your photos pop with Google’s AI-powered photo editing tool.",
        readArticleAction: function (): void {
        }
    }
];

const DiscoverTheWorldOfPixel = () => {

    const onRightClick = () => {
        const element = document.querySelector(".discoverTheWorldOfPixelContent");
        if (element) {
            const itemElement = document.querySelector(".discoverTheWorldOfPixelItem");
            if (itemElement) {
                element.scrollBy({ top: 0, left: itemElement.clientWidth, behavior: "smooth" });
            }
        }
    }

    const onLeftClick = () => {
        const element = document.querySelector(".discoverTheWorldOfPixelContent");
        if (element) {
            const itemElement = document.querySelector(".discoverTheWorldOfPixelItem");
            if (itemElement) {
                element.scrollBy({ top: 0, left: -(itemElement.clientWidth), behavior: "smooth" });
            }
        }
    }

    return (
        <div>
            <div className={STYLE.HEADER_FONT_STYLE + " mt-32 mb-10"}>Discover the world of Pixel.</div>
            <div className="">
                <div className="flex max-w-[1440px] items-center mx-auto">
                    <Fab className="w-14 flex-none" onClick={() => onLeftClick()}>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </Fab>
                    <div className={"discoverTheWorldOfPixelContent text-nowrap grow overflow-x-auto " + styles.hideScrollBar}>
                        {
                            discoverTheWorldItemList.map((item, index) => (
                                <div key={index} className="discoverTheWorldOfPixelItem inline-block w-1/3 px-3 ">
                                    <DiscoverTheWorldItem {...item}></DiscoverTheWorldItem>
                                </div>
                            ))
                        }
                    </div>
                    <Fab className="w-14 flex-none" onClick={() => onRightClick()}>
                        <ChevronRightIcon></ChevronRightIcon>
                    </Fab>
                </div>
            </div>
        </div>
    );
}

export default DiscoverTheWorldOfPixel;