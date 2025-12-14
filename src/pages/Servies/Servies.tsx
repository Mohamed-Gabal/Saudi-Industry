import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import companyImg from '../../assets/images/CompanyDetails.webp'

export default function Servies() {
    const [viewType, setViewType] = useState<"grid" | "list">("grid");
    return (
        <div className="pt-16">
            <section className='bg-gray-100 px-4 md:px-8 lg:px-16 py-10 flex flex-col items-center justify-center gap-6'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-4xl'>تصفية الخدمات</h1>
                </header>

                <div className="flex flex-col gap-6">
                    <form action="" className="grid grid-cols-2 md:grid-cols-4 max-w-3xl gap-4 w-fit bg-white border border-gray-400 rounded-lg px-4 py-8">
                        <div className="">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='campany'
                                    placeholder="ابحث بإسم الشركة"
                                    className="w-full border border-gray-400 rounded-lg px-2 ps-7 py-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm md:placeholder:text-base placeholder:text-textColor"
                                />
                                <span className="absolute z-10 start-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='area'
                                    placeholder='المنطقة'
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm md:placeholder:text-base placeholder:text-textColor"
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
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm md:placeholder:text-base placeholder:text-textColor"
                                />
                                <span className="absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="md:px-6 flex items-center justify-center">
                            <button className='bg-white text-mainColor border border-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 rounded-lg px-4 py-1.5 w-full h-fit cursor-pointer'>
                                <span className='text-sm md:text-base'>مسح الكل</span>
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
                        <div className="">
                            <span className='bg-secondBackGroundColor rounded-2xl px-4 py-2'>تم العثور على 12شركة</span>
                        </div>

                        <div className="flex flex-row items-center justify-between w-full md:w-fit gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='filter'
                                    placeholder='ترتيب حسب'
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm md:placeholder:text-base placeholder:text-textColor"
                                />
                                <span className={`absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>

                            {/* Switch Buttons */}
                            <div className="flex flex-row items-center justify-center gap-2">
                                {/* Grid Button */}
                                <div className="group">
                                    <button
                                        onClick={() => setViewType("grid")}
                                        className={`p-0.5 rounded border border-mainColor transition-colors duration-500 cursor-pointer ${viewType === "grid" && "bg-mainColor text-white"}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`${viewType === "grid" ? "text-white" : "text-mainColor"}`}><rect width={7} height={7} x={3} y={3} rx={1} /><rect width={7} height={7} x={14} y={3} rx={1} /><rect width={7} height={7} x={14} y={14} rx={1} /><rect width={7} height={7} x={3} y={14} rx={1} /></svg>

                                    </button>
                                </div>

                                {/* List Button */}
                                <div className="group">
                                    <button
                                        onClick={() => setViewType("list")}
                                        className={`p-0.5 rounded border border-mainColor transition-colors duration-500 cursor-pointer ${viewType === "list" && "bg-mainColor text-white"}`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={`${viewType === "list" ? "text-white" : "text-mainColor"}`}><path d="M3 5h.01" /><path d="M3 12h.01" /><path d="M3 19h.01" /><path d="M8 5h13" /><path d="M8 12h13" /><path d="M8 19h13" /></svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='px-4 md:px-8 lg:px-16 py-10'>
                {/* Companies List */}
                <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" : "flex flex-col gap-5"}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className={`flex ${viewType === "grid" ? "flex-col" : "flex-col md:flex-row justify-center items-center"} gap-4 border border-mainColor rounded-2xl p-4`}>
                            <header className={`flex ${viewType === "grid" ? "flex-row" : "flex-col"} gap-2 items-center`}>
                                {/* img */}
                                <div className={viewType === "grid" ? "w-36 h-36 md:w-40 md:h-40 rounded-2xl overflow-hidden" : "w-full h-48 md:w-52 rounded-t-2xl md:rounded-e-none md:rounded-s-2xl overflow-hidden"}>
                                    <img src={companyImg} loading='lazy' alt="campany-img" className='w-full h-full' />
                                </div>
                                <div className={`flex ${viewType === "grid" ? "flex-col" : "hidden"} gap-2`}>
                                    <h3 className='text-xl text-textColor font-bold flex flex-row items-center gap-2'>شركة البناء المتقدم<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' /></h3>
                                    <span className='bg-secondaryColor text-white w-fit rounded-4xl px-4 py-2 text-xs font-bold'>الخدمات اللوجيستية</span>
                                </div>
                            </header>
                            <div className="flex flex-col flex-1">
                                {/* header */}
                                <div className={`flex ${viewType === "grid" ? "hidden" : "flex-row flex-wrap lg:gap-20 mb-2"} gap-2`}>
                                    <h3 className='text-xl text-textColor font-bold flex flex-row items-center gap-2'>شركة البناء المتقدم<img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' /></h3>
                                    <span className='bg-secondaryColor text-white w-fit rounded-4xl px-4 py-2 text-xs font-bold'>الخدمات اللوجيستية</span>
                                </div>

                                {/* content */}
                                <div className={`flex ${viewType === "grid" ? "flex-col" : "flex-col md:flex-row justify-between"} gap-4 flex-1`}>
                                    <div className={`flex ${viewType === "grid" ? "flex-col" : "flex-col-reverse md:flex-row-reverse lg:gap-16"} gap-4`}>
                                        <ul className='text-paragraphTextColor flex flex-col text-sm'>
                                            <li className='text-xl font-bold text-textColor'><span>الخدمات الأساسية:</span></li>
                                            <li className='flex flex-row gap-1 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /><span>تصميم معماري متكامل</span> </li>
                                            <li className='flex flex-row gap-1 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /><span>إدارة مشاريع البناء</span> </li>
                                            <li className='flex flex-row gap-1 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /><span>مقاولات عامة ومتخصصة</span> </li>
                                            <li className='flex flex-row gap-1 items-center'><img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4 mt-1' /><span>تشطيبات داخلية وخارجية</span> </li>
                                        </ul>

                                        <div className={`flex ${viewType === "grid" ? "flex-col" : "flex-col"} gap-4`}>
                                            <div className="flex flex-row flex-wrap justify-between items-center text-paragraphTextColor text-base">
                                                <span className='flex flex-row items-center justify-center gap-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor mt-1.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                                    سعودية • الرياض
                                                </span>
                                                <span className='flex flex-row items-center justify-center gap-1'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor mt-0.5"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                                    <span className='mb-1'>9.7k</span>
                                                </span>
                                            </div>

                                            <div className="flex flex-row items-center gap-2">
                                                <div className="flex flex-row items-center">
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-4 h-4' />
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-4 h-4' />
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-4 h-4' />
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-4 h-4' />
                                                    <img src="/gray-star.png" alt="star" className='w-4 h-4' />
                                                </div>
                                                <span>4.7</span>
                                                <span className='text-sm text-paragraphTextColor'>(156)</span>
                                            </div>

                                            <div className="flex flex-row flex-wrap items-center gap-3">
                                                <span className='bg-gray-200 rounded-3xl px-2 py-1 text-xs font-bold'>B2B</span>
                                                <span className='bg-gray-200 rounded-3xl px-2 py-1 text-xs font-bold'>مقاول معتمد</span>
                                                <span className='bg-gray-200 rounded-3xl px-2 py-1 text-xs font-bold'>ISO 9001</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`flex ${viewType === "grid" ? "flex-row" : "flex-col"} items-center gap-4`}>
                                        <div className="group w-full flex">
                                            <Link to="/companyDetails" className='border border-mainColor rounded-lg py-2 px-1 md:px-4 w-full text-center bg-mainColor group-hover:bg-white transition-colors ease-in-out duration-500 cursor-pointer'>
                                                <span className='text-xl text-white group-hover:text-mainColor transition-colors ease-in-out duration-500'>عرض الشركة</span>
                                            </Link>
                                        </div>
                                        <div className="group w-full">
                                            <button className='border border-mainColor rounded-lg py-2 px-1 md:px-4 w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                                <span className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>طلب خدمة</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
