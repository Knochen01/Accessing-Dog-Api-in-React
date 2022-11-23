  import React, { useEffect, useState } from "react";
  import axios from 'axios';

const useFetch = (url, options = {}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

// after the first render fetch our Data
useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const json = await res.json()
            setResponse(json)
        } catch(error) {
            setError(error)
        }
        setIsLoading(false)
    }
    fetchData()
}, [url])

// AXIOS Syntax---------------------------------------------
useEffect(() => {
    const fetchData = async () => {
     const res = await axios.get(url)
     try {
        const res = await axios.get(url)
        setResponse(res.data)
        setIsLoading(false)
    } catch(error) {
        setError(error)
        }
    } 
    fetchData()
 }, [url]) 

return { response, error, isLoading }

} 

export default useFetch;







