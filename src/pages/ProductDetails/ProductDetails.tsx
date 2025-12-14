import React, { useState } from 'react'
import StarRating from '../CompanyDetails/StarRating';
import { Link } from 'react-router-dom';
import ProductCard, { products } from '../../components/ProductCard/ProductCard';
import shopCategosfdry from '../../assets/products/shop-categosfdry-image.webp'
import companyImg from '../../assets/images/campany-img.webp'

export default function ProductDetails() {
    const [activeTab, setActiveTab] = useState("description");
    return (
        <div className='bg-backGroundColor flex flex-col gap-5 py-12 px-4 md:px-8 lg:px-16'>
            <header>
                <p className='text-paragraphTextColor flex flex-row gap-1 sm:gap-2'>
                    <span>الرئيسية</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" />
                    <span>الشركات</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" />
                    <span>المنتجات</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" />
                    <span>زيت طبغ الطبيعي</span>
                </p>
            </header>

            <section className='bg-white rounded-2xl border border-borderColor flex flex-col sm:flex-row-reverse justify-between items-center gap-5 p-4 shadow'>
                {/* img */}
                <div className="w-full bg-gray-100 flex items-center justify-center sm:w-72 sm:h-72 md:w-md lg:w-lg h-64 md:h-96 rounded-2xl">
                    <div className="w-52 h-52">
                        <img src={shopCategosfdry} loading='lazy' alt="shop-categosfdry-image" className='w-full object-contain transition-all ease-in-out duration-500' />
                    </div>
                </div>
                {/* information */}
                <div className="flex flex-col gap-4 py-2 h-1/2">
                    <header className=''>
                        <h1 className='text-textColor font-bold text-xl'>زيت الطبخ الطبيعي</h1>
                    </header>

                    <div className="bg-secondBackGroundColor flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                        <img src="/company-details/green-icons/Buildings.svg" alt="Buildings" className='w-5 h-5 font-bold' />
                        <span className='text-mainColor'>شركة مصنع الغذاء الطبيعي</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center">
                            <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                            <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                            <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                            <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                            <img src="/gray-star.png" alt="star" className='w-5 h-5' />
                        </div>
                        <span>4.7</span>
                        <span className='text-sm text-paragraphTextColor'>(156)</span>
                    </div>

                    <div className="flex flex-col gap-2 text-paragraphTextColor border-b border-borderColor pb-2">
                        <span className='text-xl font-bold text-mainColor'>25.99 ر.س</span>
                        <span className='bg-secondBackGroundColor text-mainColor rounded-4xl px-4 py-1 w-fit'>متوفر</span>
                        <p className='text-paragraphTextColor text-xl'>زيت طبخ طبيعي عالي الجودة من أفضل المصادر</p>
                    </div>

                    <div className="flex flex-row justify-between flex-wrap text-paragraphTextColor">
                        <span>الغذاء والمشروبات</span>
                        <span>رقم المنتج:OIL-123  </span>
                        <span className='flex flex-row items-center justify-center gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                            الخبر
                        </span>
                    </div>
                    <div className="flex flex-col justify-between gap-5 w-full">
                        <Link to="/chart" className='bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor cursor-pointer'>
                            <img src="/products/ShoppingCart.png" alt="ShoppingCart" className='w-5 h-5' />
                            <span className='text-white'>أضف إلى السلة</span>
                        </Link>
                        <button className='bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>طلب الخدمة</button>
                    </div>
                </div>
            </section>

            {/* tabs */}
            <section className='flex flex-col gap-5'>
                <ul className='flex flex-row justify-between md:justify-start md:gap-10 text-paragraphTextColor text-lg font-bold relative z-20 after:absolute after:-z-10 after:bg-borderColor after:bottom-0 after:w-full after:h-[1.5px]'>
                    <li onClick={() => setActiveTab("description")} className={activeTab === "description" ? "text-mainColor border-b-2 border-mainColor" : ""}><span className='cursor-pointer'>الوصف</span></li>
                    <li onClick={() => setActiveTab("specifications")} className={activeTab === "specifications" ? "text-mainColor border-b-2 border-mainColor" : ""}><span className='cursor-pointer'>المواصفات</span></li>
                    <li onClick={() => setActiveTab("about")} className={activeTab === "about" ? "text-mainColor border-b-2 border-mainColor" : ""}><span className='cursor-pointer'>عن الشركة</span></li>
                    <li onClick={() => setActiveTab("reviews")} className={activeTab === "reviews" ? "text-mainColor border-b-2 border-mainColor" : ""}><span className='cursor-pointer'>تقييمات</span></li>
                </ul>

                {/* content */}
                <div className="min-h-96">
                    {activeTab === "description" && <p className='text-paragraphTextColor'>زيت طبخ طبيعي عالي الجودة مستخرج من أفضل المصادر الطبيعية. يتميز بنقاوته العالية وطعمه المميز، مناسب لجميع أنواع الطبخ والقلي. خالي من المواد الحافظة والإضافات الصناعية، معبأ في عبوات محكمة الإغلاق للحفاظ على الجودة والنكهة.</p>}
                    {activeTab === "specifications" && <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-5 md:gap-x-20 text-paragraphTextColor'>
                        <li className='border-b border-borderColor flex flex-row justify-between items-center'><span className='text-mainColor font-bold'>الحجم</span> <span>1 لتر</span></li>
                        <li className='border-b border-borderColor flex flex-row justify-between items-center'><span className='text-mainColor font-bold'>النوع</span> <span>زيت دوار الشمس</span></li>
                        <li className='border-b border-borderColor flex flex-row justify-between items-center'><span className='text-mainColor font-bold'>المنشأ</span> <span>السعودية</span></li>
                        <li className='border-b border-borderColor flex flex-row justify-between items-center'><span className='text-mainColor font-bold'>تاريخ الانتهاء</span> <span>24 شهر</span></li>
                        <li className='border-b border-borderColor flex flex-row justify-between items-center'><span className='text-mainColor font-bold'>طريقة التخزين</span> <span>السعودية</span></li>
                        <li className='border-b border-borderColor flex flex-row justify-between items-center'><span className='text-mainColor font-bold'>الشهادات</span> <span>ISO 22000, HACCP</span></li>
                    </ul>
                    }

                    {/* about campany */}
                    {activeTab === "about" && <div className="flex flex-col sm:flex-row gap-4 bg-white border border-borderColor shadow rounded-2xl p-4">
                        {/* img */}
                        <div className="w-full h-56 sm:w-64 sm:h-64 rounded-t-2xl sm:rounded-t-none sm:rounded-r-2xl overflow-hidden">
                            <img src={companyImg} loading='lazy' alt="campany-img" className='w-full h-full object-center' />
                        </div>

                        {/* informaiton */}
                        <div className="flex flex-col gap-5 justify-between">
                            <header className="flex flex-row gap-2 items-center">
                                <h3 className='flex flex-row items-center gap-2 text-textColor text-2xl'>شركة مصنع الغذاء الطبيعي<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /></h3>
                            </header>
                            <p className='text-paragraphTextColor text-lg'>خدمات شحن وتوزيع شاملة في جميع أنحاء المملكة</p>
                            <div className="flex flex-row justify-between items-center text-paragraphTextColor text-lg">
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                    سعودية • الرياض
                                </span>
                                <span className='flex flex-row items-center justify-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                    9.7k
                                </span>
                            </div>

                            <div className="group">
                                <button className='border border-mainColor rounded-lg py-2 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                    <Link to="/companyDetails" className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>زيارة ملف الشركة</Link>
                                </button>
                            </div>
                        </div>
                    </div>}

                    {/* reviews التقييمات */}
                    {activeTab === "reviews" && <div className="bg-white border border-borderColor rounded-2xl p-4 mt-4">
                        <header className='flex flex-row justify-between items-center w-full'>
                            <h1 className='text-textColor font-bold text-2xl'>التقيمات:</h1>
                            <button className='bg-mainColor flex items-center justify-center gap-1 px-4 py-2 rounded-lg border border-mainColor cursor-pointer'><span className='text-white'>اكتب تقييم</span></button>
                        </header>

                        {/* stars */}
                        <div className="flex flex-col md:flex-row gap-5 items-center justify-around mt-5">
                            <StarRating rating={3.5} show={true} />
                            <div className="flex flex-col items-center text-paragraphTextColor">
                                <div className="flex flex-row items-center">
                                    <span>5</span>
                                    <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                                        <div className="bg-[#FABF35] h-4 rounded-sm " style={{ width: "65%" }} />
                                    </div>
                                    <span className='w-10'>65%</span>
                                </div>

                                <div className="flex flex-row items-center">
                                    <span>4</span>
                                    <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                                        <div className="bg-[#FABF35] h-4 rounded-sm " style={{ width: "45%" }} />
                                    </div>
                                    <span className='w-10'>45%</span>
                                </div>

                                <div className="flex flex-row items-center">
                                    <span>3</span>
                                    <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                                        <div className="bg-[#FABF35] h-4 rounded-sm " style={{ width: "25%" }} />
                                    </div>
                                    <span className='w-10'>25%</span>
                                </div>

                                <div className="flex flex-row items-center">
                                    <span>2</span>
                                    <div className="bg-backGroundColor w-36 md:w-3xs h-4 mx-2 rounded-sm overflow-hidden relative">
                                        <div className="bg-[#FABF35] h-4 rounded-sm" style={{ width: "5%" }} />
                                    </div>
                                    <span className='w-10'>5%</span>
                                </div>
                            </div>

                        </div>

                        <div className="mt-5">
                            <ul className='flex flex-col gap-4'>
                                <li className="py-3 sm:py-4 border-b border-borderColor">
                                    <div className="flex items-center ">
                                        <div className="shrink-0">
                                            <img className="w-8 h-8 md:w-16 md:h-16 rounded-full" src="/company-details/Photo by James Barr.png" alt="Thomas image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="font-medium text-gray-900 truncate flex flex-row items-center gap-4">
                                                <span className='text-xl'>احمد عمر ماهر</span>
                                                <span className='text-paragraphTextColor'>1445/09/8</span>
                                                <span></span>
                                            </p>
                                            <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                                شركة ممتازة وخدمة عالية الجودة. تم تنفيذ المشروع في الوقت المحدد بمهنية عالية.
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="py-3 sm:py-4 border-b border-borderColor">
                                    <div className="flex items-center ">
                                        <div className="shrink-0">
                                            <img className="w-8 h-8 md:w-16 md:h-16 rounded-full" src="/company-details/Photo by James Barr.png" alt="Thomas image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="font-medium text-gray-900 truncate flex flex-row items-center gap-4">
                                                <span className='text-xl'>احمد عمر ماهر</span>
                                                <span className='text-paragraphTextColor'>1445/09/8</span>
                                                <span></span>
                                            </p>
                                            <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                                شركة ممتازة وخدمة عالية الجودة. تم تنفيذ المشروع في الوقت المحدد بمهنية عالية.
                                            </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="py-3 sm:py-4 border-b border-borderColor">
                                    <div className="flex items-center ">
                                        <div className="shrink-0">
                                            <img className="w-8 h-8 md:w-16 md:h-16 rounded-full" src="/company-details/Photo by James Barr.png" alt="Thomas image" />
                                        </div>
                                        <div className="flex-1 min-w-0 ms-4">
                                            <p className="font-medium text-gray-900 truncate flex flex-row items-center gap-4">
                                                <span className='text-xl'>احمد عمر ماهر</span>
                                                <span className='text-paragraphTextColor'>1445/09/8</span>
                                                <span></span>
                                            </p>
                                            <p className="text-lg text-gray-500 truncate dark:text-gray-400">
                                                شركة ممتازة وخدمة عالية الجودة. تم تنفيذ المشروع في الوقت المحدد بمهنية عالية.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    }
                </div>
            </section>

            {/* products المنتجات */}
            <section className='bg-white rounded-2xl border border-borderColor'>
                <div className="p-4 mt-4">
                    <h1 className='text-textColor font-bold text-2xl'>منتجات مشابهة:</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 w-full">
                    {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
