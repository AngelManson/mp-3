import {useEffect, useState} from "react";

export default function useChangeColor(output: string){
    const [color, setColor] = useState<string>("black");

    useEffect(() => {
        if (output == "Output" || output == "Undefined"){
            setColor("black");
        } else {
            setColor((Number(output) >= 0) ? "black" : "red");
        }
    }, [output]);

    return color
}