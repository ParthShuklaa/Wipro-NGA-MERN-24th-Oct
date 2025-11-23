import { Component} from "react";


type Numprops={
    count:number;
}

type Numstate={
currentCount:number;
}
class ClassComponent extends Component<Numprops,Numstate>{
    constructor(props:Numprops){
        super(props);
        this.state={
            currentCount:0
        };
    }
    increment=()=>{
        // this.setState((prevState)=>({
        //     currentCount:prevState.currentCount + 1,
        // }));
        this.setState({currentCount:this.state.currentCount+1});
    
    };
    decrement=()=>{
        // this.setState((prevState)=>({
        //     currentCount:prevState.currentCount-1,
        // }));
        this.setState({currentCount:this.state.currentCount-1});
    }
    render(){
        return(
<div>
    <p>count:{this.state.currentCount}</p>
    <button onClick={this.increment}>Increment</button>
     <button onClick={this.decrement} >decrement</button>
</div>

        );
    }
}
export default ClassComponent;