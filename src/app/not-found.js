'use client';
import Header from "@/components/header";
import Link from "next/link";

export default function NotFound() {
    return (<>
        <div className="relative mb-8">
            <div
                className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-green-50 from-38% via-green-100 via-70% to-green-200"></div>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <Header/>
                    <div className="pt-12 pb-16 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
                        <h1 className="font-display text-4xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[0.8] lg:text-9xl/[0.8]">
                            <span className="italic text-green-600">Упс.</span> Кажется, страница потерялась.
                        </h1>
                        <p className="mt-8 max-w-lg text-base/7 font-medium text-gray-950/75 sm:text-2xl/8">
                            Попробуйте начать поиск с главной
                        </p>
                        <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                            <Link href={"/"}
                                  className={'px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white hover:bg-gray-800'}>Вернуться
                                на главную страницу</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}