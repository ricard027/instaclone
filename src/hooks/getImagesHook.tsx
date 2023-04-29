import axios from 'axios'
import { useEffect, useState } from 'react'

export const getImagesFromUnsplash = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: 'people',
          per_page: 20,
          collections: '938381'
        },
        headers: {
          Authorization: `Client-ID sKl5qQ6pmkWSrLji2FD55GcBGx1Arb2Te-wYMnfZn4g`
        }
      })
      const dataImages = await res.data.results
      setImages(dataImages)
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    void getImages()
  }, [])

  return { images }
}
