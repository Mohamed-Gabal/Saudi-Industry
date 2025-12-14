import React from 'react';
import logoEnd from '../../assets/logo/min-logo-end.webp'
import logoStart from '../../assets/logo/min-logo.webp'
type propsType = {
    header: string;
    text: string;
};

export default function GreenAuthenticator({header, text}: propsType) {
    return (
        <div className='bg-mainColor h-full relative flex pb-4 xmd:pt-16 px-4 xmd:px-8'>
            {/* logo */}
            <div className="w-28 h-28 absolute end-0 top-0">
                <img src={logoEnd} loading='lazy' alt="min-logo-end" className="w-full object-contain" />
            </div>

            <div className="text-white text-center xmd:text-start flex flex-col items-center xmd:items-start w-full">
                <div className="w-40 h-40 content-center">
                    <img src="/footer/white-saudi-made-logo.png" alt="white-saudi-made-logo" className="w-full object-contain" />
                </div>
                <h1 className='text-2xl font-bold'>{header}</h1>
                <p className='text-lg'>{text}</p>

                <ul className='flex flex-row xmd:flex-col gap-2 mt-5'>
                    <li className='flex flex-row items-center gap-2'>
                        <div className="w-9 h-9 bg-[#48795ACC] rounded-lg flex items-center justify-center">
                            <img src="/gold-img/ShieldCheck.png" alt="ShieldCheck" className='w-5 h-5' />
                        </div>
                        <span className='text-lg font-bold'>شركات موثقة ومعتمدة</span>
                    </li>
                    <li className='flex flex-row items-center gap-2'>
                        <div className="w-9 h-9 bg-[#48795ACC] rounded-lg flex items-center justify-center">
                            <img src="/gold-img/Users.png" alt="Users" className='w-5 h-5' />
                        </div>
                        <span className='text-lg font-bold'>دعم عملاء متميز</span>
                    </li>
                </ul>
            </div>

            {/* logo */}
            <div className="w-32 h-32 absolute start-0 bottom-6">
                <img src={logoStart} loading='lazy' alt="min-logo" className="w-full object-contain" />
            </div>
        </div>
    )
}
