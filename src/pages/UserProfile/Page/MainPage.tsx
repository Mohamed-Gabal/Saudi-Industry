import React from 'react'

export default function MainPage() {
    return (
        <div className="">
            <header className='bg-white h-24 border-b border-borderColor content-center px-8'>
                <h1 className='text-2xl text-textColor font-bold'>الرئيسية</h1>
                <p className='text-paragraphTextColor'>تواصل مع الشركات والموردين</p>
            </header>

            <main className='flex flex-col gap-5 md:gap-10 px-4 md:px-8 py-4'>
                <div className="flex flex-row justify-between items-center backgroundLinear px-4 md:px-16 py-8 rounded-lg">
                    <div className="">
                        <h1 className='text-3xl text-white font-bold'>مرحباً احمد عمر منصور</h1>
                        <p className='text-lg'>مرحباً بك في لوحة التحكم الخاصة بك</p>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-lightseagreen flex items-center justify-center">
                        <img src="/userProfile/TrendUp.svg" alt="TrendUp" loading='lazy' className='w-7 h-7' />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                    <div className="flex items-center justify-center gap-10 py-4 bg-[#79C04314] rounded-lg shadow">
                        <img src="/userProfile/Cube.svg" alt="Cube" loading='lazy' className='w-7 h-7' />

                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className='text-3xl font-bold'>1</h1>
                            <span className='text-paragraphTextColor'>الطلبات النشطة</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-10 py-4 bg-[#E3CB8929] border border-[#B49C5C] rounded-lg shadow">
                        <img src="/userProfile/MapPin.svg" alt="MapPin" loading='lazy' className='w-7 h-7' />

                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className='text-3xl font-bold'>1</h1>
                            <span className='text-paragraphTextColor'>العناوين المحفوظة</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-10 py-4 bg-[#E0EBFF] rounded-lg shadow">
                        <img src="/userProfile/ChatCircle.svg" alt="ChatCircle" loading='lazy' className='w-7 h-7' />

                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className='text-3xl font-bold'>1</h1>
                            <span className='text-paragraphTextColor'>الرسائل الجديدة</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-borderColor p-4">
                    <h1 className='text-2xl text-textColor font-bold mb-5'>إجراءات سريعة</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
                        <button className='bg-mainColor rounded-lg text-white flex items-center justify-center gap-2 py-2 cursor-pointer'>
                            <img src="/userProfile/PencilSimpleLine.svg" loading='lazy' alt="PencilSimpleLine" />
                            <span>تعديل الملف</span>
                        </button>
                        <button className='bg-[#B49C5C] rounded-lg text-white flex items-center justify-center gap-2 py-2 cursor-pointer'>
                            <img src="/userProfile/Plus.svg" loading='lazy' alt="Plus" />
                            <span>تعديل الملف</span>
                        </button>
                        <button className='bg-[#4C5B69] rounded-lg text-white flex items-center justify-center gap-2 py-2 cursor-pointer'>
                            <img src="/userProfile/Eye.svg" loading='lazy' alt="Eye" />
                            <span>عرض الطلبات</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg border border-borderColor p-4">
                    <h1 className='text-2xl text-textColor font-bold mb-5'>النشاط الأخير</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex items-center gap-2 border-b border-borderColor pb-4'>
                            <div className="w-10 h-10 rounded-full bg-[#79C04352] flex items-center justify-center">
                                <img src="/userProfile/Cube.svg" alt="Cube" loading='lazy' className='w-6 h-6' />
                            </div>
                            <div className='flex flex-col text-textColor'>
                                <h1 className='font-bold'>تم تأكيد طلبك #ORD-2024-001</h1>
                                <span>منذ ساعتين</span>
                            </div>
                        </li>
                        <li className='flex items-center gap-2'>
                            <div className="w-10 h-10 rounded-full bg-[#E0EBFF] flex items-center justify-center">
                                <img src="/userProfile/ChatCircle.svg" alt="ChatCircle" loading='lazy' className='w-6 h-6' />
                            </div>
                            <div className='flex flex-col text-textColor'>
                                <h1 className='font-bold'>رسالة جديدة من صناعات الفولاذ السعودية</h1>
                                <span>منذ ٤ ساعات</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
