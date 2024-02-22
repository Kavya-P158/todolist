import { FaTrashAlt } from "react-icons/fa";

const ItemsList = (props) => {
    const { names, handleCheck, handleDelete } = props;
    return (

        <div>

            {
                names.length == 0 ? <h3>Your list is empty</h3> :
                    <ul>




                        {names.map((i) => (
                            <li className="item" key={i.id}>
                                <input
                                    type="checkbox"
                                    checked={i.checked}
                                    onChange={() => handleCheck(i.id)}
                                />
                                <label style={i.checked ? { textDecoration: "line-through" } : null} onDoubleClick={() => handleCheck(i.id)}> {i.item}</label>
                                <FaTrashAlt
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => handleDelete(i.id)}
                                />

                            </li>
                        ))}
                    </ul>
            }
        </div>
    )
}

export default ItemsList;