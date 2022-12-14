import { useState, useEffect } from 'react'
import axios from 'axios'
const useAxios = (url) => {
  const [next, setNext] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [list, setList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setNext(response.data.next)
        setList((prev) => [...new Set([...prev, ...response?.data?.results])])
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { next, loading, error, list }
}

export default useAxios
