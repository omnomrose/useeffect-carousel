import Link from "next/link"
import { useState, useEffect } from "react";
import clickable from '@/styles/useEffectThree.module.css'

export default function useEffectThree() {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])
    // triggers useEffect to run only when number changes
    // whenever [number] changes, run useEffect

    return (
        <>

            <div className={clickable.body}>
                <div className={clickable.header}>
                    <Link className={clickable.link} href="/">Home
                    </Link>
                </div>
                <div className={clickable.main}>

                    <button className={clickable.button} onClick={() => setNumber(number + 1)}>
                        Click Me
                    </button>

                    <div className={clickable.title}>
                        useEffectThree
                    </div>
                    <div className={clickable.number}>
                        {value}
                    </div>

                </div>
            </div>
        </>
    )
}