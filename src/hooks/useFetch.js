import { useState, useEffect } from 'react'

function get (url, method) {
  const [data, setData] = useState(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((e) => setError(e))
      .finally(() => setReady(true))
  }, [])
  return data
}

function useFetch (url, method) {
  if (method === 'GET' || method === undefined) {
    return get(url)
  }
}
export default useFetch
