import React from 'react'
import { Link } from 'react-router-dom';
import campanyImg from '../../assets/images/campany-img.webp';
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories';
import ProductCard, { products } from '../../components/ProductCard/ProductCard';
import logoEnd from '../../assets/logo/min-logo-end.webp'
import logoStart from '../../assets/logo/min-logo.webp'

export default function Home() {
    return (
        <main className='flex flex-col pt-16'>
            <section className="relative parallax mt-2">
                <div className="relative z-30 flex flex-col items-center h-full gap-12 px-2 pt-16">
                    <div className="text-white">
                        <h1 className="text-white text-2xl md:text-5xl font-bold flex flex-col text-center">
                            <span className='tracking-tight md:leading-20'>مرحباً بك في صناعة سعودية</span>
                            <span className='text-secondaryTextColor'>دليل الأعمال السعـودي الرائد</span>
                        </h1>
                        <p className='text-center text-base md:text-3xl pt-3'>اكتشف الشركات الموثوقة، اطلب الخدمات، ووسع شبكة علاقاتك التجارية</p>
                    </div>

                    {/* inputs */}
                    <form action="" className="grid grid-cols-2 md:grid-cols-4 max-w-3xl gap-2 md:gap-4 w-fit bg-white rounded-lg p-4 relative z-50">
                        <div className="flex flex-col gap-4">
                            <label htmlFor="campany" className='text-base md:text-2xl font-medium text-textColor'>اسم الشركة</label>
                            <input
                                type="text"
                                name='campany'
                                placeholder='ابحث عن ...'
                                className="w-full border-b border-gray-400 px-2 py-1 focus:outline-none placeholder:text-base md:placeholder:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="area" className='text-base md:text-2xl font-medium text-textColor'>المنطقة</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='area'
                                    placeholder='أين'
                                    className="w-full border-b border-gray-400 px-2 py-1 focus:outline-none placeholder:text-base md:placeholder:text-lg"
                                />
                                <span className={`absolute end-1 top-1/2 -translate-y-1/2 -rotate-180 ltr:rotate-180 transition-all ease-in-out duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <label htmlFor="sector" className='text-base md:text-2xl font-medium text-textColor'>القطاع</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name='sector'
                                    placeholder='القطاع'
                                    className="w-full border-b border-gray-400 px-2 py-1 focus:outline-none placeholder:text-base md:placeholder:text-lg"
                                />
                                <span className="absolute end-1 top-1/2 -translate-y-1/2 -rotate-180 ltr:rotate-180 transition-all ease-in-out duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gray-300"><path d="m18 15-6-6-6 6" /></svg>
                                </span>
                            </div>
                        </div>

                        <div className="content-end px-4">
                            <button type='submit' className='bg-mainColor text-white rounded-lg px-4 py-2 h-11 w-full flex flex-row gap-2 items-center justify-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                <span className='text-lg'>بحث</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* second section */}
            <section className='flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-16'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-3xl'>الفئات المميزة</h1>
                    <p className='text-paragraphTextColor text-xl leading-16'>استكشف مختلف القطاعات والصناعات في المملكة العربية السعودية</p>
                </header>

                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 w-full">
                        <FeaturedCategories header='الخدمات اللوجستية' text='شركة + 650' img='Truck.svg' />
                        <FeaturedCategories header='العقارات' text='شركة + 650' img='bulding.svg' />
                        <FeaturedCategories header='الأغذية والمشروبات' text='شركة + 650' img='ForkKnife.svg' />
                        <FeaturedCategories header='البناء والتشييد' text='شركة + 650' img='Windmill.svg' />
                        <FeaturedCategories header='الإعلام' text='شركة + 650' img='TelevisionSimple.svg' />
                        <FeaturedCategories header='الرعاية الصحية' text='شركة + 650' img='Heart.svg' />
                        <FeaturedCategories header='التعليم' text='شركة + 650' img='GraduationCap.svg' />
                        <FeaturedCategories header='التكنولوجيا' text='شركة + 650' img='Desktop.svg' />
                    </div>

                    <div className="group">
                        <button className='border border-mainColor rounded-lg px-10 py-2 w-fit bg-white cursor-pointer group-hover:bg-mainColor transition-colors ease-in-out duration-500'>
                            <span className='text-mainColor text-lg font-medium group-hover:text-white transition-colors ease-in-out duration-500'>عرض جميع الفئات</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* third section */}
            <section className='flex flex-col items-center justify-center gap-5 px-4 md:px-8 lg:px-16 pt-16'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-3xl'>الشركات المميزة</h1>
                    <p className='text-paragraphTextColor text-xl leading-16'>اكتشف أفضل الشركات الموثقة والمعتمدة في المملكة العربية السعودية</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                    {Array.from({ length: 3 }, (_, i) => (
                        <div key={i} className="flex flex-col gap-4 border border-mainColor rounded-2xl p-2 md:p-4">
                            <header className="flex flex-row gap-2 items-center">
                                {/* img */}
                                <div className="w-40 h-40">
                                    <img src={campanyImg} alt="campany-img" loading='lazy' className='w-full' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className='text-lg md:text-xl font-bold flex flex-row items-center justify-between'>لوجيستك الخليج <img src="/CheckCircle.png" alt="CheckCircle" className='w-3.5 h-3.5 md:w-4 md:h-4 mt-2' /></h3>
                                    <span className='bg-secondaryColor text-xs text-center font-bold text-white rounded-2xl px-3 py-2'>الخدمات اللوجيستية</span>
                                </div>
                            </header>

                            <div className="flex flex-col gap-4">
                                <p className='text-paragraphTextColor text-base md:text-lg'>خدمات شحن وتوزيع شاملة في جميع أنحاء المملكة</p>
                                <div className="flex flex-row justify-between items-center text-paragraphTextColor text-lg">
                                    <span className='flex flex-row items-center justify-center gap-1 text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-paragraphTextColor mt-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx={12} cy={10} r={3} /></svg>
                                        الخبر
                                    </span>
                                    <span className='flex flex-row items-center justify-center gap-1 text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-icon lucide-eye mt-1"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                        9.7k
                                    </span>
                                </div>

                            <div className="flex flex-row items-center justify-between gap-2">
                                {/* Points */}
                                <div className="flex flex-row items-center">
                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                                    <img src="/gold-img/Gold_Star.svg" alt="star" className='w-5 h-5' />
                                    <img src="/gray-star.png" alt="star" className='w-5 h-5' />
                                    <span className="ml-2">4.7</span>
                                    <span className='text-sm text-paragraphTextColor'>(156)</span>
                                </div>    
                                    {/* Plus Button*/}
                                    <button 
                                    className="group flex items-center justify-center border border-mainColor rounded-full w-10 h-10 bg-white 
                                     hover:bg-mainColor hover:translate-y-[-3px] transition-all duration-300 cursor-pointer 
                                     active:scale-110 active:translate-y-[-1px]">
                                        <img src="/Plus.png" 
                                        alt="plus" 
                                        className="w-5 h-5 transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
                                        />
                                        </button>

                            </div>            

                                <div className="group w-full">
                                    <Link to="/companyDetails" className='border border-mainColor rounded-lg py-2 flex justify-center w-full group-hover:bg-mainColor transition-colors ease-in-out duration-500 cursor-pointer'>
                                        <span className='text-xl group-hover:text-white transition-colors ease-in-out duration-500'>عرض الشركة</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="group">
                    <Link to="/compaines" className='border border-mainColor rounded-lg px-10 py-2 w-fit bg-white group-hover:bg-mainColor cursor-pointer transition-colors ease-in-out duration-500'>
                        <span className='text-mainColor text-lg font-medium group-hover:text-white transition-colors ease-in-out duration-500'>عرض جميع الشركات</span>
                    </Link>
                </div>
            </section>

            {/* four section */}
            <section className='bg-gray-100 px-4 md:px-8 lg:px-16 py-14 mt-16'>
                <header className='text-center'>
                    <h1 className='text-textColor font-bold text-3xl'>كيف يعمل الموقع؟</h1>
                    <p className='text-paragraphTextColor text-xl leading-16'>ثلاث خطوات بسيطة للعثور على الشركة المناسبة وطلب الخدمة</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">

                    {/* 1 */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="bg-mainColor w-10 h-10 text-white text-2xl font-medium rounded-full text-center content-center">1</div>
                        <div className="group w-full">
                            <div className="flex flex-col border border-mainColor rounded-lg p-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>اطلب الخدمة</span>
                                        <span className='font-medium max-w-2xs text-center'>تواصل مع الشركة مباشرة واطلب الخدمة التي
                                            تحتاجها بسهولة وأمان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="bg-mainColor w-10 h-10 text-white text-2xl font-medium rounded-full text-center content-center">2</div>
                        <div className="group w-full">
                            <div className="border border-mainColor rounded-lg py-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx={12} cy={12} r={3} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className=' text-xl font-bold'>زر الملف التجاري</span>
                                        <span className='font-medium max-w-80 text-center'>اطلع على تفاصيل الشركة، الخدمات المقدمة، التقييمات، ومعرض الأعمال السابقة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="bg-mainColor w-10 h-10 text-white text-2xl font-medium rounded-full text-center content-center">3</div>
                        <div className="group w-full">
                            <div className="border border-mainColor rounded-lg p-4 group-hover:bg-mainColor transition-colors ease-in-out duration-500">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <div className="rounded-full w-20 h-20 bg-mainColor group-hover:bg-white flex items-center justify-center transition-colors ease-in-out duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-mainColor transition-colors ease-in-out duration-500"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                                    </div>

                                    <div className="flex flex-col items-center justify-center gap-1 text-textColor group-hover:text-white transition-colors ease-in-out duration-500">
                                        <span className='text-xl font-bold'>تصفح الشركات</span>
                                        <span className='font-medium max-w-80 text-center'>ابحث عن الشركات المناسبة لاحتياجاتك من خلال الفئات المختلفة أو استخدم خاصية البحث المتقدم</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* five section */}
            <section>
                {/* green div */}
                <div className="bg-mainColor relative z-10 h-56 flex flex-row items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 absolute start-0 bottom-6">
                        <img src={logoStart} alt="min-logo" loading='lazy' className="w-full object-contain" />
                    </div>
                    <div className="text-center">
                        <h1 className='text-4xl font-medium text-white'>جاهز للبدء؟</h1>
                        <button className='bg-white w-2xs py-4 mt-4 rounded-lg text-center cursor-pointer text-mainColor flex flex-row items-center justify-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-mainColor"><path d="m21 21-4.34-4.34" /><circle cx={11} cy={11} r={8} /></svg>
                            <span>ابدأ البحث الأن</span>
                        </button>
                    </div>
                    <div className="w-28 h-28 absolute end-0 top-0">
                        <img src={logoEnd} alt="min-logo-end" loading='lazy' className="w-full object-contain" />
                    </div>
                </div>

                {/* content */}
                <div className="flex flex-col gap-5 items-center px-4 md:px-8 lg:px-16 pt-14">
                    <header className='text-center'>
                        <h1 className='text-textColor font-bold text-3xl'>أكثر المنتجات مبيعا</h1>
                        <p className='text-paragraphTextColor text-xl leading-16'>منتجات مضافة حديثا من شركات موثوقة</p>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
                        {products.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))}
                    </div>

                    <div className="group">
                        <Link to="/" className='border border-mainColor rounded-lg px-10 py-2 w-fit bg-white group-hover:bg-mainColor cursor-pointer transition-colors ease-in-out duration-500'>
                            <span className='text-mainColor text-lg font-medium group-hover:text-white transition-colors ease-in-out duration-500'>عرض جميع المنتجات</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* sex section */}
            <section className='pt-16'>
                {/* green div */}
                <div className="bg-mainColor relative z-10 py-16 px-4 md:px-8 lg:px-16 flex flex-row items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 absolute start-0 bottom-6">
                        <img src={logoStart} alt="min-logo" loading='lazy' className="w-full object-contain" />
                    </div>
                    <div className="text-center flex flex-col gap-5">
                        <header className='text-center'>
                            <h1 className='text-white font-bold text-4xl'>أضف شركتك إلى <span className='text-secondaryTextColor'>صناعة سعودية اليوم!</span></h1>
                            <p className='text-white text-xl leading-16'>انضم إلى آلاف الشركات الموثقة واحصل على عملاء جدد
                                من جميع أنحاء المملكة</p>
                        </header>

                        {/* buttons */}
                        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 justify-center gap-5">
                            <button className='bg-white/30 text-white md:w-60 lg:w-2xs py-4 rounded-lg text-center cursor-pointer flex flex-row items-center justify-center gap-2'>
                                <img src="/gold-img/Users.png" alt="Users" className='w-5 h-5 mt-1' />
                                <span className='text-lg'>عملاء جدد يومياً</span>
                            </button>
                            <button className='bg-white/30 text-white md:w-60 lg:w-2xs py-4 rounded-lg text-center cursor-pointer flex flex-row items-center justify-center gap-2'>
                                <img src="/gold-img/star.png" alt="star" className='w-5 h-5 mt-1' />
                                <span className='text-lg'>تقييمات العملاء</span>
                            </button>
                            <button className='bg-white/30 text-white md:w-60 lg:w-2xs py-4 rounded-lg text-center cursor-pointer flex flex-row items-center justify-center gap-2'>
                                <img src="/gold-img/CheckCircle.png" alt="CheckCircle" className='w-5 h-5 mt-1' />
                                <span className='text-lg'>ملف تجاري شامل</span>
                            </button>
                            <button className='bg-white text-mainColor md:w-60 lg:w-2xs py-4 flex flex-row gap-2 items-center justify-center rounded-lg text-center cursor-pointer md:col-span-3 md:mx-auto'>
                                <img src="Plus.png" alt="Plus" className='w-5 h-5 mt-1' />
                                <span className='text-lg'>سجل شركتك مجانا</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center text-white">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>13</span>
                                <span className='text-lg'>منطقة في المملكة</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>+50,000</span>
                                <span className='text-lg'>طلب خدمة شهرياً</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>4.9</span>
                                <span className='text-lg'>تقييم العملاء</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-2">
                                <span className='text-4xl font-bold text-secondaryTextColor'>+5,000</span>
                                <span className='text-lg'>شركة مسجلة</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-32 w-full bg-secondaryColor"></div>
            </section>
        </main>
    )
}
