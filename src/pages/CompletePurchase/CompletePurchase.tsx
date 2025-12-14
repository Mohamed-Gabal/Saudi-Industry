import React from 'react'
import { Link } from 'react-router-dom'

export default function CompletePurchase() {
    return (
        <div className='bg-backGroundColor flex flex-col gap-5 py-12 pt-24 px-4 md:px-8 lg:px-16'>
            <header className='flex flex-col items-center gap-5'>
                <p className='text-paragraphTextColor flex flex-row gap-1 items-center sm:gap-2 w-full'>
                    <span>الرئيسية</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" className='w-4 h-4' />
                    <span>سلة التسوق</span>
                    <img src="/company-details/CaretLeft.svg" alt="CaretLeft" className='w-4 h-4' />
                    <span>إتمام الشراء</span>
                </p>

                <div className="flex flex-row items-center justify-between md:w-xl lg:w-2xl min-w-2xs font-bold text-lg text-textColor relative">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <span className='rounded-full bg-mainColor w-10 h-10 text-white flex items-center justify-center relative z-10'>1</span>
                        <span className=''>معلومات العميل </span>
                    </div>
                    <span className='h-0.5 bg-[#D9D9D9] absolute start-20 end-14 top-5'></span>
                    <div className="flex flex-col items-center justify-center gap-2 ">
                        <span className='rounded-full bg-[#D9D9D9] w-10 h-10 text-textColor flex items-center justify-center relative z-10'>2</span>
                        <span className=''>مراجعة والدفع</span>
                    </div>
                </div>
            </header>

            <form action="" className='flex flex-col gap-5'>
                <div className="bg-white rounded-2xl border border-borderColor flex flex-col justify-between gap-5 p-4 md:p-6 shadow">
                    <h1 className='text-2xl text-textColor font-bold border-b border-borderColor pb-2'>معلومات العميل </h1>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="userName"><span className='text-lg text-textColor font-bold'>الاسم الكامل</span><span className='text-red-500'>*</span></label>
                        <div className="relative">
                            <img src="/gray-icons/one-user.svg" alt="one-user" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                            <input type="text" name="userName" id="userName" placeholder='أدخل اسمك بالكامل' className='border border-borderColor text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="phone"><span className='text-lg text-textColor font-bold'>رقم الجوال</span><span className='text-red-500'>*</span></label>
                        <div className="relative">
                            <img src="/gray-icons/Phone.svg" alt="Phone" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                            <input type="text" name="phone" id="phone" placeholder='أدخل رقم جوالك' className='border border-borderColor text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="userName"><span className='text-lg text-textColor font-bold'>بريدك الإلكتروني</span><span className='text-red-500'>*</span></label>
                        <div className="relative">
                            <img src="/gray-icons/Envelope.svg" alt="Envelope" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                            <input type="text" name="userName" id="userName" placeholder='أدخل بريدك الإلكتروني' className='border border-borderColor text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl border border-borderColor flex flex-col justify-between gap-5 p-4 md:p-6 shadow">
                    <h1 className='text-2xl text-textColor font-bold border-b border-borderColor pb-2'>عنوان التسليم</h1>

                    <div className="relative">
                        <input
                            type="text"
                            name='area'
                            placeholder='المنطقة'
                            className="w-full border border-gray-400 rounded-lg p-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-textColor"
                        />
                        <span className={`absolute end-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m18 15-6-6-6 6" /></svg>
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="userName"><span className='text-lg text-textColor font-bold'>المدينة</span><span className='text-red-500'>*</span></label>
                        <div className="relative">
                            <input type="text" name="city" id="city" placeholder='المدينة' className='border border-borderColor text-paragraphTextColor w-full rounded-lg py-2 ps-2' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="userName"><span className='text-lg text-textColor font-bold'>العنوان</span><span className='text-red-500'>*</span></label>
                        <div className="relative">
                            <input type="text" name="adress" id="adress" placeholder='أدخل عنوانك كاملا هنا' className='border border-borderColor text-paragraphTextColor w-full rounded-lg py-2 ps-2' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="mobile"><span className='text-lg text-textColor font-bold'>رقم الجوال</span></label>
                        <div className="relative">
                            <img src="/gray-icons/Phone.svg" alt="Phone" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                            <input type="text" name="mobile" id="mobile" placeholder='أدخل رقم جوالك' className='border border-borderColor text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="textarea"><span className='text-lg text-textColor font-bold'>ملاحظات للبائع (اختياري)</span></label>
                        <textarea name="textarea" id="textarea" cols={30} rows={10} className='border border-borderColor rounded-2xl p-4'></textarea>
                    </div>
                </div>
            </form>

            <div className="flex flex-row justify-between">
                <Link to="/chart" className='border border-mainColor text-mainColor rounded-lg py-2 px-4 flex flex-row items-center gap-2 cursor-pointer'>
                    <img src="/ArrowRight.svg" alt="ArrowRight" className='w-4 h-4' />
                    <span>العودة للسلة</span>
                </Link>
                <Link to="/completePurchase2" className='text-white bg-mainColor rounded-lg py-2 px-4 flex flex-row items-center gap-2 cursor-pointer'>
                    <span>الخطوة التالية</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                </Link>
            </div>
        </div>
    )
}
