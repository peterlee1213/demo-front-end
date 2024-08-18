import { Button } from "@mui/material";
import STYLE from "../_const/style";
import PrimaryButton from "../_globalCommonComponents/PrimaryButton";
import Image from "next/image";

export default function FeatureProduct() {
    return (
        <div className={STYLE.ITEM_BG_COLOR + " flex flex-col items-center gap-6"}>
            <div className=" text-center text-transparent bg-clip-text pt-14 bg-gradient-to-r from-[#188df9] to-[#9088ed] text-6xl font-bold w-72">Oh hi,AI.</div>
            <div className="w-[550px] text-center leading-6">Meet the new Pixel 9 Pro XL, Pixel 9 Pro, Pixel 9 and Pixel 9 Pro Fold with Gemini.</div>
            <PrimaryButton >Browser Phones</PrimaryButton>
            <Image alt="featured products" src={"/images/featured_product.webp"} width={1750} height={527}></Image>
        </div>
    );
}