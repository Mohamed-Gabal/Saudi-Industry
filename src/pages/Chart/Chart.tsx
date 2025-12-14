import React from 'react'
import { Link } from 'react-router-dom'
import campanyImg from '../../assets/images/campany-img.webp';
import categosfdry from '../../assets/products/shop-categosfdry-image.webp'
import madicen from '../../assets/products/madicen.webp'

export default function Chart() {
    return (
        <div className='bg-backGroundColor flex flex-col gap-5 py-12 pt-20 px-4 md:px-8 lg:px-16'>
            <header>
                <p className='text-paragraphTextColor flex flex-row items-center gap-2'>
                    <span>الرئيسية</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" className='w-4 h-4' />
                    <span>سلة التسوق</span>
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="md:col-span-3 bg-white border border-borderColor rounded-2xl p-4">
                    {/* company */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-borderColor/35 border border-borderColor shadow rounded-2xl">
                        {/* img */}
                        <div className="w-full sm:w-52 h-40 rounded-t-2xl sm:rounded-t-none sm:rounded-r-2xl overflow-hidden">
                            <img src={campanyImg} loading='lazy' alt="campany-img" className='w-full h-full object-cover' />
                        </div>

                        {/* informaiton */}
                        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 items-center justify-between w-full pb-3 pe-2">
                            {/* text */}
                            <div className="flex flex-col gap-2 sm:gap-4 w-fit">
                                <h3 className='flex flex-row items-center gap-2 text-textColor text-2xl'>شركة مصنع الغذاء الطبيعي<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /></h3>

                                <div className="flex flex-row flex-wrap justify-between items-center gap-2 md:gap-4 text-paragraphTextColor text-lg">
                                    <span className='flex flex-row items-center justify-center gap-1'>
                                        <img src="/gray-icons/MapPin.svg" alt="company-details-MapPin" className='w-4 h-4 mt-1' />
                                        سعودية • الرياض
                                    </span>
                                    <span className='flex flex-row items-center justify-center gap-1 text-sm'>
                                        <img src="/company-details/Truck.svg" alt="company-details-truck" className='w-5 h-5' />
                                        3-5 ايام
                                    </span>
                                    <span className='flex flex-row items-center justify-center gap-1 text-sm'>
                                        <img src="/gray-icons/Timer.svg" alt="company-details-Timer" className='w-5 h-5' />
                                        حد أدنى للطلب: 10
                                    </span>
                                </div>
                            </div>

                            <div className="group">
                                <button className='border border-mainColor rounded-lg py-2 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                    <Link to="/companyDetails" className='text-xl text-mainColor px-4 group-hover:text-white transition-colors ease-in-out duration-500'>زيارة ملف الشركة</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* products */}
                    <div className="flex flex-col gap-5">
                        <ul className='flex flex-col gap-4'>
                            <li className='flex flex-col sm:flex-row items-center gap-4 py-5 pe-2 border-b border-borderColor'>
                                <img src={categosfdry} loading='lazy' alt="shop-categosfdry-image" className='w-32 h-32' />

                                <div className="flex flex-col items-start justify-between gap-5 w-full">
                                    {/* header */}
                                    <div className="flex flex-col items-center justify-center">
                                        <header className='text-2xl flex gap-10'>
                                            <h1 className='text-textColor'>زيت الطبخ الطبيعي</h1>
                                            <span className='text-mainColor'>150 ر.س</span>
                                        </header>
                                    </div>

                                    <div className="flex flex-row justify-between w-full">
                                        {/* number */}
                                        <div className="flex flex-row items-center justify-center h-10 rounded-lg border border-borderColor text-mainColor">
                                            <button className='w-10 flex items-center justify-center cursor-pointer'><img src="/company-details/green-icons/plus.svg" alt="plus" className='w-4 h-4' /></button>
                                            <div className="flex items-center justify-center w-10 h-10 border-x border-borderColor"><span className='text-paragraphTextColor'>1</span></div>
                                            <button className='w-10 flex items-center justify-center content-center cursor-pointer'><img src="/company-details/green-icons/minus.svg" alt="minus" className='w-4 h-4' /></button>
                                        </div>

                                        {/* heart delete */}
                                        <div className="flex flex-row gap-4">
                                            <button className='cursor-pointer'><img src="/company-details/green-icons/heart.svg" alt="heart" className='w-6 h-6' /></button>
                                            <button className='cursor-pointer'><img src="/TrashSimple.svg" alt="TrashSimple" className='w-6 h-6' /></button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className='flex flex-col sm:flex-row items-center gap-4 py-5 pe-2 border-b border-borderColor'>
                                <img src={madicen} loading='lazy' alt="madicen" className='w-32 h-32' />

                                <div className="flex flex-col items-start justify-between gap-5 w-full">
                                    {/* header */}
                                    <div className="flex flex-col items-center justify-center">
                                        <header className='text-2xl flex gap-10'>
                                            <h1 className='text-textColor'>منتج دوائي</h1>
                                            <span className='text-mainColor'>99.99 ر.س</span>
                                        </header>
                                    </div>

                                    <div className="flex flex-row justify-between w-full">
                                        {/* number */}
                                        <div className="flex flex-row items-center justify-center h-10 rounded-lg border border-borderColor text-mainColor">
                                            <button className='w-10 flex items-center justify-center cursor-pointer'><img src="/company-details/green-icons/plus.svg" alt="plus" className='w-4 h-4' /></button>
                                            <div className="flex items-center justify-center w-10 h-10 border-x border-borderColor"><span className='text-paragraphTextColor'>1</span></div>
                                            <button className='w-10 flex items-center justify-center content-center cursor-pointer'><img src="/company-details/green-icons/minus.svg" alt="minus" className='w-4 h-4' /></button>
                                        </div>

                                        {/* heart delete */}
                                        <div className="flex flex-row gap-4">
                                            <button className='cursor-pointer'><img src="/company-details/green-icons/heart.svg" alt="heart" className='w-6 h-6' /></button>
                                            <button className='cursor-pointer'><img src="/TrashSimple.svg" alt="TrashSimple" className='w-6 h-6' /></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="text-2xl text-textColor flex flex-row justify-between">
                            <h1>الإجمالي الفرعي (شركة مصنع الغائ الطبيعي):</h1>
                            <h1 className='text-mainColor font-bold'>400 ر.س</h1>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-1">
                    <div className="sticky top-24 flex flex-col gap-4 bg-white border border-borderColor rounded-2xl p-4">
                        <ul className='flex flex-col gap-2 text-paragraphTextColor border-b border-borderColor pb-4'>
                            <li className='flex flex-row items-center justify-between'><span>الإجمالي الفرعي</span> <span>682.50 ر.س</span></li>
                            <li className='flex flex-row items-center justify-between'><span>الشحن المتوقع</span> <span>682.50 ر.س</span></li>
                            <li className='flex flex-row items-center justify-between'><span>ضريبة القيمة المضافة (15%)</span> <span>102.38 ر.س</span></li>
                        </ul>
                        <h1 className='flex flex-row items-center justify-between text-2xl font-bold text-mainColor'><span className='text-lg text-paragraphTextColor'>الإجمالي:</span>784.88 ر.س</h1>
                        <div className="flex flex-col gap-2">
                            <Link to="/completePurchase" className='bg-mainColor rounded-lg text-white text-center cursor-pointer py-2'><span>إتمام الشراء</span></Link>
                            <button className='border border-mainColor rounded-lg text-mainColor cursor-pointer py-2'><span>متابعة التسوق</span></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
