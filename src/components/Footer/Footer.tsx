import React from 'react'
import { Link } from 'react-router-dom';
import logoEnd from '../../assets/logo/min-logo-end.webp'

export default function Footer() {
    return (
        <div className="bg-mainColor relative z-10 px-4 md:px-8 lg:px-16 py-16 flex flex-col gap-5 items-center justify-center overflow-hidden">
            <div className="w-28 h-28 absolute end-0 top-0">
                <img src={logoEnd} loading='lazy' alt="min-logo-end" className="w-full object-contain" />
            </div>

            <div className="flex flex-row flex-wrap justify-center md:justify-around w-full pb-10 border-b border-secondaryColor">
                <div className="text-white max-w-72 md:max-w-80 flex flex-col items-center text-center">
                    <div className="w-40 h-40 content-center">
                        <img src="/footer/white-saudi-made-logo.png" alt="white-saudi-made-logo" className="w-full object-contain" />
                    </div>
                    <p>دليل الأعمال السعودي الرائد الذي يربط بين الشركات والعملاء، ويساهم في نمو الاقتصاد السعودي ضمن رؤية 2030.</p>

                    <div className="flex flex-row gap-4 mt-2">
                        <a href="#"><img src="/footer/icons/Facebook.svg" alt="facebook-icon" /></a>
                        <a href="#"><img src="/footer/icons/linkedIn.svg" alt="linkedIn-icon" /></a>
                        <a href="#"><img src="/footer/icons/youtube.svg" alt="youtube-icon" className='w-7 h-7' /></a>
                        <a href="#"><img src="/footer/icons/instrgram.svg" alt="instrgram-icon" /></a>
                        <a href="#"><img src="/footer/icons/SVG.svg" alt="SVG-icon" /></a>
                    </div>
                </div>

                {/* الروابط */}
                <div className="flex flex-row gap-8 justify-between text-white max-w-72 md:max-w-80">
                    <ul className='flex flex-col gap-2'>
                        <li className='text-2xl text-secondaryTextColor mb-2'>روابط سريعة</li>
                        <li><Link to="/" className='text-lg'>الرئيسية</Link></li>
                        <li><Link to="/compaines" className='text-lg'>جميع الشركات</Link></li>
                        <li><Link to="/" className='text-lg'>الفئات</Link></li>
                        <li><Link to="/" className='text-lg'>المقالات</Link></li>
                        <li><Link to="/" className='text-lg'>من نحن</Link></li>
                        <li><Link to="/" className='text-lg'>اتصل بنا</Link></li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-2xl text-secondaryTextColor mb-2'>خدماتنا</li>
                        <li><Link to="/" className='text-lg'>تسجيل الشركات</Link></li>
                        <li><Link to="/" className='text-lg'>الملفات التجارية</Link></li>
                        <li><Link to="/" className='text-lg'>طلب الخدمات</Link></li>
                        <li><Link to="/" className='text-lg'>التقييمات والملراجعات</Link></li>
                        <li><Link to="/" className='text-lg'>الإعلانات المميزة</Link></li>
                        <li><Link to="/" className='text-lg'>الدعم الفني</Link></li>
                    </ul>
                </div>

                <div className="text-white flex flex-col gap-5 max-w-72 md:max-w-80">
                    <ul className='flex flex-col gap-2'>
                        <li className='mb-2'><span className='text-secondaryTextColor text-2xl'>تواصل معنا</span></li>
                        <li className='flex flex-row items-center gap-1'>
                            <img src="/footer/Phone.png" alt="Phone" className='w-5 h-5'/>
                            <span>+966 11 123 4567</span>
                        </li>
                        <li className='flex flex-row items-center gap-1'>
                            <img src="/footer/EnvelopeSimple.png" alt="EnvelopeSimple" className='w-5 h-5' />
                            <span>info@saudiindustry.sa</span>
                        </li>
                        <li className='flex flex-row items-center gap-1'>
                            <img src="/footer/MapPin.png" alt="MapPin" className='w-5 h-5' />
                            <span>الرياض، المملكة العربية السعودية</span>
                        </li>
                        <li className='flex flex-row items-center gap-1'>
                            <img src="/footer/GlobeSimple.png" alt="GlobeSimple" className='w-5 h-5' />
                            <span>www.saudiindustry.sa</span>
                        </li>
                    </ul>

                    <ul className='flex flex-col gap-2'>
                        <li className='text-secondaryTextColor text-2xl'>ساعات العمل</li>
                        <li>الأحد - الخميس: 8:00 ص - 6:00 م</li>
                        <li>الجمعة - السبت: عطلة نهاية الأسبوع</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-row justify-between items-center text-white w-full">
                <div className="flex flex-row gap-5">
                    <button className='cursor-pointer'>شروط الإستخدام</button>
                    <button className='cursor-pointer'>سياسة الخصوصية</button>
                </div>
                <div className="">
                    <p>صناعة سعودية, جميع الحقوق محفوظة 2025©</p>
                </div>
            </div>
        </div>
    )
}
