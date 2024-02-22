import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = (props) => {

    const { newItem, setNewItem, handleSubmit } = props;
    const inputRef = useRef();
    return (

        <div>
            <form className="addForm" onSubmit={handleSubmit}>
                <label className="addForm label" htmlFor="additem">Add Item</label>
                <input
                    type="text"
                    ref={inputRef}
                    className="addForm input"
                    autoFocus
                    id="additem"
                    placeholder="Enter item"
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button type="submit" aria-label="Add Item" onClick={() => inputRef.current.focus()}><FaPlus /></button>
            </form>
        </div>
    )
}

export default AddItem;