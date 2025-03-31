import Hero from '@/components/hero';
import Products from "@/components/products";
import About from '@/components/about';
import FAQ from '@/components/faq';
import PopupOrder from "@/components/popup-order";
import Process from "@/components/process";

export default function Home() {
    return (<>
        <Hero/>
        <Products/>
        <About/>
        <Process/>
        <FAQ/>
        <PopupOrder/>
    </>);
}