import styled from '@emotion/styled'
import React from 'react'
import { TrashIcon } from '@heroicons/react/solid';

function RemoveCollectionBtn({ onClick }) {
  return (
    <Button onClick={onClick}>
      <TrashIcon style={{ width: '12px', height: "12px", color: '#fff' }} />
    </Button>
  )
}

const Button = styled.button`
  border: 1.5px solid rgba(46, 46, 46, 0.2);
  outline: none;
  background-color: #cc0000;
  width: 47%;
  height: 25px;
  padding: 5px 0;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 8px
`

export default RemoveCollectionBtn