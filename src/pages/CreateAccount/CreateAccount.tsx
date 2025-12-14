import React from 'react'
import { Link } from 'react-router-dom'
import grayLogo from '../../assets/logo/gray-logo-saudi-made.webp'

export default function CreateAccount() {
  return (
    <div className='flex flex-col items-center bg-backGroundColor pt-20 md:pt-40 h-dvh text-center overflow-hidden'>
      <header>
        <h1 className='text-2xl md:text-4xl font-bold text-textColor'>من أنت؟</h1>
        <p className='text-paragraphTextColor text-sm md:text-lg'>اختر الطريقة التي تريد استخدام منصة صناعة سعودية بها</p>
      </header>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-5 relative">
        {/* logo */}
        <div className="absolute bottom-full start-0 lg:-start-36 hidden md:block">
          <div className="w-40 h-40">
            <img src={grayLogo} loading='lazy' alt="gray-logo-saudi-made" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center px-4 md:px-8 py-4">
          <div className="bg-secondBackGroundColor rounded-lg w-16 h-16 flex items-center justify-center mb-4">
            <img src="/search-icone.svg" alt="search-icone" className='w-10 h-10 object-center' />
          </div>
          <div className="flex flex-col">
            <h1 className='text-2xl font-bold text-textColor'>أنا عميل</h1>
            <p>أبحث عن شركات وخدمات، وأقدّم طلباتي مباشرة.</p>
          </div>

          <Link to="/userSignUp" className='bg-mainColor border border-mainColor text-white flex flex-row items-center justify-center gap-2 w-full rounded-lg py-2 mt-4 cursor-pointer'>
            <span>استمر كعميل</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow flex flex-col items-center justify-center px-4 md:px-8 py-4">
          <div className="bg-[#FFF7E2] rounded-lg w-16 h-16 flex items-center justify-center mb-4">
            <img src="/gold-img/bulding.svg" alt="bulding" className='w-10 h-10 object-center' />
          </div>
          <div className="flex flex-col">
            <h1 className='text-2xl font-bold text-textColor'>أنا صاحب شركة</h1>
            <p>أعرض خدمات شركتي، وأستقبل طلبات العملاء.</p>
          </div>

          <Link to="/companySingUp" className='bg-[#B49C5C] text-white flex flex-row items-center justify-center gap-2 w-full rounded-lg py-2 mt-4 cursor-pointer'>
            <span>استمر كشركة</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          </Link>
        </div>

        {/* logo */}
        <div className="absolute top-full end-0 lg:start-full hidden md:block">
          <div className="w-40 h-40">
            <img src={grayLogo} loading='lazy' alt="gray-logo-saudi-made" className='w-full h-full object-contain' />
          </div>
        </div>
      </div>
    </div>
  )
}
