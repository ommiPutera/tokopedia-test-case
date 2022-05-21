import styled from '@emotion/styled';
import {
  ChevronDoubleLeftIcon, ChevronDoubleRightIcon,
  ChevronLeftIcon, ChevronRightIcon
} from '@heroicons/react/solid';
import React from 'react';

const paginate = (
  totalItems,
  currentPage,
  pageSize,
  maxPages
) => {
  let totalPages = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let startPage, endPage;
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }
  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
  return pages;
}

const maxPages = 4;

function Index({ total, currentPage, limit, onChangePage }) {
  const pages = paginate(total, currentPage, limit, maxPages);
  const totalPage = Math.ceil(total / limit);

  const viewPage = page => {
    if (page > 0 && page <= totalPage) onChangePage(page)
  }

  return (
    totalPage > 0 ?
      <ContainerUl>
        <PaginationItem
          disabled={currentPage <= 1}
          onClick={() => viewPage(1)}
          label={<ChevronDoubleLeftIcon style={{ width: '17px', height: "17px" }} />}
        />
        <PaginationItem
          disabled={currentPage <= 1}
          onClick={() => viewPage(currentPage - 1)}
          label={<ChevronLeftIcon style={{ width: '17px', height: "17px" }} />}
        />
        {
          pages.map((page, key) =>
            <PaginationItem
              key={page}
              active={currentPage === page}
              onClick={() => viewPage(page)}
              label={page}
            />
          )
        }
        <PaginationItem
          disabled={currentPage >= totalPage}
          onClick={() => viewPage(currentPage + 1)}
          label={<ChevronRightIcon style={{ width: '17px', height: "17px" }} />}
        />
        <PaginationItem
          disabled={currentPage >= totalPage}
          onClick={() => viewPage(totalPage)}
          label={<ChevronDoubleRightIcon style={{ width: '17px', height: "17px" }} />}
        />
      </ContainerUl>
      :
      null
  )
}

const PaginationItem = ({ disabled, active, onClick, label }) => {
  return (
    <ContainerLi>
      <Button
        active={active}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </Button>
    </ContainerLi>
  )
}

const ContainerUl = styled.div`
  margin: 20px 0 50px 0;
  display: flex;
  justify-content: center;
  
`

const ContainerLi = styled.div`
  margin: 0 6px;
`

const Button = styled.button(props => ({
  width: '30px',
  height: '30px',
  outline: 'none',
  border: 'none',
  borderRadius: '50%',
  padding: '3px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: '13px',
  fontWeight: 'bold',

  backgroundColor: props.active ? 'red' : '#fff',
  color: props.active ? '#fff' : '#3a3a3a',

  opacity: props.disabled && '0.2',
  cursor: 'pointer',
}))

export default Index