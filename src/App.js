import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Projects } from "./Projects";
import { Homepage } from "./Homepage";
import { About } from "./About";

// Import your other components here

class App extends Component {
    render() {
        return (<div>
            { /*Render your Router, Links, and Routes in here */}
            <Router>
                <React.Fragment>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                    <Route exact path="/" component = {Homepage}/>
                </React.Fragment>
            </Router>
            
        </div>
        );
    }
}

// function About() {
//     return <div>About me: i like pestoons</div>
// }

export default App;

// import React, { Component } from 'react';
// import './App.css';
// import { HashRouter as Router, Route, Link } from "react-router-dom";
// import { Projects } from './Projects';
// import { About } from './About';
// import { Homepage } from './Homepage';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//     render() {
//         return (
//             <Router>
//               <div className="container">
//                 <Link to="/">Home</Link>
//                 { ' ' }
//                 <Link to="/projects">Projects</Link>
//                 { ' ' }
//                 <Link to="/about">About</Link>
//                 <Route exact path="/" component={ Homepage } />
//                 <Route path="/projects" component={ Projects } />
//                 <Route path="/about" component={ About } />
//               </div>
//             </Router>
//             );
//     }
// }

// export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;