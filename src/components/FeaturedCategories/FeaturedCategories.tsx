import React from 'react';

type propsType = {
    header: string;
    text: string;
    img: string;
};

export default function FeaturedCategories({ header, text, img }: propsType) {
    return (
        <div className="group">
            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="rounded-full w-20 h-20 bg-mainColor text-white group-hover:text-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                        <img src={`/home-icons/white-icons/${img}`} alt={header} className='block group-hover:hidden transition-all ease-in-out duration-500' />
                        <img src={`/home-icons/green-icons/${img}`} alt={header} className='hidden group-hover:block transition-all ease-in-out duration-500' />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                        <span className='text-xl font-bold'>{header}</span>
                        <span className='font-medium'>{text}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
