import { Link } from "react-router-dom";
import Buildings from "../../assets/products/Buildings.webp";
import ShoppingCart from "../../assets/products/ShoppingCart.webp";

interface ProductProps {
    img: string;
    title: string;
    description: string;
    company: string;
    category: string;
    location: string;
    price: string;
}

export default function ProductCard({
    img,
    title,
    description,
    company,
    category,
    location,
    price,
}: ProductProps) {
    return (
        <div className="group border border-mainColor rounded-lg overflow-hidden">
            {/* img */}
            <div className="w-full bg-gray-100 flex items-center justify-center h-64">
                <div className="w-52 h-52 flex items-center justify-center">
                    <img
                        src={img}
                        alt={title}
                        loading="lazy"
                        className="w-full object-contain group-hover:scale-110 transition-all ease-in-out duration-500"
                    />
                </div>
            </div>

            {/* information */}
            <div className="flex flex-col gap-4 px-4 py-2 h-1/2">
                <header>
                    <h1 className="text-textColor font-bold text-xl">{title}</h1>
                    <p className="text-paragraphTextColor text-xl">{description}</p>
                </header>

                <div className="bg-mainColor/25 flex items-center justify-center gap-1 w-fit rounded-2xl px-2 py-1">
                    <img src={Buildings} alt="Buildings" loading="lazy" />
                    <span className="text-mainColor">{company}</span>
                </div>

                <div className="flex flex-col text-paragraphTextColor">
                    <div className="flex flex-row justify-between">
                        <span>{category}</span>
                        <span className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 28 28"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-paragraphTextColor"
                            >
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx={12} cy={10} r={3} />
                            </svg>
                            {location}
                        </span>
                    </div>

                    <span className="text-xl font-bold text-mainColor">{price}</span>
                </div>

                <div className="flex flex-row justify-between gap-5 w-full">
                    <Link
                        to="/productDetails"
                        className="bg-white w-full py-2 text-center rounded-lg border border-mainColor text-mainColor hover:bg-mainColor hover:text-white transition-colors ease-in-out duration-500"
                    >
                        عرض التفاصيل
                    </Link>
                    <Link
                        to="/chart"
                        className="bg-mainColor w-full flex items-center justify-center gap-1 py-2 rounded-lg border border-mainColor text-mainColor"
                    >
                        <img src={ShoppingCart} alt="ShoppingCart" loading="lazy" className="w-5 h-5 mb-1" />
                        <span className="text-white">أضف إلى السلة</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

import applePhone from "../../assets/products/apple-phone.webp";
import books from "../../assets/products/books.webp";
import couch from "../../assets/products/couch.webp";
import electronic from "../../assets/products/electronic.webp";
import madicen from "../../assets/products/madicen.webp";
import shopCategory from "../../assets/products/shop-categosfdry-image.webp";

export const products = [
    {
        img: shopCategory,
        title: "زيت الطبخ الطبيعي",
        description: "زيت طبخ طبيعي عالي الجودة من أفضل المصادر",
        company: "شركة مصنع الغذاء الطبيعي",
        category: "الغذاء والمشروبات",
        location: "الخبر",
        price: "25.99 ر.س",
    },
    {
        img: madicen,
        title: "منتج دوائي",
        description: "أدوية موثوقة من مصادر معتمدة",
        company: "شركة الأدوية الوطنية",
        category: "الصحة والدواء",
        location: "الرياض",
        price: "99.99 ر.س",
    },
    {
        img: applePhone,
        title: "هاتف آيفون",
        description: "أحدث إصدارات الهواتف الذكية",
        company: "Apple",
        category: "الإلكترونيات",
        location: "جدة",
        price: "3999 ر.س",
    },
    {
        img: couch,
        title: "كنبة مودرن",
        description: "أثاث عصري بتصميم مميز",
        company: "شركة الأثاث الراقي",
        category: "الأثاث",
        location: "الدمام",
        price: "799 ر.س",
    },
    {
        img: electronic,
        title: "منتج إلكتروني",
        description: "أحدث الأجهزة الإلكترونية",
        company: "شركة الإلكترونيات",
        category: "إلكترونيات",
        location: "مكة",
        price: "199 ر.س",
    },
    {
        img: books,
        title: "كتاب تعليمي",
        description: "كتب مفيدة لتنمية المعرفة",
        company: "دار النشر العربية",
        category: "الكتب",
        location: "المدينة",
        price: "59.99 ر.س",
    },
];


