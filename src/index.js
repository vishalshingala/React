import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// const heading=<h1 className="site-heading">Hello Vishal How Are you?</h1>
// const heading = React.createElement('h1', { className: 'site-heading' }, 'Hello, React!')

// const name='Vishal';
// const heading1=<h1>Hello, {name}</h1>

// class App extends Component{
//     render(){
//         return(
//             <div className="App">
//                 <h1>Hello React Vishal Here !!</h1>
//             </div>
//         )
//     }
// }
ReactDOM.render(<App/>,document.getElementById('root'))
