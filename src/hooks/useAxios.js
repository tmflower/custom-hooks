import { useState } from "react";
import axios from "axios";

const useAxios = (url) => {
    const [response, setResponse] = useState([]);
    
    const addData = async (extension) => {
        // if there is no extension, replace with empty string so that only base url is used
        if (!extension) {
            extension = "";
        }
        // if there is an extension, include this at the end of the base url when making axios request
        const res = await axios.get(`${url}${extension}`);
        setResponse(data => [...data, res.data]);
    }
    return [response, addData]
}

export default useAxios;