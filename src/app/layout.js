import "@/app/globals.css";
import Footer from "@/components/footer";
import CookieAlert from "@/components/cookie-alert";

export const metadata = {
    metadataBase: new URL('https://lesnaya-masterskaya.ru'),
    title: "Изделия и торцевые доски из ценных пород древесины — Лесная мастерская",
    description: "Изделия и торцевые доски из ценных пород древесины",
    openGraph: {
        locale: 'ru_RU',
        type: 'website',
        title: "Изделия и торцевые доски из ценных пород древесины — Лесная мастерская",
        description: "Изделия и торцевые доски из ценных пород древесины",
        url: 'https://lesnaya-masterskaya.ru/'
    },
};

export default function RootLayout({children}) {
    return (<html lang="ru">
    <body className={`overflow-x-hidden antialiased`}>
    {children}
    <Footer/>
    <CookieAlert/>
    </body>
    </html>);
}
