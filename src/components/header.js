'use client';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (<header className="pt-12 sm:pt-16 mx-auto max-w-2xl lg:max-w-7xl">
        <div className="">
            <div
                className="relative flex justify-between group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
                <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                    <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                    <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                    <div
                        className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
                    <div
                        className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
                </div>
                <div className="relative flex gap-6">
                    <div className="py-3 group/item relative">
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <Link href={'/'} title={'На главную'}
                              className={'flex gap-2 items-center text-xl lg:gap-4 text-black'}>
                            <Image src={'/logo.webp'} alt={'Лесная мастерская logo'} width={32} height={32}/> Лесная мастерская
                        </Link>
                    </div>
                </div>
                <nav className="relative hidden lg:flex">
                    <div className="relative flex group/item relative">
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <Link href={'/#catalog'}
                              className={'flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%] transition-all duration-[.2s]'}>Изделия</Link>
                    </div>
                    <div className="relative flex group/item relative">
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <Link href={'/#about'}
                              className={'flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%] transition-all duration-[.2s]'}>О мастерской</Link>
                    </div>
                    <div className="relative flex group/item relative">
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <Link href={'/#process'}
                              className={'flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%] transition-all duration-[.2s]'}>Процесс</Link>
                    </div>
                    <div className="relative flex group/item relative">
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <Link href={'/#faq'}
                              className={'flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/[2.5%] transition-all duration-[.2s]'}>Частые
                            вопросы</Link>
                    </div>
                    <div className="relative flex group/item relative">
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="absolute size-[15px] fill-black/10 -top-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <svg viewBox="0 0 15 15" aria-hidden="true"
                             className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2">
                            <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z"></path>
                        </svg>
                        <Link href={'tel:+79139884370'} target={'_blank'}
                              className={'inline-flex items-center justify-center px-4 py-4 rounded-full bg-green-700 text-white shadow-md font-medium hover:opacity-90 transition-all duration-[.2s]'}>+7 (913) 988-43-70</Link>
                    </div>
                </nav>
                <MobileMenuBtn/>
            </div>
        </div>
        <MobileMenu/>
    </header>);
}

export function MobileMenuBtn() {
    return (<button
        className="flex size-12 items-center justify-center self-center rounded-lg cursor-pointer transition-all duration-[.2s] hover:bg-black/5 lg:hidden"
        aria-label="Открыть меню" type="button" onClick={(e) => {
        mobileMenu.hidden = false;
        e.currentTarget.hidden = true;
    }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
             aria-hidden="true" data-slot="icon" className="size-6">
            <path
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"></path>
        </svg>
    </button>);
}

export function MobileMenu() {
    return (<div id="mobileMenu" hidden>
        <div className="flex flex-col gap-6 py-4">
            <Link href={'/#catalog'} className={'text-base font-medium text-gray-950'}>Изделия</Link>
            <Link href={'/#about'} className={'text-base font-medium text-gray-950'}>О мастерской</Link>
            <Link href={'/#process'} className={'text-base font-medium text-gray-950'}>Процесс</Link>
            <Link href={'/#faq'} className={'text-base font-medium text-gray-950'}>Частые вопросы</Link>
        </div>
    </div>);
}