import { useState } from "react";
import axios from "axios";

const useAxios = (url) => {
    const [response, setResponse] = useState([]);
    
    const addData = async () => {
        // if extension is an empty string, PlayingCardList works fine
        let extension = "";
        // how can I assign the value of extension to another string, when one exists? 
        const res = await axios.get(`${url}${extension}`);
        setResponse(data => [...data, res.data]);
    }
    return [response, addData]
}

export default useAxios;