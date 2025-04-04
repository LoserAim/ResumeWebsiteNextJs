"use client"

import {useEffect, useState} from 'react';
import axios from 'axios';

// TODO: will need to update to be a bit more dynamic, but for now will only get.
const useAxios = <TResponse>(url: string, method: string) => {
    const [data, setData] = useState<TResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});
    const params = {
        method: method.toUpperCase(),
        url: process?.env?.NEXT_PUBLIC_API_URL + url,
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(params)
                    .then((response) => {
                        return JSON.parse(response.data.body) as TResponse;
                    }).catch((error) => {
                        setError(error);
                        console.log(error)
                    })
                setData(response as TResponse);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return {
        data,
        loading,
        error
    };
};

export default useAxios;