import styled from '@emotion/styled'
import React from 'react'
import { TrashIcon } from '@heroicons/react/solid';

function RemoveCollectionBtn({ onClick }) {
  return (
    <Button onClick={onClick}>
      <TrashIcon style={{ width: '14px', height: "14px", color: '#fff' }} />
    </Button>
  )
}

const Button = styled.button`
  position: absolute;
  border: 1.5px solid rgba(46, 46, 46, 0.2);
  outline: none;
  background-color: red;
  width: 28px;
  height: 28px;
  padding: 5px 0;
  border-radius: 5px;
  font-size: 12px;
  top: 0;
  left: 0;
`

export default RemoveCollectionBtn