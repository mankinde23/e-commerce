import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Home = () => {
    const [data, setData] = useState(null)
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://fakestoreapi.com/products')
            setData(resp.data)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>


        </div>
    )
}

export default Home
