"use client";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Link from 'next/link';

import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';

const LINK_HOVER_CLASS = "hover:text-blue-600"
const DEFAULT_MENU_ITEM_CLASS = "flex justify-between gap-5 items-center text-sm text-[#3c4043] flex-none";

export default function Header() {

    const leftLinkItems = [
        {
            item: "Phones",
            link: "#"
        },
        {
            item: "Earbuds",
            link: "#"
        },
        {
            item: "Tablets",
            link: "#"
        },
        {
            item: "Watches&Trackers",
            link: "#"
        },
        {
            item: "Smart Home",
            link: "#"
        },
        {
            item: "Accessories",
            link: "#"
        },
        {
            item: "Offers",
            link: "#"
        },
        {
            item: "Subscription",
            link: "#"
        },
    ];

    const rightLinkItems = [
        {
            item: <SearchIcon></SearchIcon>,
            link: "#"
        },
        {
            item: <HelpIcon></HelpIcon>,
            link: "#"
        },
        {
            item: <ShoppingCartIcon></ShoppingCartIcon>,
            link: "#"
        },
        {
            item: <AccountCircleIcon></AccountCircleIcon>,
            link: "#"
        },
    ];

    React.useEffect(() => {
        const appBar = document.getElementById("indexMarketingPageAppBar");
        window.addEventListener('scroll', listener => {
            if (appBar) {
                if (appBar.getBoundingClientRect().top == 0) {
                    appBar.classList.add("drop-shadow-md");
                } else {
                    appBar.classList.remove("drop-shadow-md");
                }
            }
        })
    }, [])


    return (
        <AppBar id="indexMarketingPageAppBar" className='top-0 shadow-none sticky bg-white'>
            <div>
                <div className='max-w-[1440px] mx-auto'>
                    <Toolbar className='flex justify-between max-w-full px-0'>
                        <div className={DEFAULT_MENU_ITEM_CLASS}>
                            <Link href={"#"}>
                                <Image src={"/images/google.svg"} alt='website icon' width={30} height={30}></Image>
                            </Link>
                            {
                                leftLinkItems.map(linkItem =>
                                    <Link className={LINK_HOVER_CLASS} href={linkItem.link} key={linkItem.item}>{linkItem.item}</Link>
                                )
                            }
                        </div>
                        <div className={DEFAULT_MENU_ITEM_CLASS}>
                            {
                                rightLinkItems.map((rightItem, index) => <Link className={LINK_HOVER_CLASS} href={rightItem.link} key={index}>{rightItem.item}</Link>)
                            }
                        </div>
                    </Toolbar>
                </div>
            </div>

        </AppBar>
    );
}