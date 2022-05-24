import styled from '@emotion/styled'
import React from 'react'
import { PencilAltIcon } from '@heroicons/react/solid';

function EditCollectionBtn({ onClick }) {
  return (
    <Button onClick={onClick}>
      <PencilAltIcon style={{ width: '12px', height: "12px", color: '#fff' }} />
    </Button>
  )
}

const Button = styled.button`
  border: 1.5px solid rgba(46, 46, 46, 0.2);
  outline: none;
  background-color: #0e86d4;
  width: 47%;
  height: 25px;
  padding: 5px 0;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 8px;
`

export default EditCollectionBtn