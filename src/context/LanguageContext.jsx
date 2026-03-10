import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const translations = {
    uz: {
        nav: {
            services: "Xizmatlar",
            projects: "Loyihalar",
            news: "Yangiliklar",
            contact: "Bog'lanish",
        },
        hero: {
            slogan: "SIFAT VA ISHONCH",
            title: "Biz Haqimizda",
            text1: "«L-R-B Construction» MCHJ qurilish-montaj ishlari bozorida mustahkam asosga ega bo’lgan va o’zining barcha kafolat majburiyatlarini bajarib keluvchi ishonchli kompaniya sifatida iz qoldirib kelmoqda. Bizning buyurtmachi va mijozlarimiz eng maqbul narxlarimiz, tez fursatda va yuqori sifali qurilish-montaj ishlarimizdan mamnundirlar.",
            text2: "Bugungi kunga kelib korxonamiz tomonidan ko'plab zamonaviy bino-inshoatlar, ishlab-chiqarish binolari, omborxonalar, biznes markazlar, savdo markazlari, yo'l qurulish va obodonlashtirish, ta'mirlash hamda ichimlik suvi ta’minoti tarmoqlarining keng asortimentli qurilish-montaj loyihlari bajarilagan.",
        },
        services: {
            title: "Xizmatlar",
            item1: "1. Metal konstruskiyalarni ishlab chiqarish va o'rnatish",
            item2: "2. Loyihalash va qurilish xujjatlarini tayyorlash",
            item3: "3. Bino va inshoatlarni qurish",
            item4: "4. Yo'l qurulishi va obodonlashtirish",
            item5: "5. Ta'mirlash",
            item6: "6. Injiner va komunikatsiya tarmoqlarini qurish",
        },
        showcase: {
            title: "Bizning Loyihalar",
            subtitle: "17 yildan buyon 300 dan oshiq loyihalar va mamnun mijozlar.",
            view_project: "Batafsil Ko'rish",
            about_project: "Loyiha Haqida",
            projects: {
                chinni: {
                    title: "Toshkent Chinni Zavodi Rekonstruksiyasi",
                    description: "Prezident Shavkat Mirziyoyev tashabbuslari asosida 1952-yilda tashkil etilgan tarixiy Toshkent chinni zavodining to'liq rekonstruksiyasi. Aloqabank tomonidan 87 milliard so'm qiymatidagi loyiha amalga oshirilib, 300 ta ish o'rni yaratildi. Zavodda yiliga 30 million dona oshxona idishlari, suvenirlar ishlab chiqariladi va ko'plab mamlakatlarga eksport qilinadi.",
                    category: "Sanoat Rekonstruksiyasi",
                    status: "Prezident tomonidan ochilgan"
                },
                world_bank: {
                    title: "World Bank Uzbekistan Markaziy Ofisi",
                    description: "Toshkent Biznes Markazining 13-15-qavatlarida joylashgan World Bank Uzbekistan ning markaziy ofisini qayta ta'mirlash va jihozlash ishlari",
                    category: "Ofis Ta'mirlash",
                    status: "Tugallangan"
                },
                commerce: {
                    title: "Tijorat Majmuasi Qurilishi",
                    description: "Zamonaviy tijorat majmuasining to'liq qurilishi va jihozlanishi. Loyiha eng yuqori sifat standartlariga muvofiq amalga oshirildi.",
                    category: "Tijorat Qurilishi",
                    status: "Tugallangan"
                },
                modern: {
                    title: "Zamonaviy Loyiha",
                    description: "Zamonaviy arkitektura va dizayn bilan yaratilgan loyiha. Loyihada eng yangi texnologiyalar va yuksak sifat standartlari qo'llanildi.",
                    category: "Zamonaviy Qurilish",
                    status: "Tugallangan"
                },
                water: {
                    title: "Andijon viloyati Shahrixon tumani Karnaychi MFY xududida ichimlik suvi tarmog‘i va suv qudug‘i qurilishi",
                    description: "Andijon viloyati Shahrixon tumani Karnaychi MFY xududida aholini toza ichimlik suvi bilan ta'minlash maqsadida yangi suv tarmog'i va suv qudug'i qurilishi loyihasi muvaffaqiyatli amalga oshirildi.",
                    category: "Suv Ta'minoti",
                    status: "Tugallangan"
                },
                iib: {
                    title: "Toshkent shahar IIB huzuridagi Qo'riqlash bosh boshqarmasi",
                    description: "O'zbekiston Respublikasi Ichki Ishlar Boshqarmasi Toshkent shahar IIB huzuridagi Toshkent shaxar qo'riqlash bosh Boshqarmasi Davlat Muassasida korxonamiz tomonidan bajarilgan obodonlashtirish ishlari. Loyiha doirasida hududni ko'kalamzorlashtirish, zamonaviy landshaft dizayni va infratuzilmani yaxshilash ishlari amalga oshirildi. Ushbu muassasaga O'zbekiston Respublikasi Prezidenti Shavkat Miromonovich Mirziyoyev tashrif buyurganlar.",
                    category: "Obodonlashtirish",
                    status: "Prezident tashrifi"
                },
                hydrometsentr: {
                    title: "Toshkent shahar Gidrometsentr massividagi kottejlar",
                    description: "Toshkent shahar Gidrometsentr massivida korxonamiz tomonidan 7 dona kottej qurib o'z egalariga topshirildi. 3 ta urevendan iborat ushbu kottejlar zamonaviy va minimalizm yo'nalishida qurildi. Korxonamiz tomonidan 0 dan boshlab kalitlarni tayyor holatda topshirishgacha bo'lgan vazifalarni a'lo darajada bajardi. Jami 2200 kv.metrdan iborat yashash kompleksi barcha kommunikatsiya tarmoqlariga ulab berildi. Tashqi va ichki pardozlash va mebel jihozlari bilan topshirildi.",
                    category: "Turar-joy qurilishi",
                    status: "Tugallangan"
                }
            }
        },
        footer: {
            connect: "Biz bilan bog'lanish",
        }
    },
    en: {
        nav: {
            services: "Services",
            projects: "Projects",
            news: "News",
            contact: "Contact",
        },
        hero: {
            slogan: "QUALITY AND TRUST",
            title: "About Us",
            text1: "«L-R-B Construction» LLC has been leaving its mark as a reliable company that has a solid foundation in the construction and installation market and fulfills all its warranty obligations. Our customers and clients are satisfied with our most reasonable prices, timely and high-quality construction and installation work.",
            text2: "To date, our company has completed a wide range of construction and installation projects of modern buildings, production facilities, warehouses, business centers, shopping malls, road construction and landscaping, repair and drinking water supply networks.",
        },
        services: {
            title: "Services",
            item1: "1. Production and installation of metal structures",
            item2: "2. Design and preparation of construction documents",
            item3: "3. Construction of buildings and structures",
            item4: "4. Road construction and landscaping",
            item5: "5. Renovation",
            item6: "6. Construction of engineering and communication networks",
        },
        showcase: {
            title: "Our Projects",
            subtitle: "More than 300 projects and satisfied customers over 17 years.",
            view_project: "View Details",
            about_project: "About Project",
            projects: {
                chinni: {
                    title: "Tashkent Porcelain Factory Reconstruction",
                    description: "A complete reconstruction of the historical Tashkent porcelain factory, established in 1952 based on the initiatives of President Shavkat Mirziyoyev. The project worth 87 billion soums was implemented by Aloqabank, creating 300 jobs. The factory produces 30 million pieces of tableware and souvenirs annually and exports to many countries.",
                    category: "Industrial Reconstruction",
                    status: "Opened by President"
                },
                world_bank: {
                    title: "World Bank Uzbekistan Central Office",
                    description: "Renovation and equipping of the central office of World Bank Uzbekistan located on the 13-15th floors of the Tashkent Business Center.",
                    category: "Office Renovation",
                    status: "Completed"
                },
                commerce: {
                    title: "Commercial Complex Construction",
                    description: "Full construction and equipment of a modern commercial complex. The project was carried out in accordance with the highest quality standards.",
                    category: "Commercial Construction",
                    status: "Completed"
                },
                modern: {
                    title: "Modern Project",
                    description: "A project created with modern architecture and design. The latest technologies and high quality standards were used in the project.",
                    category: "Modern Construction",
                    status: "Completed"
                },
                water: {
                    title: "Construction of drinking water network and water well in Karnaychi neighborhood of Shahrixon district, Andijan region",
                    description: "A new water network and water well construction project was successfully implemented in the Karnaychi neighborhood of Shahrixon district, Andijan region, to provide the population with clean drinking water.",
                    category: "Water Supply",
                    status: "Completed"
                },
                iib: {
                    title: "Main Security Department of Tashkent City Police",
                    description: "Landscaping work performed by our company at the State Institution of the Main Security Department of the Tashkent City Police Department under the Ministry of Internal Affairs of the Republic of Uzbekistan. Within the framework of the project, greening of the area, modern landscape design and infrastructure improvement works were carried out. President of the Republic of Uzbekistan Shavkat Miromonovich Mirziyoyev visited this institution.",
                    category: "Landscaping",
                    status: "Presidential Visit"
                },
                hydrometsentr: {
                    title: "Cottages in the Hydrometeorological Center block of Tashkent",
                    description: "In the Hydrometeorological Center block of Tashkent city, our company built 7 cottages and handed them over to their owners. These 3-level cottages were built in a modern and minimalist style. Our company performed the tasks excellently from scratch to turnkey handover. The residential complex with a total area of 2200 square meters was connected to all communication networks. It was handed over with exterior and interior finishing and furniture.",
                    category: "Residential Construction",
                    status: "Completed"
                }
            }
        },
        footer: {
            connect: "Contact Us",
        }
    },
    ru: {
        nav: {
            services: "Услуги",
            projects: "Проекты",
            news: "Новости",
            contact: "Контакт",
        },
        hero: {
            slogan: "КАЧЕСТВО И ДОВЕРИЕ",
            title: "О нас",
            text1: "ООО «L-R-B Construction» зарекомендовало себя как надежная компания, имеющая прочный фундамент на рынке строительно-монтажных работ и выполняющая все свои гарантийные обязательства. Наши заказчики и клиенты довольны нашими наиболее приемлемыми ценами, своевременным и качественным выполнением строительно-монтажных работ.",
            text2: "На сегодняшний день нашей компанией реализован широкий спектр строительно-монтажных проектов современных зданий, производственных объектов, складов, бизнес-центров, торговых центров, дорожного строительства и благоустройства, ремонта и сетей питьевого водоснабжения.",
        },
        services: {
            title: "Услуги",
            item1: "1. Изготовление и монтаж металлоконструкций",
            item2: "2. Проектирование и подготовка строительной документации",
            item3: "3. Строительство зданий и сооружений",
            item4: "4. Дорожное строительство и благоустройство",
            item5: "5. Ремонт",
            item6: "6. Строительство инженерных и коммуникационных сетей",
        },
        showcase: {
            title: "Наши проекты",
            subtitle: "Более 300 проектов и довольных клиентов за 17 лет.",
            view_project: "Подробнее",
            about_project: "О проекте",
            projects: {
                chinni: {
                    title: "Реконструкция Ташкентского фарфорового завода",
                    description: "Полная реконструкция исторического Ташкентского фарфорового завода, основанного в 1952 году по инициативе Президента Шавката Мирзиёева. Стоимость проекта 87 миллиардов сумов, реализован «Алокабанком», создано 300 рабочих мест. Завод ежегодно производит 30 миллионов штук посуды и сувениров и экспортирует во многие страны.",
                    category: "Промышленная реконструкция",
                    status: "Открыт Президентом"
                },
                world_bank: {
                    title: "Центральный офис Всемирного банка в Узбекистане",
                    description: "Работы по ремонту и оснащению центрального офиса Всемирного банка в Узбекистане, расположенного на 13-15 этажах Ташкентского бизнес-центра.",
                    category: "Ремонт офиса",
                    status: "Завершено"
                },
                commerce: {
                    title: "Строительство коммерческого комплекса",
                    description: "Полное строительство и оснащение современного коммерческого комплекса. Проект реализован в соответствии с самыми высокими стандартами качества.",
                    category: "Коммерческое строительство",
                    status: "Завершено"
                },
                modern: {
                    title: "Современный проект",
                    description: "Проект создан с использованием современной архитектуры и дизайна. В проекте использованы новейшие технологии и высокие стандарты качества.",
                    category: "Современное строительство",
                    status: "Завершено"
                },
                water: {
                    title: "Строительство сети питьевого водоснабжения и колодца в махалле Карнайчи Шахриханского района Андижанской области",
                    description: "Успешно реализован проект строительства новой водопроводной сети и колодца в махалле Карнайчи Шахриханского района Андижанской области в целях обеспечения населения чистой питьевой водой.",
                    category: "Водоснабжение",
                    status: "Завершено"
                },
                iib: {
                    title: "Главное управление охраны при ГУВД города Ташкента",
                    description: "Работы по благоустройству, выполненные нашей компанией в Государственном учреждении Главного управления охраны при ГУВД города Ташкента МВД Республики Узбекистан. В рамках проекта проведены работы по озеленению территории, современному ландшафтному дизайну и улучшению инфраструктуры. Данное учреждение посетил Президент Республики Узбекистан Шавкат Миромонович Мирзиёев.",
                    category: "Благоустройство",
                    status: "Визит Президента"
                },
                hydrometsentr: {
                    title: "Коттеджи в массиве Гидрометеоцентра города Ташкента",
                    description: "В массиве Гидрометеоцентра города Ташкента наша компания построила и передала владельцам 7 коттеджей. Эти 3-х уровневые коттеджи были построены в современном и минималистичном стиле. Наша компания отлично выполнила все задачи с нуля до сдачи под ключ. Жилой комплекс общей площадью 2200 квадратных метров был подключен ко всем коммуникационным сетям. Он был сдан с внешней и внутренней отделкой и мебелью.",
                    category: "Жилое строительство",
                    status: "Завершено"
                }
            }
        },
        footer: {
            connect: "Связаться с нами",
        }
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "uz";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
