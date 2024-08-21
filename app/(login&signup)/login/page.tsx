"use client";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const Login = () => {
    return (
        <Card className='select-none'>
            <CardHeader className='bg-primary text-white' title="Login"></CardHeader>
            <CardContent>
                <div className='flex flex-col gap-6 w-96'>
                    <TextField label="Email" type='email' InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <EmailIcon></EmailIcon>
                            </InputAdornment>
                        )
                    }}></TextField>
                    <TextField label="Password" type='password' InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <LockIcon></LockIcon>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='start'>
                                <IconButton>
                                    <VisibilityIcon></VisibilityIcon>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}></TextField>
                    <div>
                        <Button className='normal-case mr-3' variant='contained'>Login</Button>
                        <Link href={"/signup"}>
                            <Button className='normal-case'>Go to Signup</Button>
                        </Link>

                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default Login;