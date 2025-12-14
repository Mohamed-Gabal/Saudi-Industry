import React from 'react'
import personPhoto from '../../../assets/images/campany-img.webp'
import campanyPhoto from '../../../assets/images/CompanyDetails.webp'

export default function MessagePage() {
    return (
        <div className="flex-col">
            <header className='bg-white h-24 border-b border-borderColor content-center px-8'>
                <h1 className='text-2xl text-textColor font-bold'>الرسائل</h1>
                <p className='text-paragraphTextColor'>تواصل مع الشركات والموردين</p>
            </header>

            <main className='px-4 md:px-8 py-4'>
                <div className="flex flex-col md:flex-row bg-white border border-borderColor rounded-lg">
                    <div className="w-full md:max-w-80 md:border-e border-borderColor p-4">
                        <div className="border-b border-borderColor pb-5">
                            <div className="relative">
                                <input
                                    type="text"
                                    name='campany'
                                    placeholder="البحث في المحادثات"
                                    className="w-full border border-gray-400 rounded-lg px-2 ps-7 py-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-paragraphTextColor"
                                />
                                <span className="absolute z-10 start-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor mb-0.5"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                </span>
                            </div>
                        </div>

                        {/* tabs */}
                        <div className="flex flex-col gap-5">
                            <ul className='flex flex-col'>
                                <li className='flex flex-row items-center gap-2 py-4 border-b border-borderColor'>
                                    <div className="bg-[#79C04314] border-s-2 border-mainColor p-2 w-full flex flex-row items-center gap-2">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <img src={personPhoto} loading='lazy' alt="Photo by James Barr" className='w-full h-full object-center' />
                                        </div>

                                        <div className="w-full">
                                            <h1 className='flex items-center justify-between w-full'>
                                                <span className='text-lg text-textColor'>صناعة الفولاذ السعودية</span>
                                                <span className='bg-red-400 rounded-full w-6 h-6 text-white flex items-center justify-center'>1</span>
                                            </h1>
                                            <p className='text-sm text-paragraphTextColor'>شكراً لك على طلبك. سيتم تأكيد الطلب خلال ٢٤ ساعة. ٣‏/٧‏/١٤٤٥ هـ</p>
                                        </div>
                                    </div>
                                </li>

                                <li className='flex flex-row items-center gap-2 py-4 border-b border-borderColor'>
                                    <div className="p-2 w-full flex flex-row items-center gap-2">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <img src={personPhoto} loading='lazy' alt="Photo by James Barr" className='w-full h-full' />
                                        </div>

                                        <div className="w-full">
                                            <h1 className='flex items-center justify-between w-full'>
                                                <span className='text-lg text-textColor'>شركة تمور المدينة</span>
                                            </h1>
                                            <p className='text-sm text-paragraphTextColor'>شكراً لك على طلبك. سيتم تأكيد الطلب خلال ٢٤ ساعة. ٣‏/٧‏/١٤٤٥ هـ</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* content */}
                    <div className="w-full flex flex-col p-4">
                        <header className='flex flex-row flex-wrap items-center justify-center md:justify-between border-b border-borderColor pb-3'>
                            <div className="flex flex-row items-center gap-2">
                                <div className="w-12 h-10 rounded-full overflow-hidden">
                                    <img src={campanyPhoto} loading='lazy' alt="campanyPhoto" className='w-full h-full' />
                                </div>

                                <div className="w-full">
                                    <h1 className='flex items-center gap-2'>
                                        <span className='text-lg text-textColor'>صناعة الفولاذ السعودية</span>
                                        <img src="/CheckCircle.png" alt="CheckCircle" className='w-4 h-4' />                                    </h1>
                                    <span className='text-paragraphTextColor'>موثق</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-4">
                                <button><img src="/gray-icons/Phone.svg" alt="Phone" /></button>
                                <button><img src="/userProfile/ShareFat.svg" alt="ShareFat" /></button>
                            </div>
                        </header>

                        <div className="flex flex-col gap-4 py-4 min-h-96">
                            <div className="">
                                <p className='bg-backGroundColor text-textColor w-fit p-2 rounded-lg relative'>
                                    <span>شكراً لك على طلبك. سيتم تأكيد الطلب خلال ٢٤ ساعة.</span>
                                    <span className='absolute top-full end-0 text-sm text-paragraphTextColor'>٣‏/٧‏/١٤٤٥ هـ</span>
                                </p>
                            </div>

                            <div className="w-full flex justify-end">
                                <p className='bg-mainColor text-white w-fit p-2 rounded-lg relative'>
                                    <span>متى سيتم شحن الطلب؟</span>
                                    <span className='absolute top-full end-0 text-sm text-paragraphTextColor'>٣‏/٧‏/١٤٤٥ هـ</span>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center border-t border-borderColor gap-4 pt-5">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    name='message'
                                    placeholder="اكتب رسالة..."
                                    className="w-full border border-gray-400 rounded-lg px-2 ps-7 py-2 cursor-pointer focus:outline-none hover:border-mainColor hover:bg-secondBackGroundColor transition-colors ease-in-out duration-500 placeholder:text-lg placeholder:text-paragraphTextColor"
                                />
                                <span className="absolute z-10 start-1 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor mb-0.5"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                </span>
                            </div>
                            <div className="w-11 h-11 flex items-center justify-center bg-mainColor rounded-full cursor-pointer">
                                <img src="/userProfile/PaperPlaneTilt.svg" alt="PaperPlaneTilt" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
