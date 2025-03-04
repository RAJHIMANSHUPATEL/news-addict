import React from 'react'
import { useGlobalContext } from './context'

const Pagination = () => {
    const {getPrevPage, getNextPage, page, nbPages} = useGlobalContext();
    return (
        <>
            <div className="pagination-btn">
                <button onClick={()=> getPrevPage()}>PREV</button>
                <p>
                    {page} of {nbPages}
                </p>
                <button onClick={()=> getNextPage()}>NEXT</button>
            </div>
        </>
    )
}

export default Pagination