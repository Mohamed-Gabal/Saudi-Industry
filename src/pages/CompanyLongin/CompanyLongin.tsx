import React from 'react';
import GreenAuthenticator from '../../components/GreenAuthenticator/GreenAuthenticator';
import { Link } from 'react-router-dom';

export default function CompanyLongin() {
    return (
        <div className="min-h-dvh pt-28 pb-8 px-4 md:px-8 lg:px-16 bg-backGroundColor">
            <div className="flex flex-col xmd:flex-row w-full xmd:w-fit mx-auto bg-white rounded-2xl border border-borderColor shadow overflow-hidden">
                <div className="w-full xmd:w-80 xlg:w-96">
                    <GreenAuthenticator header={`انضم إلى "صناعة سعودية" كشركة`} text="أنشئ حساب شركتك بسهولة، اعرض خدماتك، تواصل مع عملاء جدد، واستقبل طلبات مباشرة من خلال منصتنا" />
                </div>

                <div className="flex flex-col gap-5 items-center w-full xmd:w-lg lg:w-xl px-4 xmd:px-8 py-8">
                    <form action="" className='w-full'>
                        <header className='text-center'>
                            <h1 className='text-3xl font-bold text-textColor'>تسجيل دخول الشركات</h1>
                            <p className='text-lg text-paragraphTextColor'>ادخل لإدارة ملف شركتك واستقبال طلبات الخدمات</p>
                        </header>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="email"><span className='text-lg text-textColor font-bold'>البريد الإلكتروني المهني</span><span className='text-red-500'>*</span></label>
                                <div className="relative">
                                    <img src="/gray-icons/Envelope.svg" alt="Envelope" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                    <input type="text" name="email" id="email" placeholder='أدخل بريدك الإلكتروني' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="phone"><span className='text-lg text-textColor font-bold'>رقم جوال الشركة</span><span className='text-red-500'>*</span></label>
                                <div className="relative">
                                    <img src="/gray-icons/Phone.svg" alt="Phone" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                    <input type="text" name="phone" id="phone" placeholder='أدخل رقم جوالك' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="email"><span className='text-lg text-textColor font-bold'>كلمة المرور</span><span className='text-red-500'>*</span></label>
                                <div className="relative">
                                    <img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                    <input type="text" name="email" id="email" placeholder='أدخل كلمة المرور' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                </div>
                            </div>

                            <div className="flex flex-row justify-between gap-4 text-paragraphTextColor">
                                <div className="">
                                    <input id="bordered-checkbox-1" type="checkbox" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300">تذكرني</label>
                                </div>

                                <div className="">
                                    <button type='button' className='text-mainColor cursor-pointer'>نسيت كلمة المرور؟</button>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='bg-mainColor text-center text-white rounded-lg w-full py-2 mt-4 cursor-pointer'>تسجيل الدخول</button>
                    </form>

                    <Link to="/companySingUp" className="flex flex-row gap-1 text-textColor">
                        <span>ليس لديك حساب؟</span>
                        <button type='button' className='text-mainColor cursor-pointer'>إنشاء حساب</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
