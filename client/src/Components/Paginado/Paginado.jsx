import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage } from '../../Redux/actions';

export default function Paginado({cantPages}) {
    const {pagActual} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function nextP(){
        dispatch(nextPage());
    }

    function prevP(){
        dispatch(prevPage());
    }

  return (
    <div>
        {pagActual > 1 ? (
        <div>
          <button onClick={prevP}>PREV</button>
          <p>{pagActual - 1}</p>
        </div>
      ) : null}

      <h3>{pagActual}</h3>
      {pagActual < cantPages ? (
        <div>
          <p>{pagActual + 1}</p>
          <button onClick={nextP}>NEXT</button>
        </div>
      ) : null}
    </div>
  )
}
