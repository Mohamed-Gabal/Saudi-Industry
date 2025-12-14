import React, { useState } from 'react'

type ToggleKeys = "email" | "sms" | "whatsapp";

export default function ProfileSettings() {
    const [toggles, setToggles] = useState<Record<ToggleKeys, boolean>>({
        email: false,
        sms: false,
        whatsapp: false,
    });

    const handleToggle = (key: ToggleKeys) => {
        setToggles((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const [showFormSettingsModel, setShowFormSettingsModel] = useState(false);
    const isModalOpen = () => {
        setShowFormSettingsModel(!showFormSettingsModel)
    }
    return (
        <div className='flex flex-col'>
            <header className='bg-white h-24 border-b border-borderColor content-center px-4 md:px-8 flex items-center justify-between'>
                <div className="">
                    <h1 className='text-2xl text-textColor font-bold'>إعدادات الحساب</h1>
                    <p className='text-paragraphTextColor'>إدارة معلومات حسابك الشخصي</p>
                </div>
                <button onClick={isModalOpen} className='bg-mainColor text-white flex items-center justify-center gap-2 rounded-lg px-4 py-2 cursor-pointer'>
                    <img src="/userProfile/PencilSimpleLine.svg" alt="PencilSimpleLine" />
                    <span>تعديل</span>
                </button>
            </header>

            <main className='p-4 md:p-8 flex flex-col gap-4 md:gap-8'>
                <div className="bg-white border border-borderColor p-4 rounded-lg">
                    <h1 className='border-b border-borderColor pb-2 text-xl text-textColor font-bold'>معلومات الملف الشخصي</h1>
                    <ul className='flex flex-col gap-2 mt-2'>
                        <li className='text-paragraphTextColor text-lg'>
                            <span className='text-textColor font-bold'>الاسم الكامل: </span>
                            <span>احمد عمر ماهر</span>
                        </li>

                        <li className='text-paragraphTextColor text-lg'>
                            <span className='text-textColor font-bold'>رقم الجوال: </span>
                            <span>+96587413369</span>
                        </li>

                        <li className='text-paragraphTextColor text-lg'>
                            <span className='text-textColor font-bold'>بريدك الإلكتروني: </span>
                            <span>advanced-solutions.sa</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white border border-borderColor p-4 rounded-lg">
                    <h1 className='border-b border-borderColor pb-2 text-2xl text-textColor font-bold'>إعدادات الإشعارات</h1>

                    <ul className="flex flex-col gap-2">
                        {/* إشعارات البريد الإلكتروني */}
                        <li className="flex flex-row justify-between items-center py-4 border-b border-borderColor">
                            <div>
                                <h3 className="text-lg font-bold text-textColor">
                                    إشعارات البريد الإلكتروني
                                </h3>
                                <p className="text-paragraphTextColor">استقبال تحديثات الطلبات</p>
                            </div>

                            <div>
                                <label className="relative flex items-center justify-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={toggles.email}
                                        onChange={() => handleToggle("email")}
                                    />
                                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-mainColor rounded-full peer transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                                </label>
                            </div>
                        </li>

                        {/* إشعارات الرسائل النصية */}
                        <li className="flex flex-row justify-between items-center py-4 border-b border-borderColor">
                            <div>
                                <h3 className="text-lg font-bold text-textColor">
                                    إشعارات الرسائل النصية
                                </h3>
                                <p className="text-paragraphTextColor">استقبال تحديثات الطلبات</p>
                            </div>

                            <div>
                                <label className="relative flex items-center justify-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={toggles.sms}
                                        onChange={() => handleToggle("sms")}
                                    />
                                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-mainColor rounded-full peer transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                                </label>
                            </div>
                        </li>

                        {/* إشعارات واتساب */}
                        <li className="flex flex-row justify-between items-center py-4">
                            <div>
                                <h3 className="text-lg font-bold text-textColor">إشعارات واتساب</h3>
                                <p className="text-paragraphTextColor">استقبال الرسائل عبر واتساب</p>
                            </div>

                            <div>
                                <label className="relative flex items-center justify-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={toggles.whatsapp}
                                        onChange={() => handleToggle("whatsapp")}
                                    />
                                    <div className="w-12 h-6 bg-gray-300 peer-checked:bg-mainColor rounded-full peer transition-colors duration-300"></div>
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>


            {/* model */}
            <div className={`${showFormSettingsModel ? "block" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 bg-black/15`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm p-4">
                        <button type="button" onClick={isModalOpen} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <form action="" className='w-full'>
                            <header className='text-center'>
                                <h1 className='text-3xl font-bold text-textColor'>إعدادات الحساب</h1>
                                <p className='text-lg text-paragraphTextColor'>إدارة معلومات حسابك الشخصي</p>
                            </header>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="userName"><span className='text-lg text-textColor font-bold'>الاسم الكامل</span><span className='text-red-500'>*</span></label>
                                    <div className="relative">
                                        <img src="/gray-icons/one-user.svg" alt="one-user" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                        <input type="text" name="userName" id="userName" placeholder='أدخل اسمك بالكامل' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="phone"><span className='text-lg text-textColor font-bold'>رقم الجوال</span><span className='text-red-500'>*</span></label>
                                    <div className="relative">
                                        <img src="/gray-icons/Phone.svg" alt="Phone" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                        <input type="text" name="phone" id="phone" placeholder='أدخل رقم جوالك' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <label htmlFor="email"><span className='text-lg text-textColor font-bold'>بريدك الإلكتروني</span><span className='text-red-500'>*</span></label>
                                    <div className="relative">
                                        <img src="/gray-icons/Envelope.svg" alt="Envelope" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                        <input type="text" name="email" id="email" placeholder='أدخل بريدك الإلكتروني' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 xmd:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1 w-full">
                                        <label htmlFor="password"><span className='text-lg text-textColor font-bold'>كلمة المرور</span><span className='text-red-500'>*</span></label>
                                        <div className="relative">
                                            <img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                            <input type="text" name="password" id="password" placeholder='أدخل كلمة المرور' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1 w-full">
                                        <label htmlFor="confirmPassword"><span className='text-lg text-textColor font-bold'>تأكيد كلمة المرور</span><span className='text-red-500'>*</span></label>
                                        <div className="relative">
                                            <img src="/gray-icons/eye-password-icon.svg" alt="eye-password-icon" className='w-5 h-5 absolute top-1/2 -translate-y-1/2 start-2' />
                                            <input type="text" name="confirmPassword" id="confirmPassword" placeholder='تأكيد كلمة المرور' className='border border-borderColor bg-backGroundColor/30 text-paragraphTextColor w-full rounded-lg py-2 ps-8' />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center gap-4 justify-end">
                                    <button type='button' className='border border-mainColor text-mainColor rounded-lg px-8 py-2 cursor-pointer'><span>إلغاء</span></button>
                                    <button type='submit' className='bg-mainColor text-white rounded-lg px-8 py-2 cursor-pointer'><span>حفظ</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
