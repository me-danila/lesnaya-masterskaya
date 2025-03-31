import Image from "next/image";

export default function About() {
    return (<div className="mt-12 mx-auto max-w-2xl lg:max-w-7xl pb-16 px-6 lg:px-8" id="about">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="mt-2 text-3xl font-medium tracking-tighter text-pretty text-gray-950 sm:text-6xl">
                О мастерской
            </h2>
            <p className="mt-8 sm:mt-8 max-w-3xl sm:text-2xl font-medium text-gray-500">
                Мы&nbsp;&mdash; небольшая семейная мастерская, которая специализируется на&nbsp;создании эксклюзивных
                изделий из&nbsp;натуральной древесины ценных пород.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
                <div className="max-w-xl">
                    <p className="text-lg/6 text-gray-600">
                        Каждое изделие создаётся вручную, с&nbsp;тщательным вниманием к&nbsp;деталям и&nbsp;уважением
                        к&nbsp;уникальным
                        свойствам древесины. Мы&nbsp;не&nbsp;используем массовое производство&nbsp;&mdash; работаем
                        с&nbsp;каждым предметом
                        индивидуально.
                    </p>

                    <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium">• Только натуральные материалы</h3>
                            <p className="text-muted-foreground">Экологически чистая продукция</p>
                        </div>
                        <div>
                            <h3 className="font-medium">• Ручная работа</h3>
                            <p className="text-muted-foreground">Каждое изделие уникально</p>
                        </div>
                        <div>
                            <h3 className="font-medium">• Безопасная обработка</h3>
                            <p className="text-muted-foreground">Пищевые масла и воски</p>
                        </div>
                        <div>
                            <h3 className="font-medium">• Индивидуальный подход</h3>
                            <p className="text-muted-foreground">Выполняем заказы любой сложности</p>
                        </div>
                    </div>
                </div>

                <div className="max-lg:order-first max-lg:max-w-lg">
                    <div
                        className="overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                        <Image
                            alt=""
                            src="/products/1-1.webp"
                            className="block size-full object-cover"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}