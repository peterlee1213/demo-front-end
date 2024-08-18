"use client"

import Card from '@mui/material/Card';
import { Chip } from '@mui/material';
import UnderScoreButton from '../_globalCommonComponents/UnderScoreButton';
import Image from 'next/image';


type ProductItemProps = {
    /**
     * default to false
     */
    isSpecialOffer?: boolean
    productPhotoUrl: string;
    productName: string;
    /**
     * used for displaying text when the image is missing for whatever reason
     */
    productAlt: string;
    productPrice: string;
    /**
     * default to false
     */
    isPreOrder?: boolean;
    /**
     * the action when clicking on product photo or name
     * @returns 
     */
    onItemClick: () => void;
    /**
     * the action when clicking [pre-order] or [buy] button
     * @returns 
     */
    onActionButtonClick: () => void;
}

const ProductItem = (props: ProductItemProps) => {
    const itemBgColor = "bg-[#f8f9fa]";
    const {
        isSpecialOffer = false,
        productPhotoUrl = "",
        productName = "",
        productAlt = "",
        productPrice = "",
        isPreOrder = false,
        onItemClick = () => null,
        onActionButtonClick = () => null
    } = props || {}

    return (
        <div className='select-none'>
            <div onClick={() => onItemClick()} className='cursor-pointer group '>
                <Card className={itemBgColor + " relative rounded-2xl w-52 h-64"}>
                    {isSpecialOffer ? <Chip className='absolute top-4 left-4 scale-90' variant='outlined' label="Special Offer" size='small' color='success'></Chip> : null}
                    <Image className='mt-6 group-hover:scale-110 transition-all duration-500' alt={productAlt} width={242} height={242} src={productPhotoUrl}></Image>
                </Card>
                <div className='mt-4 font-bold group-hover:text-[#1976d2] transition-all duration-500'>{productName}</div>
            </div>
            <div className='mt-6'>{productPrice}</div>
            <div className='mt-6'>
                <UnderScoreButton onClick={() => onActionButtonClick()}>{isPreOrder ? "Pre-order" : "Buy"}</UnderScoreButton>
            </div>

        </div>
    );

}

export type { ProductItemProps }
export default ProductItem;