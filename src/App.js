import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/Greet.js'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
function App() {
  return (
    <div className="App">
    {/* <MyComponent name="Bruce" heroName="Batman"><p>This is children props</p></MyComponent>
    <MyComponent name="Clark" heroName="Superman">

      <button>Click Here</button>
    </MyComponent>
    <MyComponent name="Heath" heroName="Joker"></MyComponent> */}
     {/* <Welcome name="Bruce" heroName="Batman"></Welcome> 
     <Welcome name="Clark" heroName="Superman"></Welcome> 
    <Welcome name="Heath" heroName="Joker"></Welcome>
     */}
    {/* <Hello></Hello> */}

     <Counter/>
    <Message></Message>
    
    </div>
  );
}

export default App;
