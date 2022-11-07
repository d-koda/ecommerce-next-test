import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantity(0);
    })

    return (
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your purchase.</h2>
                <p className='email-msg'>We've sent an email to you with your receipt.</p>
                <Link href='/'>
                    <button type='button' width='300px' className='btn'>
                        Keep Browsing
                    </button>
                </Link>
            </div>
        </div>
    );
}


export default Success;