import Image from "next/image";
import UnderScoreButton from "../_globalCommonComponents/UnderScoreButton";

type DiscoverTheWorldItemProps = {
    pictureUrl: string;
    /**
     * width of picture
     */
    width: number;
    /**
     * height of picture
     */
    height: number;
    /**
     * text to display when picture fails to load
     */
    alt: string;
    description: string;
    readArticleAction: () => void;
}

const DiscoverTheWorldItem = (props: DiscoverTheWorldItemProps) => {
    const {
        pictureUrl = "",
        width = 0,
        height = 0,
        alt = "",
        description = "",
        readArticleAction = () => null
    } = props || {};

    return (
        <div>
            <Image src={pictureUrl} width={width} height={height} alt={alt}></Image>
            <div>{description}</div>
            <div>
                <UnderScoreButton>Read article</UnderScoreButton>
            </div>
        </div>
    );
}

export type { DiscoverTheWorldItemProps }
export default DiscoverTheWorldItem;