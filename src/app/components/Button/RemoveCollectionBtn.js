import styled from '@emotion/styled'
import React from 'react'
import { TrashIcon } from '@heroicons/react/solid';

function RemoveCollectionBtn({ onClick, widthFull }) {
  return (
    <Button onClick={onClick} widthFull={widthFull}>
      <TrashIcon style={{ width: '12px', height: "12px", color: '#fff' }} />
    </Button>
  )
}

const Button = styled.button(props => ({
  border: '1.5px solid rgba(46, 46, 46, 0.2)',
  outline: 'none',
  backgroundColor: '#cc0000',
  width: props.widthFull ? '100%' : '47%',
  height: '25px',
  padding: '5px 0',
  borderRadius: '5px',
  fontSize: '12px',
  margin: '8px 0'
}))

export default RemoveCollectionBtn