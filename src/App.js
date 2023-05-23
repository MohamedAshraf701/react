import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  useEffect(() => {
//     let headers = new Headers();

//   // headers.append('Content-Type', 'application/json');
//    headers.append('Accept', '*/*');

//   // headers.append('Access-Control-Allow-Origin', 'https://instagram.com');
//   // headers.append('Access-Control-Allow-Credentials', 'true');
//   headers.append("Access-Control-Allow-Origin", "*")
// headers.append("Access-Control-Allow-Methods", "GET")
//   headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   // headers.append('GET', 'POST', 'OPTIONS');
  fetch("https://instagram.com/p/CsbY0zPsfiR?__a=1&__d=dis", {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
    .then(res => res.json())
    .then(res => console.log("res: ", res))
    .catch(error => console.log("error: ", error  ))
//axios.get(`https://instagram.com/p/CsbY0zPsfiR?__a=1&__d=dis`).then((response) => response.json());
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;
