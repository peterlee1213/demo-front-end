import UnderScoreButton from "../_globalCommonComponents/UnderScoreButton";
import STYLE from "../_const/style";

import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PaidIcon from '@mui/icons-material/Paid';
import StarIcon from '@mui/icons-material/Star';
import { SvgIconProps } from "@mui/material";

const iconStyle: SvgIconProps = {
    fontSize: "large",
    style: {
        color: "#5f6368"
    }
}

const itemList = [
    {
        icon: <SwitchLeftIcon {...iconStyle}></SwitchLeftIcon>,
        text: "Up to £200 in extra promotional value with eligible trade-in"
    }, {
        icon: <LocalOfferIcon {...iconStyle}></LocalOfferIcon>,
        text: "Double the storage for your new device"
    }, {
        icon: <PaidIcon {...iconStyle}></PaidIcon>,
        text: "Up to £150 off the new Pixel Watch 3 with select Pixel 9 Pro purchases."
    }, {
        icon: <StarIcon {...iconStyle}></StarIcon>,
        text: "A year of Google's new AI subscription, giving you access to Gemini Advanced (value £227)"
    }
]

export default function ClaimRewards() {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className={STYLE.HEADER_FONT_STYLE + " w-[684px] mt-20"}>Claim up to £677 worth of rewards with select new Pixel 9 Pro phones. </div>
            <UnderScoreButton>Shop all offers</UnderScoreButton>
            <div className="flex max-w-7xl mt-2">
                {
                    itemList.map((item, index) => (
                        <div key={index} className="basis-1/4 text-center">
                            <div>{item.icon}</div>
                            <div className="text-base w-52 mt-4">{item.text}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}