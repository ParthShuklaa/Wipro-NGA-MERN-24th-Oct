import{ PureComponent} from "react";

interface CounterProps {
    value:number;

}
interface CountState {
  counts: number;
}

class PureComponentDemo extends PureComponent<CounterProps,CountState>{
constructor(props:CounterProps){
    super(props);
    this.state={counts:0};
}

increment=()=>{
    this.setState({counts:this.state.counts+1});
    
};
render(){
    return(

        <div>
             <p>Prop value: {this.props.value}</p>
            <p>count:{this.state.counts}</p>
            <button onClick={this.increment}>increment</button>
        </div>

    );

    
}

}
export default PureComponentDemo;