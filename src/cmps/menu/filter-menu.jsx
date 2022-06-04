import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFilter } from "../../store/actions/board.action";


export const FilterMenu = ({ isFilterModalOpen }) => {
    // let { filterBy } = useSelector((storeState) => storeState.boardModule)
    const dispatch = useDispatch()
    const [currFilter, setCurrFilter] = useState({ txt: '' })

    useEffect(() => {
        onSetFilter()
    }, [currFilter])

    const onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        console.log(field, value);
        setCurrFilter(() => ({ ...currFilter, [field]: value }))

    }

    const onSetFilter = () => {
        dispatch(setFilter(currFilter))
    }

    return <section className="filter-container" style={{ display: isFilterModalOpen }}>
        <p className="sub-title">Keyword</p>
        <div className="search-container">
            <input
                type="search"
                name="txt"
                placeholder="Enter a keyword..."
                value={currFilter.txt}
                onChange={onHandleChange}
            />

        </div>
        <p className="sub-info-title">Search cards, members, labels, and more.</p>
    </section>
}
