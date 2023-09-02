import React from "react";


let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize) / 200

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <button className={currentPage === p}
                    onClick={() => { onPageChanged(p) }}>{p}</button>

            })}
        </div>

    )
}
export default Paginator