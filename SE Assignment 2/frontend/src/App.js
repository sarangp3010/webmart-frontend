import React from "react";
import './App.css';
import { TextField, Button, Grid } from '@mui/material'
import { alignProperty } from "@mui/material/styles/cssUtils";

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            N1: 0,
            N2: 0,
            queryResult: null,
        };
    }


    myChangeHandler = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});  
    };

    mySubmitHandler = (event) => {
        event.preventDefault();
        const url = 'http://localhost:3001/add/${this.state.N1}/and/${this.state.N2}';
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({ queryResult: result.Addition});
            });
    }

    render() {
        return(
        <div className="App">
            <form onSubmit = {this.mySubmitHandler} style = {{width: '50%', margin: 'auto',paddingBottom: '50px'}}>
                <Grid item xs = {12} style = {{ marginBottom: '10px', marginTop: '10px', width: '100%'}}>
                    <TextField
                        type = "number"
                        name = "N1"
                        id = "N1"
                        label = "Enter first Number"
                        variant = "outlined"
                        fullWidth
                        onChange={this.myChangeHandler}
                    />
                </Grid>
                <Grid item xs = {12} style = {{ marginBottom: '10px', marginTop: '10px', width: '100%'}}>
                    <TextField
                        type = "number"
                        name = "N2"
                        id = "N2"
                        label = "Enter Second Number"
                        variant = "outlined"
                        fullWidth
                        onChange={this.myChangeHandler}
                    />
                </Grid>
                <Grid item xs = {12} style = {{ marginBottom: '10px', marginTop: '10px', width: '100%'}}>
                    <Button variant="contained" color="primary" type = "submit">
                        Submit
                    </Button>
                </Grid>
                <Grid item xs={12} style = {{ marginBottom: '10px', marginTop: '10px', width: '100%'}}>
                {this.state.queryResult && (
                    <p>Your Addition Result (from server) is: {this.state.queryResult}</p>
                    
                )}
                <p>
                    Your Addition Result (from ReactJS) is:{' '}
                    <h1>
                    {Number(this.state.N1) + Number(this.state.N2)}
                    </h1>
                    Your Addition Result (from ExpressJS) is:{' '}
                    <h1>
                    {Number(this.state.N1) + Number(this.state.N2)}
                    </h1>
                </p>
                </Grid>
            </form>
        </div>
        );
    }
}

// class Add extends React.Component{
//     constructor(){
//         super(); //to call the base class constructor
//         this.state = {
//             n1:'', n2:'', sum:'' //trying to create an object with n1, n2, sum with empty strings

//         }
//     }

// num1 = (event) => {
//         this.setState({
//             n1:event.target.value
//         })
//     }

// num2 = (event) => {
//        this.setState({
//         n2:event.target.value
//        })      
//     }

// performAddition = (event) => {
//     event.preventDefault();
//     this.setState({total: parseInt(this.state.n1) + parseInt(this.state.n2)})
    
// }
//     render(){
//         return( 
//             <div className="Abc">

//             <form onSubmit={this.performAddition}>
//             <div>
//             <p>Enter First Number: </p>
//             <input type="number" value={this.state.n1} onChange={this.num1}/>
//             </div>

//             <div>
//             <p>Enter Second Number: </p>
//             <input type="number" value={this.state.n2} onChange={this.num2}/>
//             </div>
//              <div>
//              <input type="submit"/>
//             </div>
//             </form>
//             <p>Your addition Result(from ReactJs) is {this.state.total}</p>
//             </div>
//             )
//     }
// }


// const Add = () => {
//   const [N1, setN1] = useState(0);
//   const [N2, setN2] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [servertotal, setservertotal] = useState(0);

//   const Num1 = (event) => {
//     setN1(event.target.value);
//   };

//   const Num2 = (event) => {
//     setN2(event.target.value);
//   };

//   const Total = async event => {
//     event.preventDefault();
//     setTotal(parseInt(N1) + parseInt(N2));
//     Axios.get(`http://localhost:3001/add/${N1}/and/${N2}`).then((response)=>{
//         this.setservertotal({servertotal: response.data.Numbers_sum});
//         console.log(response.data.Numbers_sum);
//     });
//   }

  


//   return (
    
//     <div className="Abc">
      
//         <div>
//         <p>Enter First Number: </p>
//         <input type="number" onChange={Num1} />
//         </div>
//         <div>
//         <p>Enter Second Number: </p>
//         <input type="number" onChange={Num2} />
//         </div>
//         <div>
//         <button onClick={Total}>Add</button>
//         </div>
//       <p>Your addition Result (from Server) is: {servertotal}</p>
//       <p>Your addition Result(from ReactJs) is: {total}</p>
//     </div>
//   );
// };



// export class Add extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             N1: 0,
//             N2: 0
//         };
//     }
    
//     myChangeHandler = (event) => {
//         let a = event.target.name;
//         let b = event.target.value;
//         this.setState({ [a]: b });
//     }
    

//     mySubmitHandler = (event) => {
//         event.preventDefault(); 
//         const url = `http://localhost:3001/add/${this.state.N1}/and/${this.state.N2}`;
//         fetch(url)
//             .then((result) => result.json())
//             .then(result => {
//                 debugger;
//                 this.setState({ queryResult: result.Addition });
//             });
//     }

//     render() {
//         return (
//             <div className="App">
//                 <div className="row">
//                   <div className="col">
//                     <form onSubmit={this.mySubmitHandler}>
//                            <div>
//                                <p>Enter First Number: </p>
//                                <input type="number" name="N1" id="N1" onChange={this.myChangeHandler} />
//                            </div>
//                            <div>
//                                <p>Enter Second Number: </p>
//                                <input type="number" name="N2" id="N2" onChange={this.myChangeHandler} />
//                            </div>
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//                 </div>
//                    <p>Your Addition Result (from server) is: {this.state.queryResult}</p>
//                    <p>Your Addition Result (from ReactJS) is: {Number(this.state.N1) + Number(this.state.N2)} </p>  
//             </div>
//         );
//     }
// }


export default Add;