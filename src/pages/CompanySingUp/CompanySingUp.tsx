import React from 'react'
import { Link } from 'react-router-dom'
import GreenAuthenticator from '../../components/GreenAuthenticator/GreenAuthenticator'

export default function CompanySingUp() {
    return (
        <div className="min-h-dvh pt-24 pb-8 px-4 md:px-8 lg:px-16 bg-backGroundColor">
            <div className="flex flex-col xmd:flex-row w-full xmd:w-fit mx-auto bg-white rounded-2xl border border-borderColor shadow overflow-hidden">
                <div className="w-full xmd:w-80 xlg:w-96">
                    <GreenAuthenticator header={`انضم إلى "صناعة سعودية" كشركة`} text="أنشئ حساب شركتك بسهولة، اعرض خدماتك، تواصل مع عملاء جدد، واستقبل طلبات مباشرة من خلال منصتنا" />
                </div>

                <div className="flex flex-col gap-5 items-center w-full xmd:w-lg lg:w-xl px-4 xmd:px-8 py-8">
                    <form action="" className='w-full'>
                        <header className='text-center'>
                            <h1 className='text-3xl font-bold text-textColor'>إنشاء حساب شركة</h1>
                            <p className='text-lg text-paragraphTextColor'>سجّل شركتك خلال دقائق وابدأ استقبال طلبات العملاء</p>
                        </header>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="companyName"><span className='text-lg text-textColor font-bold'>اسم المسؤول</span></label>
                                <input type="text" name="companyName" id="companyName" placeholder='أدخل اسمك بالكامل' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="companyName"><span className='text-lg text-textColor font-bold'>اسم الشركة</span></label>
                                <input type="text" name="companyName" id="companyName" placeholder='أدخل اسم الشركة' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                            </div>

                            <div className="grid grid-cols-1 xmd:grid-cols-2 gap-4">
                                <div className="">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name='area'
                                            placeholder='المنطقة'
                                            className="w-full border border-borderColor bg-backGroundColor/30 text-paragraphTextColor rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                                        />
                                        <span className={`absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name='sector'
                                            placeholder='القطاع'
                                            className="w-full border border-borderColor bg-backGroundColor/30 text-paragraphTextColor rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                                        />
                                        <span className="absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="phone"><span className='text-lg text-textColor font-bold'>رقم الجوال</span><span className='text-red-500'>*</span></label>
                                <div className="relative">
                                    <img src="/gray-icons/Phone.svg" alt="Phone" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                    <input type="text" name="phone" id="phone" placeholder='أدخل رقم جوالك' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="email"><span className='text-lg text-textColor font-bold'>بريدك الإلكتروني</span><span className='text-red-500'>*</span></label>
                                <div className="relative">
                                    <img src="/gray-icons/Envelope.svg" alt="Envelope" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                    <input type="text" name="email" id="email" placeholder='أدخل بريدك الإلكتروني' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 xmd:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="email"><span className='text-lg text-textColor font-bold'>كلمة المرور</span><span className='text-red-500'>*</span></label>
                                    <div className="relative">
                                        <img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                        <input type="text" name="email" id="email" placeholder='أدخل كلمة المرور' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="email"><span className='text-lg text-textColor font-bold'>تأكيد كلمة المرور</span><span className='text-red-500'>*</span></label>
                                    <div className="relative">
                                        <img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                        <input type="text" name="email" id="email" placeholder='تأكيد كلمة المرور' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="companyName"><span className='text-lg text-textColor font-bold'>معلومات إضافية (اختيارية)</span></label>
                                <input type="text" name="companyName" id="companyName" placeholder='الموقع الإلكتروني (اختياري)' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                            </div>

                            <div className="flex flex-col gap-1 w-full">
                                <label htmlFor="companyName"><span className='text-lg text-textColor font-bold'>نبذة مختصرة عن الشركة</span></label>
                                <textarea name="textarea" id="textarea" cols={30} rows={4} placeholder='نبذة مختصرة عن الشركة (اختياري - 180 حرف كحد أقصى)' className='border border-borderColor bg-backGroundColor/30 rounded-lg p-4'></textarea>
                            </div>

                            <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-backGroundColor/30 cursor-pointer">
                                <div className="pointer-events-none">
                                    <div className="w-16 h-16 rounded-full bg-secondBackGroundColor/30 flex items-center justify-center mx-auto mb-4">
                                        <img src="/Camera.svg" alt="Camera" />
                                    </div>
                                    <p className="text-lg font-semibold text-gray-800">شعار الشركة</p>
                                    <p className="text-sm text-gray-500">لكل صورة حتى 5MB PNG, JPG, JPEG</p>
                                </div>
                                <input
                                    type="file"
                                    accept=".png,.jpg,.jpeg"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            </div>


                            <div className="flex flex-col gap-4 text-paragraphTextColor">
                                <div className="">
                                    <input id="bordered-checkbox-1" type="checkbox" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300">رغب في تلقي التحديثات والعروض عبر الواتساب والبريد الإلكتروني</label>
                                </div>

                                <div className="">
                                    <input id="bordered-checkbox-1" type="checkbox" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium dark:text-gray-300"><a href="#"><span>أوافق على</span> <span className='text-mainColor underline'>الشروط والأحكام وسياسة الخصوصية</span></a></label>
                                </div>
                            </div>
                        </div>

                        <button type='submit' className='bg-mainColor text-center text-white rounded-lg w-full py-2 mt-4'>إنشاء حساب</button>
                    </form>

                    <Link to="/companyLongin" className='text-mainColor'> <span className='text-textColor'>لديك حساب؟</span>تسجيل الدخول </Link>
                </div>
            </div>
        </div>
    )
}
