import React from 'react'
import { useParams } from "react-router-dom";
// import { useAnime } from '../../../contexts/AnimeContext';

function Detail() {

  let params = useParams();
  let id = params.id;

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      Detail {id}
    </div>
  )
}

export default Detail