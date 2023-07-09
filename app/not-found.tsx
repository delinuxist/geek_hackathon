'use client';

import React from 'react';
import Lottie from 'lottie-react';
import {Error404} from '@/public/assets/json';

export default function Custom404() {
    return (
        <div>
            <Lottie onComplete={() => {}} animationData={Error404}/>
        </div>
    );
}
