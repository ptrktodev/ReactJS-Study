import React from 'react'

const Memo = () => {
  console.log('memo renderizou')
  return (
    <div>
      <h1>Não renderizou nvmnt</h1>
    </div>
  )
}

export default React.memo(Memo)
