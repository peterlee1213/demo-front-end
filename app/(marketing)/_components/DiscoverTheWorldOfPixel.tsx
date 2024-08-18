import STYLE from "../_const/style";
import DiscoverTheWorldItem, { DiscoverTheWorldItemProps } from "./DiscoverTheWorldItem";
import Fab from '@mui/material/Fab';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    return (
        <div>
            <div className={STYLE.HEADER_FONT_STYLE + " mt-32 mb-10"}>Discover the world of Pixel.</div>
            <div className="flex">
                <Fab>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </Fab>
                <div>
                    {
                        discoverTheWorldItemList.map((item, index) => (
                            <DiscoverTheWorldItem key={index} {...item}></DiscoverTheWorldItem>
                        ))
                    }
                </div>
                <Fab>
                    <ChevronRightIcon></ChevronRightIcon>
                </Fab>
            </div>
        </div>
    );
}

export default DiscoverTheWorldOfPixel;