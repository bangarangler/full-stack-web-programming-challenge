import { useState, useEffect } from 'react'
import axios from 'axios';

const useGetFactories = (url, initValue) => {
  const [data, setData] = useState(initValue)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async function() {
        try {
          setLoading(true)
          const response = await axios.get(url, {crossdomain:true})
          if (response.status === 200) {
            setData(response.data)
          }
        } catch (error) {
          throw error;
        } finally {
          setLoading(false)
        }
      };
      fetchData()
    }, [url])
    return { loading, data }
  }

export default useGetFactories;
