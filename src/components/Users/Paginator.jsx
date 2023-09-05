import React, { useState } from "react";


let Paginator = ({ totalItemsCount, pageSize, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

	let portionCount = Math.ceil(pagesCount / portionSize);
	let [currentPortion, setCurrentPortion] = useState(1);
	let currentLeftBorder = (currentPortion - 1) * portionSize + 1;
	let currentRightBorder = currentPortion * portionSize;


    return <div>
        {
            currentPortion > 1
                ? <span>
                    <button onClick={() => {
                        onPageChanged(pages[0])
                        setCurrentPortion(1)
                    }}>toFirst</button>
                    <button onClick={() => {
                        currentPortion !== 1 && setCurrentPortion(currentPortion - 1)
                    }}> PREV </button>
                </span>
                : null
        }{
            pages
                .filter(p => currentLeftBorder <= p && p <= currentRightBorder)
                .map(p => (
                    <button
                        key={p}
                        onClick={(e) => { onPageChanged(p) }}> {p}
                    </button>
                ))
        }{
            currentPortion < portionCount
                ? <span>
                    <button onClick={() => {
                        currentPortion !== pagesCount && setCurrentPortion(currentPortion + 1)
                    }}> NEXT </button> <button onClick={() => {
                        onPageChanged(pages[pages.length - 1])
                        setCurrentPortion(portionCount)
                    }}>toLast</button>
                </span>
                : null
        }
    </div>
}
export default Paginator