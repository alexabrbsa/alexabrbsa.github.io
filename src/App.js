import logo from './logo.svg';
import './App.css';
function App() {
 return (
   <div className="App">
      <header>
       <ul className="header-nav">
         <li>Home</li>
         <li style={{ color: 'black' }}>Projects</li>
         <li style={{ color: 'black' }}>About</li>
       </ul>
     </header>
     <div className="content">
       <h1 style={{ color: 'blue' }}>Hey! I'm Alexa. </h1>
       <h1 style={{ color: 'black' }}>I'm a Cognitive Science student with a
background in Design & Interaction :)</h1>
     </div>
   </div>
); }
export default App;