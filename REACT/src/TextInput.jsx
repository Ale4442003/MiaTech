import { useState } from "react";

export default function TextInput() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={value}           
                onChange={handleChange} 
                placeholder="Scrivi qualcosa..."
            />
            <p>Valore: {value}</p>
        </div>
    );
}
