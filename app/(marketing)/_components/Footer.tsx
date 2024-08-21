import Divider from '@mui/material/Divider';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from 'next/link';

const socialIconList = [
    {
        icon: <XIcon fontSize='small' className='text-gray-600'></XIcon>,
        link: "#"
    }, {
        icon: <InstagramIcon fontSize='small' className='text-gray-600'></InstagramIcon>,
        link: "#"
    }, {
        icon: <FacebookIcon fontSize='small' className='text-gray-600'></FacebookIcon>,
        link: "#"
    }, {
        icon: <YouTubeIcon fontSize='small' className='text-gray-600'></YouTubeIcon>,
        link: "#"
    }, {
        icon: <PinterestIcon fontSize='small' className='text-gray-600'></PinterestIcon>,
        link: "#"
    }
];

const textItemList = [
    {
        text: "🇬🇧United Kingdom",
        link: "#"
    }, {
        text: "Privacy",
        link: "#"
    }, {
        text: "Google Nest Commitment to Privacy",
        link: "#"
    }, {
        text: "Sales Terms",
        link: "#"
    }, {
        text: "Terms of service",
        link: "#"
    }
];

const Footer = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-10'>
            <Divider></Divider>
            <div className='flex justify-between py-2'>
                <div className='flex justify-between gap-2'>
                    {
                        socialIconList.map((item, index) => (<Link key={index} href={item.link}>{item.icon}</Link>))
                    }
                </div>
                <div className='flex justify-between gap-8'>
                    {
                        textItemList.map(item => (
                            <Link className='text-xs text-gray-600 leading-6' key={item.text} href={item.link}>{item.text}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;