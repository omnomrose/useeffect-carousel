import Link from "next/link"
import { useState, useEffect } from "react";

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
            <Link href="/">Home</Link>
            <div>
                <button onClick={() => setNumber(number + 1)}>
                    Click Me
                </button>
            </div>
            <div>
                useEffectThree
            </div>
            <div>
                {value}
            </div>
        </>
    )
}