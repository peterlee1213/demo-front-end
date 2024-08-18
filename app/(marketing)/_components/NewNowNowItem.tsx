import Image from "next/image";
import PrimaryButton from "../_globalCommonComponents/PrimaryButton";
import STYLE from "../_const/style";
import { Height } from "@mui/icons-material";

type NewNowNowItemProps = {
    productName: string;
    /**
     * each element takes a line
     */
    productBrief: string[];
    learnMore: () => void;
    productPictureUrl: string;
    /**
     * width of picture
     */
    width: number;
    /**
     * height of picture
     */
    height: number;
    /**
     * the text to display when the image fails to load
     */
    alt: string;
}

const NewNowNowItem = (props: NewNowNowItemProps) => {

    const {
        productName = "",
        productBrief = [],
        learnMore = () => null,
        productPictureUrl = "",
        width = 0,
        height = 0,
        alt = ""
    } = props || {};

    return (
        <div className={STYLE.ITEM_BG_COLOR + " rounded-3xl"}>
            <div className="pt-10 text-center mb-4">{productName}</div>
            {
                productBrief.map((brief, index) => (
                    <div className={STYLE.HEADER_FONT_STYLE + " "} key={index}>{brief}</div>
                ))
            }
            <div className="text-center my-5">
                <PrimaryButton>Learn more</PrimaryButton>
            </div>
            <div>
                <Image className="mx-auto" alt={alt} width={width} height={height} src={productPictureUrl}></Image>
            </div>
        </div>
    );
}

export type { NewNowNowItemProps };
export default NewNowNowItem;