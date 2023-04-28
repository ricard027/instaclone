import { useEffect, useState } from 'react'

export const useSlidesPreview = () => {
  const [qtdSlidePreview, setQtdSlidePreview] = useState(8)

  const UpdateSlidePreview = () => {
    const windowWidth = window.innerWidth
    const mobileWidth = 768

    if (windowWidth < mobileWidth) {
      setQtdSlidePreview(6)
    } else {
      setQtdSlidePreview(8)
    }
  }

  useEffect(() => {
    UpdateSlidePreview()

    const handleResize = () => {
      UpdateSlidePreview()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [qtdSlidePreview])

  return { qtdSlidePreview }
}
