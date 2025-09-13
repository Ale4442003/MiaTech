import { useRef } from "react";

export default function UncontrolledInputP2() {
    const inputElement = useRef(null);

    return (
        <div>
            <input
                type="text"
                ref={inputElement} 
                placeholder="Part 2: write"
            />
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    );
}
