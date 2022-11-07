import React, { useLayoutEffect } from 'react';
import animateWaves from './Background';


const Background = () => {
    useLayoutEffect(() => {
        animateWaves()
    }, []);

    return (
        <div className='background-container'>
            <svg className='tea-top' width='100' viewBox="0 0 1440 320">
                <path fillRule='evenodd' clipRule='evenodd' fill="#EDDFB3" d="M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,197.3C672,171,768,85,864,69.3C960,53,1056,107,1152,117.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>

        </div>
    );
}


export default Background;