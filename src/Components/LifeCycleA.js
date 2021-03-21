import React ,{ Component} from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{

    constructor(props){
        super(props)

        this.state ={
            name:'Vishwas'
        }
        console.log('LifeCycleA constructor')

    }
        static getDerivedStateFromProps(props,state){
            console.log('LifeCycleA  getDerivedStateFromProps')
            return null;
        }
        componentDidMount(){
            console.log('componendt did mount')
        }
    render(){
        console.log('LifecycyleA render')
        return (
            <div>
                    LifeCycleA
                    <div>
                        <LifeCycleB/>
                    </div>
            </div>
        )
    }
}

export default LifeCycleA