import Carousel from "@/components/carousel";
import Link from "next/link";
import caro from '@/styles/CarouselPage.module.css'


export default function carouselPage() {

    return (
        <>
            <div className={caro.body}>
                <div className={caro.header}>
                    <Link className={caro.link} href="/">Home</Link>
                </div>
                <div className={caro.images}>
                    <Carousel />
                </div>
            </div>
        </>
    )
}