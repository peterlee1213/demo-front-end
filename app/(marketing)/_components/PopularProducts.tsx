"use client"

import STYLE from "../_const/style";
import styles from "../_style/scrollbar.module.css";
import ProductItem, { ProductItemProps } from "./PopularProductItem";

const productList: ProductItemProps[] = [
    {
        isSpecialOffer: true,
        productPhotoUrl: "/images/pixel-9-pro.webp",
        productName: "Pixel 9 Pro",
        productAlt: "Pixel 9 Pro",
        productPrice: "From $999",
        isPreOrder: true,
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        isSpecialOffer: true,
        productPhotoUrl: "/images/pixel-9.webp",
        productName: "Pixel 9",
        productAlt: "Pixel 9",
        productPrice: "$799",
        isPreOrder: true,
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        isSpecialOffer: true,
        productPhotoUrl: "/images/pixel-9-pro-fold.webp",
        productName: "Pixel 9 Pro Fold",
        productAlt: "Pixel 9 Pro Fold",
        productPrice: "$1749",
        isPreOrder: true,
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        isSpecialOffer: true,
        productPhotoUrl: "/images/pixel-watch-3.webp",
        productName: "Pixel Watch 3",
        productAlt: "Pixel Watch 3",
        productPrice: "From $349",
        isPreOrder: true,
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        isSpecialOffer: true,
        productPhotoUrl: "/images/pixel-buds-pro-2.webp",
        productName: "Pixel Buds Pro 2",
        productAlt: "Pixel Buds Pro 2",
        productPrice: "$219",
        isPreOrder: true,
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        productPhotoUrl: "/images/pixel-tablet.webp",
        productName: "Pixel Tablet",
        productAlt: "Pixel Tablet",
        productPrice: "$399",
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        productPhotoUrl: "/images/fitbit-charge-6.webp",
        productName: "Fitbit Charge 6",
        productAlt: "Fitbit Charge 6",
        productPrice: "$139",
        onItemClick() { },
        onActionButtonClick() { },
    },
    {
        productPhotoUrl: "/images/nest-wifi-pro.webp",
        productName: "Nest Wifi Pro",
        productAlt: "Nest Wifi Pro",
        productPrice: "$189",
        onItemClick() { },
        onActionButtonClick() { },
    },
];

export default function PopularProducts() {
    return (
        <div className="flex flex-col items-center">
            <div className={STYLE.HEADER_FONT_STYLE + " mt-28"}>Popular on the Google Store.</div>
            <div className={"flex flex-row max-w-7xl overflow-x-auto gap-6 p-8 " + styles.customizeScrollbarContainer}>
                {
                    productList.map((product, index) => (
                        <ProductItem key={index} {...product}></ProductItem>
                    ))
                }
            </div>
        </div>
    );
}

