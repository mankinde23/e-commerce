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
            <React.Fragment>
                {/* <Navbar /> */}


                <div className='container'>

                    {
                        data?.map((item) => (

                            <div className='container1' onClick={() => handleClick(item.id)}>
                                <div className='random'> <img src={item.image} alt="" /> </div>
                                <p> {item.title}</p>
                                <p> {item.price}</p>
                            </div>
                        ))
                    }


                </div>
            </React.Fragment>


        </div>
    )
}

export default Home
