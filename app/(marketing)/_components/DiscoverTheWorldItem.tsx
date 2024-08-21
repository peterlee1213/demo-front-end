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
            <Image className="rounded-3xl aspect-square" src={pictureUrl} width={width} height={height} alt={alt}></Image>
            <div className="mt-10 text-base font-bold text-wrap text-center h-20">{description}</div>
            <div className="text-center">
                <UnderScoreButton>Read article</UnderScoreButton>
            </div>
        </div>
    );
}

export type { DiscoverTheWorldItemProps }
export default DiscoverTheWorldItem;