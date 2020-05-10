import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollToTop ({ select}) {
  useEffect(() => {
    return window.scrollTo(0, 0)
  }, [select])

  return (null)
}

export default withRouter(ScrollToTop)
