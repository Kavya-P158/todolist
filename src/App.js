import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddItem from "./AddItem";
import SearchItem from './SearchItem';
import apifetch from "./apifetch";
function App() {
  const API_URL = "http://localhost:4000/items";
  const [names, setNames] = useState([])
  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log("before fetch")
        const data = await fetch(API_URL);
        if (!data.ok)
          throw Error("Data not received");

        console.log("After fetch")
        console.log(data)
        const resultitem = await data.json();
        console.log(resultitem)
        setNames(resultitem);
        setErrorMessage(null)
      }
      catch (err) {
        console.log("Error occured");
        setErrorMessage(err.message)
      }
      finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {

      (async () => await fetchData())()
    }, 2000);
  }, [])

  const addItem = async (item) => {

    const newid = names.length > 0 ? names[names.length - 1].id + 1 : 1;
    console.log(newid)
    const newobj = { newid, item, checked: false };
    console.log(newobj)
    const newitem = [...names, newobj]
    setNames(newitem);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(newobj)
    }

    const result = await apifetch(API_URL, options)
    if (result)
      setErrorMessage(result)
    // localStorage.setItem("todo_list", JSON.stringify(newitem))

  }
  const handleCheck = async (id) => {
    const temp = names.map((ite) =>

      ite.id === id ? { ...ite, checked: !ite.checked } : ite)
    console.log(temp)
    setNames(temp)
    const myItem = temp.filter((item) => item.id === id);
    console.log(myItem)
    const updateoptions = {
      method: "PATCH",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }

    const updateurl = `${API_URL}/${id}`
    console.log(names)

    const result = await apifetch(updateurl, updateoptions);

    if (result) setErrorMessage(result)
  }

  const handleDelete = async (id) => {

    const temp = names.filter((item) =>

      item.id !== id)
    setNames(temp);

    const deloptions = {
      method: "DELETE"
    }
    const deleteurl = `${API_URL}/${id}`
    const result = await apifetch(deleteurl, deloptions);
    if (result) setErrorMessage(result)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newItem);
    addItem(newItem)
    setNewItem('')



  }
  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}


      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {errorMessage && <p>{`Error: ${errorMessage}`} </p>}
        {isLoading && <p>Loading data...</p>}
        {!isLoading && !errorMessage &&
          <Content
            names={names.filter((it) => ((it.item).toLowerCase()).includes(search.toLowerCase()))}
            setNames={setNames}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />}
      </main>

      <Footer

        length={names.length}
      />
    </div>
  );
}

export default App;
