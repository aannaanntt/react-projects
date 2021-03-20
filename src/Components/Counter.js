import Readct,{Component} from 'react'


export default class Counter extends Component {
    
    constructor(props){
        super(props)
        this.state={
            count:0

        }
    }
        increament() {
        //    this.setState({

        //     count: this.state.count+1

        //    },()=>console.log('call back value'+this.state.count))

        this.setState((previousState)=>({
            count : previousState.count+1
        }))

          
        }
        increamentFive(){
            this.increament();
            this.increament();
            this.increament();
            this.increament();
            this.increament();
        }
    

    
    render(){
        return(
            <div>
                count-{this.state.count}
                <button onClick={()=>{this.increamentFive()}}>INCREASE</button>
            </div>
        )
    }
}
