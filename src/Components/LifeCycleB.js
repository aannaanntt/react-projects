import React ,{ Component} from 'react';

class LifeCycleB extends Component{

    constructor(props){
        super(props)

        this.state ={
            name:'Vishwas'
        }
        console.log('LifeCycleb constructor')

    }
        static getDerivedStateFromProps(props,state){
            console.log('LifeCycleb  getDerivedStateFromProps')
            return null;
        }
        componentDidMount(){
            console.log('componendt did mount')
        }
    render(){
        console.log('Lifecycyleb render')
        return (
            <div>
                    LifeCycleb
            </div>
        )
    }
}

export default LifeCycleB