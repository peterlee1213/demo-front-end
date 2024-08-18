import STYLE from "../_const/style";
import NewNowNowItem, { NewNowNowItemProps } from "./NewNowNowItem";

const firstLineItems: NewNowNowItemProps[] = [
    {
        productName: "Pixel 9 Pro and Pro XL",
        alt: "Pixel 9 Pro and Pro XL",
        productBrief: ["All pro.", "Pure magic."],
        learnMore() { },
        productPictureUrl: "/images/new/pixel-9-pro.webp",
        width: 684,
        height: 522
    }, {
        productName: "Pixel 9",
        alt: "Pixel 9",
        productBrief: ["A phone full", "of firsts."],
        learnMore() { },
        productPictureUrl: "/images/new/pixel-9.webp",
        width: 684,
        height: 522
    }
];
const secondLineItems: NewNowNowItemProps[] = [
    {
        productName: "Pixel 9 Pro Fold",
        alt: "Pixel 9 Pro Fold",
        productBrief: ["An epic display of", "Google AI."],
        learnMore() { },
        productPictureUrl: "/images/new/pixel-9-pro.webp",
        width: 684,
        height: 522
    }
];
const thirdLineItems: NewNowNowItemProps[] = [
    {
        productName: "Pixel Watch 3",
        alt: "Pixel Watch 3",
        productBrief: ["Big screens. Bigger", "strides."],
        learnMore() { },
        productPictureUrl: "/images/new/pixel-watch-3.webp",
        width: 448,
        height: 522
    }, {
        productName: "Pixel Tablet",
        alt: "Pixel Tablet",
        productBrief: ["Help in your hand.", "And at home."],
        learnMore() { },
        productPictureUrl: "/images/new/pixel-tablet.webp",
        width: 448,
        height: 522
    }, {
        productName: "Pixel Buds Pro 2",
        alt: "Pixel Buds Pro 2",
        productBrief: ["Light ears ahead."],
        learnMore() { },
        productPictureUrl: "/images/new/pixxel-buds-pro-2.webp",
        width: 448,
        height: 562
    }
];

const NewNowNow = () => {
    return (
        <div className="flex flex-col items-center">
            <div className={STYLE.HEADER_FONT_STYLE + " mt-32 mb-20"}>New. Now. Wow.</div>
            <div>
                <div className="flex max-w-7xl gap-6">
                    {
                        firstLineItems.map((item, index) => (
                            <div key={index} className="basis-1/2">
                                <NewNowNowItem {...item}></NewNowNowItem>
                            </div>
                        ))
                    }
                </div>
                <div className="max-w-full my-6">
                    <div>
                        {
                            secondLineItems.map((item, index) => (
                                <div key={index}>
                                    <NewNowNowItem {...item}></NewNowNowItem>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex max-w-7xl gap-6">
                    {
                        thirdLineItems.map((item, index) => (
                            <div key={index} className="basis-1/3">
                                <NewNowNowItem {...item}></NewNowNowItem>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default NewNowNow