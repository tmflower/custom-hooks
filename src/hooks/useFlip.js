import { useState } from "react";

const useFlip = () => {
    const [flipped, setFlipped] = useState(true);
    const toggleFlipped = () => {
        setFlipped(flipped => !flipped);
    }
    return [flipped, toggleFlipped]
}

export default useFlip;