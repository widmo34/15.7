class Stopwatch extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            times : {
                miliseconds: '',
                seconds: '',
                minutes: '',
            },
            running: 'false',
        }
            
           

       
        console.log(this.state.times) 
    } 
   

    reset(){
        this.setState({
            times: null
       });
     
    }

    print(){
        document.querySelector('stopwatch').innerText = this.format(this.state.times)
    }

    format(value){
        const self = this;

        return `${self.pad0(value.minutes)}:${self.pad0(value.seconds)}:${self.pad0(Math.floor(value.miliseconds))}`
    }

    start(){
        
        console.log(this.state.running)   
        if(!this.state.running){
            this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step(){
        if(!this.running) return;
        this.calculate();
        this.print();   
    }

    calculate(){
        this.setState(this.state.times.miliseconds += 1);
        if(this.setState(this.state.times.miliseconds >= 100)){
            this.setState(this.state.times.seconds += 1);
            this.setState(this.state.times.miliseconds = 0);
        }

        if(this.state.times.seconds >= 60){
            this.setState(this.state.times.minutes += 1);
            this.setState(this.state.times.seconds = 0);
        }
    }


    stop(){
        this.state.running = false;
        clearInterval(this.watch);
    }


    pad0(value) {
        let result = value.toString();
        if(result.length < 2){
            result = '0' + result;
        }
        return result;
    }


     render(){
        return(
            <div>
               
            <nav className="controls">
            <a href="#" className="button" id="start" onClick={this.start}>Start</a>
            <a href="#" className="button" id="stop" onClick={this.stop}>Stop</a>
            </nav>
            <div className="stopwatch"></div>
            <ul className="results"></ul>    
            </div> 
           
        )
    }


}
 
ReactDOM.render(<Stopwatch />, document.getElementById('app'))
           

              
          
               




