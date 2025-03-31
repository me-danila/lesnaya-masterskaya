'use client';
import Link from "next/link";

export default function CookieAlert() {
    return (
        <div className="fixed bottom-[1rem] right-[1rem] z-20 max-w-3xs rounded-xl bg-white p-2 ring-1 ring-green-50"
             id={'cookieAlert'}>
            <div className="p-2">
                <h3 className="text-sm font-medium text-green-800">Мы используем <Link href={'/policy/'}
                                                                                       target={'_blank'} className={'underline'}>куки</Link>,
                    в&nbsp;интернете без&nbsp;них никак</h3>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green"
                     className="size-5 absolute top-[.5rem] right-[.5rem] cursor-pointer" id={'closeCookieAlert'}
                     onClick={(e) => {
                         cookieAlert.remove();
                     }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                </svg>
            </div>
        </div>)
}
