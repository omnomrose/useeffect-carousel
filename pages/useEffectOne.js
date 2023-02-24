import Link from "next/link"
import { useState, useEffect } from "react";
import unlimited from '@/styles/useEffectOne.module.css'

export default function useEffectOne() {

    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number);
        setNumber(number + 1)
    })

    return (
        <>
            <div className={unlimited.body}>
                <div className={unlimited.header}>
                    <Link className={unlimited.link} href="/">Home</Link>
                </div>
                <div className={unlimited.main}>
                    <div className={unlimited.title}>
                        useEffectOne
                    </div>
                    <div className={unlimited.number}>
                        {number}
                    </div>
                </div>

            </div>

        </>
    )
}