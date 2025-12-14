import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../../assets/logo/saudi-made-logo.webp'

export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between px-4 md:px-8 lg:px-16 border-b h-fit py-4 text-mainColor">
            <div className="flex flex-row items-center justify-start gap-10">
                <Link to="/" className="w-10 h-10">
                    <img src={mainLogo} alt="saudi-made-logo" className="w-full object-contain" />
                </Link>

                <ul className='hidden md:flex flex-row gap-5 font-medium text-lg h-full mt-2 '>
                    <li>
                        <NavLink to="/">
                            <span>الرئيسية</span>
                        </NavLink>
                        
                    </li>
                    <li>
                        <NavLink to="/compaines" className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                            <span>الشركات</span>
                            <img src="/CaretDown.svg" alt="Caret-Down" className='w-5 h-5' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/servies" className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                            <span>الخدمات</span>
                            <img src="/CaretDown.svg" alt="Caret-Down" className='w-5 h-5' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="flex flex-row items-center justify-center gap-1 cursor-pointer">
                            <span>اتصل بنا</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row gap-4">
                <Link to="/createAccount" className='border border-mainColor rounded-lg px-4 py-2'>
                    <span>إنشاء حساب</span>
                </Link>
                <button className='bg-mainColor rounded-lg px-4 py-2'>
                    <Link to="/userProfile/mainPage" className='text-white'>تسجيل دخول</Link>
                </button>
            </div>
        </div>
    )
}
