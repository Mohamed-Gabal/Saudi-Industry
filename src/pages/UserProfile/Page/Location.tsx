import React, { useState } from 'react'
import Buildings from "../../../assets/products/Buildings.webp";

export default function Location() {
    const [showLocationModel, setShowLocationModel] = useState(false);
    const isModalOpen = () => {
        setShowLocationModel(!showLocationModel)
    }
    return (
        <div className='flex flex-col'>
            <header className='bg-white h-24 border-b border-borderColor content-center px-8 flex items-center justify-between'>
                <div className="">
                    <h1 className='text-2xl text-textColor font-bold'>عناويني</h1>
                    <p className='text-paragraphTextColor'>إدارة عناوين التسليم الخاصة بك</p>
                </div>
                <button onClick={isModalOpen} className='bg-mainColor text-white flex items-center justify-center gap-2 rounded-lg px-4 py-2 cursor-pointer'>
                    <img src="/userProfile/Plus.svg" alt="Plus" />
                    <span>إضافة عنوان</span>
                </button>
            </header>

            <main className='flex flex-row flex-wrap justify-around p-4 md:p-8 gap-10'>
                <div className="bg-white border border-mainColor rounded-lg p-4 flex flex-row items-center gap-5 max-w-96 lg:max-w-lg">
                    <div className="flex flex-row items-center gap-2">
                        <div className="w-14 h-14 bg-secondBackGroundColor text-mainColor rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mb-1"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        </div>

                        <div className="flex flex-col text-paragraphTextColor">
                            <h1 className='text-xl font-bold text-textColor'>المنزل</h1>
                            <span className='text-paragraphTextColor'>حي النزهة، شارع الملك فهد، مبنى ١٢٣</span>
                            <span>الدور الثاني، شقة ٢٠٥</span>
                            <span>+966501234567</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-2">
                        <button className='cursor-pointer'>
                            <img src="/gray-icons/PencilSimpleLine.svg" alt="PencilSimpleLine" className='w-5 h-5' />
                        </button>
                        <button className='cursor-pointer'>
                            <img src="/gray-icons/TrashSimple.svg" alt="TrashSimple" className='w-5 h-5' />
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-borderColor rounded-lg p-4 flex flex-col gap-4 max-w-96 lg:max-w-lg">
                    <div className="flex flex-row items-center gap-5">
                        <div className="flex flex-row gap-2 items-center">
                            <div className="w-14 h-14 bg-secondBackGroundColor text-mainColor rounded-full flex items-center justify-center">
                                <img src="/company-details/green-icons/Buildings.svg" alt="bulding" className='w-8 h-8' />
                            </div>

                            <div className="flex flex-col text-paragraphTextColor">
                                <h1 className='text-xl font-bold text-textColor'>العمل</h1>
                                <span className='text-paragraphTextColor'>حي العليا، طريق الملك عبدالعزيز، برج الأعمال</span>
                                <span>الطابق ١٥، مكتب ١٥٠٢</span>
                                <span>+966501234567</span>
                            </div>
                        </div>

                        <div className="flex flex-row gap-2">
                            <button className='cursor-pointer'>
                                <img src="/gray-icons/PencilSimpleLine.svg" alt="PencilSimpleLine" className='w-5 h-5' />
                            </button>
                            <button className='cursor-pointer'>
                                <img src="/gray-icons/TrashSimple.svg" alt="TrashSimple" className='w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    <button className='border border-mainColor text-mainColor rounded-lg py-2 hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500 cursor-pointer'>
                        <span>تعيين كإفتراضي</span>
                    </button>
                </div>
            </main>


            {/* model */}
            <div className={`${showLocationModel ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 bg-black/15`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm p-4">
                        <button type="button" onClick={isModalOpen} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                        <header className="p-4 md:p-5 text-center flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-normal text-textColor">إضافة عنوان جديد</h3>
                        </header>

                        <form action="" className='flex flex-col gap-4'>
                            <div className="">
                                <label htmlFor="locationHeader"><span className='text-lg text-textColor font-bold'>العنوان</span><span className='text-red-500'>*</span></label>
                                <input type="text" name="locationHeader" id="locationHeader" placeholder='مثل المنزل, العمل' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="">
                                    <label htmlFor="city"><span className='text-lg text-textColor font-bold'>المدينة</span><span className='text-red-500'>*</span></label>
                                    <input type="text" name="city" id="city" placeholder='المدينة' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                                </div>
                                <div className="">
                                    <label htmlFor="area"><span className='text-lg text-textColor font-bold'>المنطقة </span><span className='text-red-500'>*</span></label>
                                    <input type="text" name="area" id="area" placeholder='المنطقة ' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="location"><span className='text-lg text-textColor font-bold'>العنوان كاملا</span><span className='text-red-500'>*</span></label>
                                <input type="text" name="location" id="location" placeholder='رقم المبنى, اسم الشارع' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                            </div>

                            <div className="">
                                <label htmlFor="moreInformation"><span className='text-lg text-textColor font-bold'>معلومات إضاقية (اختياري)</span></label>
                                <input type="text" name="moreInformation" id="moreInformation" placeholder='معلومات إضاقية' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg p-2' />
                            </div>

                            <div className="flex flex-row items-center gap-4 justify-end">
                                <button type='button' className='border border-mainColor text-mainColor rounded-lg px-8 py-2 cursor-pointer'><span>إلغاء</span></button>
                                <button type='submit' className='bg-mainColor text-white rounded-lg px-8 py-2 cursor-pointer'><span>حفظ</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
