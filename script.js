class Stopwatch extends React.Component {
   
    constructor(props){
        super();
        this.state = {
            times : {
                miliseconds: 0,
                seconds: 0,
                minutes: 0,
            },
            running: false,
        }
            
           

       
        console.log(this.state.times) 
    } 
   

    reset(){
        this.setState({
            times : {
                miliseconds: '',
                seconds: '',
                minutes: '',
            }
       });
     
    }

   

    format(){
      //  const self = this;
        let {times: { minutes: mm, seconds: ss, miliseconds: ms}} = this.state;
        return `${this.pad0(mm)}:${this.pad0(ss)}:${this.pad0(Math.floor(ms))}`
    }

    start(){
        
        console.log(this.state.running)   
        if(!this.state.running){
            this.state.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step(){
        if(!this.state.running) return;
        this.calculate();
       
    }

    calculate(){
        let {times: { minutes: mm, seconds: ss, miliseconds: ms}} = this.state;
       
       
        ms += 1;
        if(ms >= 100){
            ss += 1;
            ms = 0;
        }

        if(ss >= 60){
            mm += 1;
            ss = 0;
}
        this.setState({
            times : {
                minutes: mm,
                seconds: ss,
                miliseconds: ms
            }
        })
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
            <a href="#" className="button" id="start" onClick={this.start.bind(this)}>Start</a>
            <a href="#" className="button" id="stop" onClick={this.stop.bind(this)}>Stop</a>
            </nav>
            <div className="stopwatch">{this.format()}</div>
            <ul className="results"></ul>    
            </div> 
           
        )
    }


}
 
ReactDOM.render(<Stopwatch />, document.getElementById('app'))
           

              
          
               




