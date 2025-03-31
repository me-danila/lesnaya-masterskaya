'use client';
import Image from "next/image";


let currentProduct = null;

function openOrderModal(product) {
    window.currentProduct = product;
    const modal = document.querySelector('#order');
    const title = modal.querySelector('.product-title');
    const price = modal.querySelector('.product-price');
    if (product) {
        title.textContent = `Оформить заказ: ${product.title}`;
        price.textContent = `Стоимость: ${product.price}`;
    }
    modal.showModal();
}

function closeOrderModal() {
    const modal = document.querySelector('#order');
    modal.close();
    window.currentProduct = null;
}

export default function Products() {
    const products = [{
        id: 1,
        photo: '/products/1-1.webp',
        title: "Торцевая разделочная доска",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук", "380 х 275 х 40 мм", "2,96 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 2,
        photo: '/products/2-1.webp',
        title: "Торцевая разделочная доска",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех, Вишня", "400 х 290 х 40 мм", "3,42 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножкие"]
    }, {
        id: 3,
        photo: '/products/3-1.webp',
        title: "Торцевая разделочная доска",
        price: "2 500",
        tags: ["Дуб,Ясень, Бук, Орех, Вишня", "405 х 270 х 35 мм", "2,70 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 4,
        photo: '/products/4-1.webp',
        title: "Торцевая разделочная доска «Хаос»",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех, Вишня", "400 х 300 х 40 мм", "3,32 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 5,
        photo: '/products/5-1.webp',
        title: "Торцевая разделочная доска 3D",
        price: "2 500",
        tags: ["Орех, Ясень, Бук", "425 х 270 х 40 мм", "3,12 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 6,
        photo: '/products/6-1.webp',
        title: "Торцевая разделочная доска",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех, Вишня", "420 х 308 х 25 мм", "2,05 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 7,
        photo: '/products/7-1.webp',
        title: "Торцевая разделочная доска с гастроемкостью",
        price: "2 500",
        tags: ["Дуб, Орех", "370 х 295 х 65 мм", "2,70 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 8,
        photo: '/products/8-1.webp',
        title: "Торцевая разделочная доска с гастроемкостью",
        price: "2 500",
        tags: ["Дуб, Орех", "375 х 295 х 70 мм", "2,50 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 9,
        photo: '/products/9-1.webp',
        title: "Торцевая разделочная доска овальная",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук", "390 х 285 х 40 мм", "2,50 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 10,
        photo: '/products/10-1.webp',
        title: "Торцевая разделочная доска круглая",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех", "305 х 305 х 40 мм", "1,65 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 11,
        photo: '/products/11-1.webp',
        title: "Разделочная доска",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех, Вишня", "425 х 305 х 23 мм", "1,95 кг", "Минеральное масло", "Пчелиный воск", "Силиконовые ножки"]
    }, {
        id: 12,
        photo: '/products/12-1.webp',
        title: "Блюдце",
        price: "2 500",
        tags: ["Клен", "Ø 140 мм", "↑↓ 20 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 13,
        photo: '/products/13-1.webp',
        title: "Блюда большие",
        price: "2 500",
        tags: ["Массив клена", "Ø 255 – 270 мм", "↑↓ 35–45 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 14,
        photo: '/products/14-1.webp',
        title: "Тарелка глубокая",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук", "Ø 275 – 290 мм", "↑↓ 70–75 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 15,
        photo: '/products/15-1.webp',
        title: "Пиалы",
        price: "2 500",
        tags: ["Клен", "Различные формы", "Ø 110 – 115 мм", "↑↓ 45–60 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 16,
        photo: '/products/16-1.webp',
        title: "Ваза для фруктов",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех", "Ø 210 мм", "↑↓ 110 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 17,
        photo: '/products/17-1.webp',
        title: "Ваза для фруктов",
        price: "2 500",
        tags: ["Бук, Ясень", "300 х 230 х 120 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 18,
        photo: '/products/18-1.webp',
        title: "Вазочки плоские",
        price: "2 500",
        tags: ["Клен", "Ø 180 мм", "↑↓ 35 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 19,
        photo: '/products/19-1.webp',
        title: "Вазочка",
        price: "2 500",
        tags: ["Берёза шпальтированная", "Ø 115 мм", "↑↓ 60 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 20,
        photo: '/products/20-1.webp',
        title: "Ваза настольная декоративная",
        price: "2 500",
        tags: ["Орех, Вишня, Ясень, Дуб", "Ø 86 мм", "↑↓ 105 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 21,
        photo: '/products/21-1.webp',
        title: "Подставка под столовые приборы",
        price: "2 500",
        tags: ["Бук", "100 х 100 х 150 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 22,
        photo: '/products/22-1.webp',
        title: "Стакан и рюмка",
        price: "2 500",
        tags: ["Дуб, Бук, Ясень", "Ø 50–75 мм", "↑↓ 70–75 мм", "Минеральное масло", "Пчелиный воск", "Сегментное точение"]
    }, {
        id: 23,
        photo: '/products/23-1.webp',
        title: "Сахарница с крышкой",
        price: "2 500",
        tags: ["Дуб, Бук, Орех, Вишня", "Ø 115 мм", "↑↓ 105 мм", "Минеральное масло", "Пчелиный воск", "Хаотичный рисунок", "Сегментное точение"]
    }, {
        id: 24,
        photo: '/products/24-1.webp',
        title: "Солонки открытые и с крышкой",
        price: "2 500",
        tags: ["Дуб, Бук, Ясень, Орех", "Ø 65–75 мм", "↑↓ 55-60 мм", "Минеральное масло", "Пчелиный воск", "Сегментное точение"]
    }, {
        id: 25,
        photo: '/products/25-1.webp',
        title: "Олень рождественский",
        price: "2 500",
        tags: ["Ясень", "60 – 65 х 160 – 180 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 26,
        photo: '/products/26-1.webp',
        title: "Держатель для телефона",
        price: "2 500",
        tags: ["Разные породы дерева", "95 – 120 х 65 – 76 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 27,
        photo: '/products/27-1.webp',
        title: "Вазы",
        price: "2 500",
        tags: ["Дуб, Ясень, Бук, Орех", "Ø 60 – 75 мм", "↑↓ 130-200 мм", "Минеральное масло", "Пчелиный воск", "Массив и сегментное точение"]
    }, {
        id: 28,
        photo: '/products/28-1.webp',
        title: "Вазочка декоративная",
        price: "2 500",
        tags: ["Дуб, Бук, Ироко, Орех", "Ø 125 мм", "↑↓ 100 мм", "Минеральное масло", "Пчелиный воск"]
    }, {
        id: 29,
        photo: '/products/29-1.webp',
        title: "Подсвечник",
        price: "2 500",
        tags: ["Шпальтированная берёза", "Ø 55 мм", "↑↓ 100 мм", "Минеральное масло", "Пчелиный воск"]
    }];

    return (<div className={'bg-linear-to-b from-white from-50% to-gray-100 py-16 mb-16'}>
        <div className="px-6 lg:px-8" id="catalog">
            <h2 className="mx-auto mt-2 max-w-3xl text-3xl font-medium tracking-tighter text-pretty text-gray-950 text-center sm:text-5xl">
                Наши изделия
            </h2>
            <h3 className='mx-auto mt-4 mb-6 max-w-2xl text-center sm:text-xl'>
                Эксклюзивные изделия, сделанные вручную с&nbsp;любовью и&nbsp;вниманием к&nbsp;деталям и&nbsp;уникальным
                особенностям древесины
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                {products.map((product) => (<div
                    key={product.id}
                    className="m-2 grid grid-cols-1 rounded-4xl ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
                >
                    <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                        <div
                            className='flex flex-col justify-between rounded-3xl p-4 bg-white ring-1 shadow-2xl ring-black/5'>
                            <div>
                                <Image
                                    src={product.photo}
                                    alt={product.title}
                                    layout='responsive'
                                    width={100}
                                    height={100}
                                    className='rounded-2xl'
                                />
                                <p className='text-slate-400 text-sm mt-4 mb-2'>Арт. {product.id}</p>
                                <p className="text-2xl/6 text-gray-950/75">
                                    {product.title}
                                </p>
                                <div className="my-4">
                                    {product.tags.map((tag, index) => (<span key={index}
                                                                             className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full mr-2 mb-2 text-xs">{tag}</span>))}
                                </div>
                            </div>
                            <div className="mt-2 mb-4 px-2 flex items-center gap-4">
                                <button
                                    className="cursor-pointer inline-flex items-center grow justify-center px-4 py-2 rounded-full border border-transparent bg-green-700 shadow-md text-base font-medium whitespace-nowrap text-white hover:bg-green-800 transition-all duration-200"
                                    onClick={() => openOrderModal(product)}>
                                    Заказать
                                </button>
                                <div className="text-2xl text-gray-950">
                                    {product.price} ₽
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    </div>);
}