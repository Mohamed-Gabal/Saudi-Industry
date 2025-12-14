import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import companyImg from '../../assets/images/CompanyDetails.webp'

export default function Compaines() {
    const [viewType, setViewType] = useState<"grid" | "list">("grid");
    return (
        <div className="pt-16">
            <section className='bg-gray-100 px-4 md:px-8 lg:px-16 py-10 flex flex-col items-center justify-center gap-6'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-4xl'>تصفية النتائج</h1>
                </header>

                <div className="flex flex-col gap-6">
                    <form action="" className="grid grid-cols-2 md:grid-cols-4 max-w-3xl gap-4 w-fit bg-white border border-gray-400 rounded-lg px-4 py-8">
                        <div className="">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='campany'
                                    placeholder="ابحث بإسم الشركة"
                                    className="w-full border border-gray-400 rounded-lg px-2 ps-7 py-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm placeholder:text-textColor"
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
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm placeholder:text-textColor"
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
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm placeholder:text-textColor"
                                />
                                <span className="absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="md:px-6 flex items-center justify-center">
                            <button className='bg-white text-mainColor border border-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 rounded-lg px-4 py-1.5 w-full h-fit cursor-pointer'>
                                <span className='text-base'>مسح الكل</span>
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full">
                        <div className="bg-secondBackGroundColor rounded-2xl px-4 py-2">
                            <span className='text-base'>تم العثور على 12 شركة</span>
                        </div>

                        <div className="flex flex-row items-center justify-between w-full md:w-fit gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='area'
                                    placeholder='ترتيب حسب'
                                    className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-sm placeholder:text-textColor"
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
                <div className={viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" : "flex flex-col gap-5"}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className={`flex ${viewType === "grid" ? "flex-col" : "flex-col sm:flex-row md:flex-row lg:flex-row"} gap-4 border border-mainColor rounded-2xl p-2`}>
                            {/* header */}
                            <header className={`flex ${viewType === "grid" ? "flex-col sm:flex-row items-center" : "flex-col sm:flex-row md:flex-row lg:flex-row items-start md:items-center"} gap-2`}>
                                {/* img */}
                                <div className={viewType === "grid" ? "w-full h-44 sm:w-40 lg:w-52 sm:h-32 rounded-t-2xl sm:rounded-b-2xl overflow-hidden" : "w-full sm:w-40 sm:h-40 md:w-48 lg:w-52 sm:rounded-s-2xl overflow-hidden"}>
                                    <img src={companyImg} loading="lazy" alt="campany-img" className="w-full h-full" />
                                </div>

                                {/* اسم الشركة + القطاع */}
                                <div className={`flex ${viewType === "grid" ? "flex-row flex-wrap justify-between w-full sm:flex-col" : "hidden"} gap-2 text-center sm:text-start`}>
                                    <h3 className="text-lg text-textColor font-bold flex flex-row items-center gap-1">
                                        شركة البناء المتقدم
                                        <img src="/CheckCircle.png" alt="CheckCircle" className="w-4 h-4 mt-0.5" />
                                    </h3>
                                    <span className="bg-secondaryColor text-white w-fit rounded-4xl px-3 py-1 text-xs md:text-sm font-bold">
                                        الخدمات اللوجيستية
                                    </span>
                                </div>
                            </header>

                            {/* المحتوى */}
                            <div className={`flex flex-col gap-4 flex-1`}>
                                {/* اسم الشركة + القطاع */}
                                <div className={`flex ${viewType === "grid" ? "hidden" : "flex flex-row flex-wrap gap-4 lg:gap-14 xl:gap-20"} gap-2 text-center sm:text-start`}>
                                    <h3 className="text-lg md:text-xl text-textColor font-bold flex flex-row items-center gap-2">
                                        شركة البناء المتقدم
                                        <img src="/CheckCircle.png" alt="CheckCircle" className="w-4 h-4 mt-0.5" />
                                    </h3>
                                    <span className="bg-secondaryColor text-white w-fit rounded-4xl px-3 py-1 text-xs md:text-sm font-bold">
                                        الخدمات اللوجيستية
                                    </span>
                                </div>

                                <div className={`flex ${viewType === "grid" ? "flex-col" : "flex-col sm:flex-row flex-wrap justify-between"} gap-4`}>
                                    <div className={`flex ${viewType === "grid" ? "flex-col" : "flex-col sm:flex-row-reverse gap-4 lg:gap-14 xl:gap-20"} gap-4`}>
                                        <p className={`text-paragraphTextColor text-sm md:text-base ${viewType === "grid" ? "w-full" : "max-w-2xs h-fit"}`}>
                                            شركة رائدة في مجال البناء والإنشاءات مع خبرة تزيد عن 25 عاماً في
                                            تنفيذ المشاريع الكبرى والمتوسطة. نقدم حلول متكاملة في البناء والتشييد.
                                        </p>

                                        <div className="flex flex-col gap-4">
                                            {/* العنوان + المشاهدات */}
                                            <div className="flex flex-row flex-wrap justify-between items-start sm:items-center gap-2 text-paragraphTextColor text-sm md:text-lg">
                                                <div className="flex items-center gap-1">
                                                    <img src="/gray-icons/MapPin.svg" loading='lazy' alt="MapPin" className='w-3.5 h-3.5 mt-0.5' />
                                                    <span className="text-sm">سعودية • الرياض</span>
                                                </div>

                                                <div className="flex flex-row items-center gap-1">
                                                    <img src="/gray-icons/eye-password-icon.svg" loading='lazy' alt="eye-icon" className='w-4 h-4 mt-0.5 text-paragraphTextColor' />
                                                    <span className="text-sm">9.7k</span>
                                                </div>
                                            </div>

                                            {/* التقييم */}
                                            <div className="flex flex-row flex-wrap items-center gap-2">
                                                <div className="flex flex-row items-center">
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className="w-4 h-4" />
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className="w-4 h-4" />
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className="w-4 h-4" />
                                                    <img src="/gold-img/Gold_Star.svg" alt="star" className="w-4 h-4" />
                                                    <img src="/gray-star.png" alt="star" className="w-4 h-4" />
                                                </div>
                                                <span>4.7</span>
                                                <span className="text-xs text-paragraphTextColor">(156)</span>
                                            </div>

                                            {/* الوسوم */}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="bg-gray-200 rounded-3xl px-2 py-1 text-xs font-bold">
                                                    B2B
                                                </span>
                                                <span className="bg-gray-200 rounded-3xl px-2 py-1 text-xs font-bold">
                                                    مقاول معتمد
                                                </span>
                                                <span className="bg-gray-200 rounded-3xl px-2 py-1 text-xs font-bold">
                                                    ISO 9001
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* الأزرار */}
                                    <div className={`flex ${viewType === "grid" ? "flex-col sm:flex-row w-full " : "flex flex-row lg:flex-col"} items-center gap-3 mt-2`}>
                                        <Link to="/companyDetails" className="border border-mainColor rounded-lg py-2 px-3 w-full text-center bg-mainColor text-white hover:bg-white hover:text-mainColor transition-colors duration-500">
                                            <span className="text-sm md:text-base">
                                                عرض الشركة
                                            </span>
                                        </Link>

                                        <button className="border border-mainColor rounded-lg py-2 px-3 w-full hover:bg-mainColor text-textColor hover:text-white transition-colors duration-500 cursor-pointer">
                                            <span className="text-sm md:text-base">
                                                طلب خدمة
                                            </span>
                                        </button>
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
