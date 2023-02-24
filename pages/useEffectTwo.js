import Link from "next/link"
import { useState, useEffect } from "react";

export default function useEffectOne() {

    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number, setNumber)
        setNumber(number + 50);

    }, [])
    // },[] allows it to run once when the page loads

    return (
        <>
            <Link href="/">Home</Link>
            <div>
                useEffectTwo
            </div>
            <div>
                {number}
            </div>
        </>
    )
}