import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import List from './List';

const _user = {
  nome: "alessandro",
  cognome: "grassi",
  residenza: {
    indirizzo: "asdads",
    citta: "arco",
  },
  acquisti: [
    {
      articolo: "pane",
      prezzo: 20,
      quantita: 2,
    },
    {
      articolo: "latte",
      prezzo: 20,
      quantita: 2,
    }
  ]
}


function App(props) {
  const [todoList, setTodoList] = useState([])
  const [doneList, setDoneList] = useState([])

  const move = (from, index) => {
    const todoTmp = [...todoList]
    const doneTmp = [...doneList]
    if (from === "DONE") {
      const element = doneList[index];
      setDoneList(doneTmp.filter((item, i) => { return i !== index }))
      todoTmp.push(element)
      setTodoList(todoTmp);
    } else if (from === "TODO") {
      const element = todoList[index];
      setTodoList(todoTmp.filter((item, i) => { return i !== index }))
      doneTmp.push(element)
      setDoneList(doneTmp);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <Router>
          <Route path="/">
            <Link to="/list">List</Link>
          </Route>
          <Route exact path="/list">
            <List title="TODO" list={todoList} setList={setTodoList} handleMove={move} />
            <List title="DONE" list={doneList} setList={setDoneList} handleMove={move} />
          </Route>
      </Router>
    </div>
  )
}

/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "ciao mondo",
      username: "loading...",
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/").then(response => {
      response.json().then(json => {
        this.setState({
          username: json.results[0].name.first
        })
      })
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillUnmount(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.text}</p>
          <button onClick={() => { this.setState({ text: "ciao italia" }) }}>change state</button>
          <p>{this.state.username}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}*/

export default App;
