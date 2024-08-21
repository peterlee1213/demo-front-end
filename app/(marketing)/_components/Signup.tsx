import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import STYLE from "../_const/style";
import PrimaryButton from '../_globalCommonComponents/PrimaryButton';
import Link from 'next/link';
import { Button } from '@mui/material';

const Signup = () => {
    return (
        <div className='flex flex-col gap-6 items-center max-w-[1440px] bg-slate-100 mx-auto mt-32 rounded-3xl py-10'>
            <LocalOfferIcon fontSize='large'></LocalOfferIcon>
            <div className={STYLE.HEADER_FONT_STYLE + " max-w-2xl"}>Get news, offers, cart reminders, personalised emails, and surveys from the Google Store.</div>
            <PrimaryButton>Sign up</PrimaryButton>
            <div className='max-w-2xl text-xs'>
                Your personal data will be processed by Google Commerce Limited to send you emails with updates regarding hardware products and services in accordance with <Link href={"#"}><Button size='small' className='underline text-blue-600 text-xs normal-case' variant='text'>Google's Privacy Policy.</Button></Link>
            </div>
        </div>
    );
}

export default Signup;