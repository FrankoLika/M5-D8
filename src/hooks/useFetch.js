import { useState, useEffect } from "react"

const useFetch = (endpoint) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState("")

    const handleFetch = async () => {
        setLoading(true);
        try {
            const data = await fetch(endpoint,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWU3MWIxNGE1MTAwMTQ2NjQwMDciLCJpYXQiOjE2ODM1NDE2MTUsImV4cCI6MTY4NDc1MTIxNX0.qZmR6zdxxm7qIz-vaOuZI6eaxpo2U-qQILNeRmPcsRY"
                    },
                });
            const response = await data.json();
            setData(response);
            setLoading(false);
        } catch (error) {
            if (error) setError("Errore generico")
        }
    }
    useEffect(() => {
        handleFetch()
    }, [endpoint])
    return { data, loading, error }
}

export default useFetch