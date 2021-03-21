import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/Greet.js'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import ChildComponent from './Components/ChildComponent'
import UserGreeting from './Components/UserGreeting'
import NameList from './Components/NameList'
import StyleSheet from './Components/StyleSheet'
import Inline from './Components/Inline'
import './appStyles.css'
import  styles from './appStyles.module.css'
import Form from './Components/Form'


function App() {
  return (
    <div className="App">
     {/* <MyComponent name="Bruce" heroName="Batman"><p>This is children props</p></MyComponent>
    <MyComponent name="Clark" heroName="Superman">

      <button>Click Here</button>
    </MyComponent>
    <MyComponent name="Heath" heroName="Joker"></MyComponent>  */}
     {/* <Welcome name="Bruce" heroName="Batman"></Welcome> 
     <Welcome name="Clark" heroName="Superman"></Welcome> 
    <Welcome name="Heath" heroName="Joker"></Welcome> */}

    {/* <FunctionClick/> */}

   {/* <EventBind></EventBind> */}

   {/* <ParentComponent></ParentComponent> */}

    {/* <UserGreeting></UserGreeting> */}
    {/* <NameList/> */}
    {/* <Hello></Hello> */}

     {/* <Counter/>*/}
     {/* <Message/> */}
    {/* <StyleSheet primary={true}></StyleSheet> */}
    {/* <Inline/> */}
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    
    <Form/>
    
    </div>
  );
}

export default App;
