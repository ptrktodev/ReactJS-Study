import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Store | ${props.title}`
  }, [props])

  return <div></div>
}

export default Head
