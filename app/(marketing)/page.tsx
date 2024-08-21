"use server";

import TopSpecialOffer from "./_components/TopSpecialOffer";
import Header from "./_components/Header";
import FeatureProduct from "./_components/FeatureProduct";
import ClaimRewards from "./_components/ClaimRewards";
import PopularProducts from "./_components/PopularProducts";
import NewNowNow from "./_components/NewNowNow";
import DiscoverTheWorldOfPixel from "./_components/DiscoverTheWorldOfPixel";
import Signup from "./_components/Signup";
import Footer from "./_components/Footer";



// max-width: 1440px
export default async function () {
    return (
        <div>
            <TopSpecialOffer></TopSpecialOffer>
            <div className="container mx-auto">
                <Header></Header>
                <FeatureProduct></FeatureProduct>
                <ClaimRewards></ClaimRewards>
                <PopularProducts></PopularProducts>
                <NewNowNow></NewNowNow>
                <DiscoverTheWorldOfPixel></DiscoverTheWorldOfPixel>
                <Signup></Signup>
                <Footer></Footer>
            </div>

        </div>
    );
}