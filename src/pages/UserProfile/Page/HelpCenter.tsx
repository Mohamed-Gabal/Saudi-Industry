import React from 'react'

export default function HelpCenter() {
    return (
        <main className='p-4 md:p-8 flex flex-col justify-between h-full'>
            <div className="flex flex-col justify-center items-center gap-5 backgroundLinear px-4 md:px-16 py-8 rounded-lg">
                <div className="rounded-full bg-lightseagreen p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headset-icon lucide-headset w-10 h-10"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
                </div>

                <div className="flex flex-col items-center justify-center min-w-60 md:min-w-96 lg:w-xl">
                    <h1 className='text-2xl font-bold'>مركز المساعدة</h1>
                    <p className='text-lg'>كيف يمكننا مساعدتك اليوم؟</p>
                    <div className="relative w-full mt-5">
                        <input
                            type="text"
                            name='campany'
                            placeholder="ابحث عن موضوع أو سؤال..."
                            className="w-full bg-white rounded-4xl px-8 ps-9 py-2 cursor-pointer focus:outline-none text-textColor placeholder:text-lg placeholder:text-paragraphTextColor"
                        />
                        <span className="absolute z-10 start-3 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-textColor"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                        </span>
                    </div>

                    <div className="flex flex-row flex-wrap gap-4 mt-5">
                        <button type='button' className='bg-lightseagreen rounded-4xl px-4 py-2 cursor-pointer'>
                            <span className='text-sm sm:text-lg'>إنشاء حساب</span>
                        </button>
                        <button type='button' className='bg-lightseagreen rounded-4xl px-4 py-2 cursor-pointer'>
                            <span className='text-sm sm:text-lg'>تتبع الطلب</span>
                        </button>
                        <button type='button' className='bg-lightseagreen rounded-4xl px-4 py-2 cursor-pointer'>
                            <span className='text-sm sm:text-lg'>طرق الدفع</span>
                        </button>
                        <button type='button' className='bg-lightseagreen rounded-4xl px-4 py-2 cursor-pointer'>
                            <span className='text-sm sm:text-lg'>التواصل مع الشركات</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center sm:items-center">
                <h1 className='text-2xl md:text-3xl text-textColor font-bold'>لم تجد ما تبحث عنه؟</h1>
                <p className='text-paragraphTextColor text-lg'>فريق الدعم متاح لمساعدتك في أي وقت</p>
                <div className="flex flex-row flex-wrap gap-5 items-center justify-center mt-4">
                    <button type='button' className='flex gap-1 items-center justify-center text-white bg-mainColor py-2 px-8 rounded-lg cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle mt-1"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>
                        <span>راسل فريق الدعم</span>
                    </button>
                    <button type='button' className='flex gap-1 items-center justify-center text-white bg-[#2CC161] py-2 px-8 rounded-lg cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 640 640" fill="white" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className=''><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>
                        <span>تواصل عبر الواتساب</span>
                    </button>
                </div>
            </div>
        </main>
    )
}
