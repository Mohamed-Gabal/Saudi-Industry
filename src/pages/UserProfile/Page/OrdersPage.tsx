import React from 'react';
import campanyPhoto from '../../../assets/images/CompanyDetails.webp';
import shopCategory from "../../../assets/products/shop-categosfdry-image.webp";
import electronic from "../../../assets/products/electronic.webp";

export default function OrdersPage() {
    return (
        <div>
            <header className='bg-white h-24 border-b border-borderColor content-center px-8'>
                <h1 className='text-2xl text-textColor font-bold'>طلباتي</h1>
                <p className='text-paragraphTextColor'>تتبع طلباتك ومراجعة تاريخ الشراء</p>
            </header>

            <main className='px-4 md:px-8 py-4 flex flex-col gap-5'>
                <div className="bg-white border border-borderColor rounded-lg p-4">
                    <h1 className='text-xl text-textColor font-bold'>تصفية الطلبات</h1>
                    <div className="flex flex-row flex-wrap gap-4">
                        <button className='rounded-2xl bg-mainColor text-white px-4 py-1 cursor-pointer'>
                            <p>جميع الطلبات <span>(2)</span></p>
                        </button>
                        <button className='rounded-2xl bg-backGroundColor text-textColor px-4 py-1 flex items-center gap-1 cursor-pointer'>
                            <span>الطلبات النشطة</span> <span className='mb-0.5'>(2)</span>
                        </button>
                        <button className='rounded-2xl bg-backGroundColor text-textColor px-4 py-1 flex items-center gap-1 cursor-pointer'>
                            <span>الطلبات المكتملة </span> <span className='mb-0.5'>(1)</span>
                        </button>
                        <button className='rounded-2xl bg-backGroundColor text-textColor px-4 py-1 flex items-center gap-1 cursor-pointer'>
                            <span>الطلبات الملغية</span> <span className='mb-0.5'>(0)</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-borderColor rounded-lg p-4 flex flex-col gap-5">
                    <header className='flex flex-row flex-wrap items-center justify-center md:justify-between pb-3'>
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={campanyPhoto} loading='lazy' alt="campanyPhoto" className='w-full h-full' />
                            </div>

                            <div className="flex-1">
                                <h1 className='flex items-center gap-2'>
                                    <span className='text-lg font-bold text-textColor'>صناعة الفولاذ السعودية</span>
                                    <img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' />                                    </h1>
                                <span className='text-paragraphTextColor text-sm'>رقم الطلب: ORD-2024-001</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <span className='bg-[#E3CB8929] text-[#B49C5C] text-sm rounded-2xl px-4 py-1'>بالانتظار</span>
                            <button><img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" /></button>
                        </div>
                    </header>

                    {/* content */}
                    <div className="flex flex-col gap-4">
                        <ul className='flex flex-col border-b border-borderColor pb-4'>
                            <li className='flex flex-row items-center justify-between'>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-16 h-16 bg-backGroundColor flex items-center justify-center rounded-lg overflow-hidden">
                                        <img src={shopCategory} loading='lazy' alt="campanyPhoto" className='w-14 h-14' />
                                    </div>

                                    <div className="flex-1">
                                        <h1 className='flex items-center gap-2 text-lg font-bold text-textColor'>
                                        أنابيب الفولاذ المقاوم للصدأ المميزة 
                                        </h1>
                                        <span className='text-paragraphTextColor text-sm'>الكمية: 2 × 150 ر.س</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-4">
                                    <span className='text-mainColor text-lg font-bold rounded-2xl px-4 py-1'>300 ر.س</span>
                                </div>
                            </li>
                        </ul>

                        <div className="text-paragraphTextColor flex flex-row flex-wrap items-center justify-between">
                            <p className='flex gap-2 text-sm'><span>تاريخ الطلب: ٣ رجب ١٤٤٥ هـ</span> <span>التسليم المتوقع: ٨ رجب ١٤٤٥ هـ</span></p>
                            <h1 className='text-mainColor text-2xl font-bold'>345.99 ر.س</h1>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-borderColor rounded-lg p-4 flex flex-col gap-5">
                    <header className='flex flex-row flex-wrap items-center justify-center md:justify-between pb-3'>
                        <div className="flex flex-row items-center gap-2">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={campanyPhoto} loading='lazy' alt="campanyPhoto" className='w-full h-full' />
                            </div>

                            <div className="flex-1">
                                <h1 className='flex items-center gap-2'>
                                    <span className='text-lg font-bold text-textColor'>صناعة الفولاذ السعودية</span>
                                    <img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' />                                    </h1>
                                <span className='text-paragraphTextColor text-sm'>رقم الطلب: ORD-2024-001</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <span className='bg-secondBackGroundColor text-mainColor text-sm rounded-2xl px-4 py-1'>تم التسليم</span>
                            <button><img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" /></button>
                        </div>
                    </header>

                    {/* content */}
                    <div className="flex flex-col gap-4">
                        <ul className='flex flex-col border-b border-borderColor pb-4'>
                            <li className='flex flex-row items-center justify-between'>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="w-16 h-16 bg-backGroundColor flex items-center justify-center rounded-lg overflow-hidden">
                                        <img src={shopCategory} loading='lazy' alt="campanyPhoto" className='w-14 h-14' />
                                    </div>

                                    <div className="flex-1">
                                        <h1 className='flex items-center gap-2 text-lg font-bold text-textColor'>
                                        أنابيب الفولاذ المقاوم للصدأ المميزة 
                                        </h1>
                                        <span className='text-paragraphTextColor text-sm'>الكمية: 2 × 150 ر.س</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-4">
                                    <span className='text-mainColor text-lg font-bold rounded-2xl px-4 py-1'>300 ر.س</span>
                                </div>
                            </li>
                        </ul>

                        <div className="text-paragraphTextColor flex items-center justify-between">
                            <p className='flex gap-2 text-sm'><span>تاريخ الطلب: ٣ رجب ١٤٤٥ هـ</span> <span>التسليم المتوقع: ٨ رجب ١٤٤٥ هـ</span></p>
                            <h1 className='text-mainColor text-2xl font-bold'>345.99 ر.س</h1>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
