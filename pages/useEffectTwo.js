import Link from "next/link"
import { useState, useEffect } from "react";
import still from '@/styles/useEffectTwo.module.css'

export default function useEffectOne() {

    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number, setNumber)
        setNumber(number + 50);

    }, [])
    // },[] allows it to run once when the page loads

    return (
        <>
            <div className={still.body}>
                <div className={still.header}>
                    <Link className={still.link} href="/">Home</Link>
                </div>
                <div className={still.main}>
                    <div className={still.title}>
                        useEffectTwo
                    </div>
                    <div className={still.number}>
                        {number}
                    </div>
                </div>
            </div>
        </>
    )
}