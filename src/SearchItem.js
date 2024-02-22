import React from 'react'

const SearchItem = (props) => {

    const { search, setSearch } = props;
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label className="addForm label" htmlFor="searchitem">Search Item</label>
                <input
                    type="text"
                    className="addForm input"
                    autoFocus
                    id="searchitem"
                    placeholder="Enter item to search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}



                />
            </form>
        </div>
    )
}

export default SearchItem