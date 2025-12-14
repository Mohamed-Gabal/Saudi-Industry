import React from 'react';
import personPhoto from '../../assets/images/Photo by James Barr.webp'
import { Link, NavLink } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="bg-white w-12 sm:w-14 lg:w-72 min-h-dvh border-e border-borderColor shadow overflow-hidden">
            <div className='flex flex-col gap-4 pt-4 w-full'>
                {/* header */}
                <div className="flex flex-row items-center justify-center gap-4 h-20 border-b border-borderColor lg:ps-8">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                        <img src={personPhoto} loading='lazy' alt="Photo by James Barr" className='w-full h-full object-contain' />
                    </div>
                    <header className='hidden lg:block'>
                        <h1 className='text-lg text-paragraphTextColor'>أهلا</h1>
                        <p className='text-lg font-bold text-textColor'>احمد عمر ماهر</p>
                    </header>
                </div>

                {/* tabs */}
                <div className="px-0.5 sm:px-2 lg:ps-4 pb-4 border-b border-borderColor">
                    <ul className='flex flex-col gap-2 text-paragraphTextColor'>
                        <li className='group'>
                            <NavLink to="/userProfile/mainPage" className={({ isActive }) => `${isActive ? "bg-mainColor text-white" : "bg-white"} block w-full p-2 rounded-lg font-bold text-lg group-hover:bg-mainColor group-hover:text-white cursor-pointer transition-colors ease-in-out duration-500`}>
                                <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 lg:mt-1"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                    <span className='hidden lg:block'>الرئيسية</span>
                                </div>
                            </NavLink>
                        </li>

                        <li className='group'>
                            <NavLink to="/userProfile/message" className={({ isActive }) => `${isActive ? "bg-mainColor text-white" : "bg-white"} flex flex-row gap-2 items-center justify-center lg:justify-between w-full p-2 rounded-lg font-bold text-lg group-hover:bg-mainColor group-hover:text-white transition-colors ease-in-out duration-500`}>
                                <div className="flex flex-row gap-2 items-center justify-center lg:justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>
                                    <span className='hidden lg:block'>الرسائل</span>
                                </div>
                                <span className='hidden lg:flex bg-red-400 rounded-full w-6 h-6 text-white items-center justify-center'>1</span>
                            </NavLink>
                        </li>

                        <li className='group'>
                            <NavLink to="/userProfile/order" className={({ isActive }) => `${isActive ? "bg-mainColor text-white" : "bg-white"} flex flex-row gap-2 items-center justify-center lg:justify-start w-full p-2 rounded-lg font-bold text-lg group-hover:bg-mainColor group-hover:text-white cursor-pointer transition-colors ease-in-out duration-500`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box-icon lucide-box lg:mt-1"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
                                <span className='hidden lg:block'>طلباتي</span>
                            </NavLink>
                        </li>

                        <li className='group'>
                            <NavLink to="/userProfile/location" className={({ isActive }) => `${isActive ? "bg-mainColor text-white" : "bg-white"} flex flex-row gap-2 items-center justify-center lg:justify-start w-full p-2 rounded-lg font-bold text-lg group-hover:bg-mainColor group-hover:text-white cursor-pointer transition-colors ease-in-out duration-500`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin lg:mt-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                <span className='hidden lg:block'>عناويني</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* setting */}
                <div className="px-0.5 sm:px-2 lg:ps-4 pb-4 border-b border-borderColor">
                    <ul className='flex flex-col gap-2 text-paragraphTextColor'>
                        <li className='group'>
                            <NavLink to="/userProfile/profileSettings" className={({ isActive }) => `${isActive ? "bg-mainColor text-white" : "bg-white"} flex flex-row gap-2 items-center justify-center lg:justify-start w-full p-2 rounded-lg font-bold text-lg group-hover:bg-mainColor group-hover:text-white cursor-pointer transition-colors ease-in-out duration-500`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings lg:mt-1"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx={12} cy={12} r={3} /></svg>
                                <span className='hidden lg:block'>إعدادات الحساب</span>
                            </NavLink>
                        </li>
                        <li className='group'>
                            <NavLink to="/userProfile/helpCenter" className={({ isActive }) => `${isActive ? "bg-mainColor text-white" : "bg-white"} flex flex-row gap-2 items-center justify-center lg:justify-start w-full p-2 rounded-lg font-bold text-lg group-hover:bg-mainColor group-hover:text-white cursor-pointer transition-colors ease-in-out duration-500`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info-icon lucide-info lg:mt-1"><circle cx={12} cy={12} r={10} /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                <span className='hidden lg:block'>مركز المساعدة</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="px-0.5 sm:px-2 lg:ps-4 flex flex-col gap-4">
                    <Link to="/" className='lg:border border-mainColor lg:bg-mainColor text-white flex flex-row gap-2 items-center justify-center w-full py-2 rounded-lg cursor-pointer'>
                        <img src="/saudi made.svg" alt="saudi made" className='w-8 h-8 lg:hidden' />
                        <span className='hidden lg:block'>العودة للموقع</span>
                    </Link>
                    <button className='border border-mainColor bg-white text-mainColor hover:bg-mainColor hover:text-white flex flex-row gap-2 items-center justify-center w-full py-2 rounded-lg cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /></svg>
                        <span className='hidden lg:block'>تسجيل الخروج</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
