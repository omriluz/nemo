import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setFilter } from "../../store/actions/board.action";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { saveLabel } from "../../store/actions/label.action";


export const FilterMenu = ({ isFilterModalOpen, board }) => {
    const dispatch = useDispatch()
    const [currFilter, setCurrFilter] = useState({ txt: '', labels: board.labels })
    // const [filterLabels, setFilterLabels] = useState(null)

    useEffect(() => {
        onSetFilter()
        console.log('hhh');
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

    const setLabelChecked = (labelId) => {
        const [currLabel] = board.labels.filter(label => label.id === labelId)
        if (!currLabel.checked) currLabel.checked = true
        else currLabel.checked = false
        const labelIdx = board.labels.findIndex(label => labelId === label.id)
        board.labels[labelIdx] = currLabel
        const labels = board.labels
        setCurrFilter(() => ({ ...currFilter, labels }))
        console.log(currFilter);
        dispatch(setFilter(currFilter))
        dispatch(saveLabel(board._id, labels))
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
        <div>
            <p className="sub-title">Members</p>
        </div>
        <ul className="clean-list">
            {/* {board.members.map((member) => {
                    return (
                       <li >
                        1 
                       </li>
                    )
                })} */}
        </ul>
        <hr />
        <div>
            <p className="sub-title">
                Labels
            </p>
        </div>
        <ul className="labels-filter-list clean-list">
            {board.labels && board.labels.map((label) => {
                return (
                    <li key={label.id} className="labels-filter-preview">
                        <div className="label-filter-container" onClick={() => setLabelChecked(label.id)}>
                            {!label.checked && < MdCheckBoxOutlineBlank className="check-box-blank" />}
                            {label.checked && < MdCheckBox className="check-box-full" />}
                        </div>
                        <div className="label-preview-bg"
                            style={{ backgroundColor: label.color }}>
                            <span className="label-text">{label?.txt}</span>

                        </div>
                    </li>
                )
            })}
        </ul>


    </section>
}
