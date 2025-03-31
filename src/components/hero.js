import Header from "@/components/header";
import {PopupShow} from "@/components/popup-order";
import Link from "next/link";

export default function Hero() {
    return (<div className="relative">
        <div
            className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset bg-linear-115 from-green-50 from-38% via-green-100 via-70% to-green-200"></div>
        <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <Header/>
                <div className="pt-12 pb-16 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
                    <h1 className="font-display text-4xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-6xl/[0.8] lg:text-9xl/[0.8]">
                        <span className="italic text-green-600">Лесная мастерская&nbsp;—</span> изделия из ценных пород
                        древесины
                    </h1>
                    <p className="mt-12 max-w-lg text-base/7 font-medium text-gray-950/75 sm:text-2xl/8">
                        Искусство и&nbsp;неповторимый стиль в&nbsp;каждом изделии для вашего дома. Изготовлено вручную,
                        в&nbsp;наличии и&nbsp;под заказ.
                    </p>
                    <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                        <Link href={'/#catalog'}
                              className={'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 hover:bg-gray-800'}>Каталог</Link>
                        <Link href={'/#process'}
                              className={'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-white/15 ring-1 shadow-md ring-[#D15052]/15 after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d] text-base font-medium whitespace-nowrap text-gray-950 data-disabled:bg-white/15 data-disabled:opacity-40 hover:bg-white/20 cursor-pointer'}>Процесс производства</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}