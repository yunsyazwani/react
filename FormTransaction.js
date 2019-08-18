import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class FormTransaction extends Component{

    constructor(props){
        super(props)
        this.state = {
            receiver: '',
            sender: '',
            amount: '0',
            fee:'0'

        }
    }

    handlerOnChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handlerSubmit = (event) => {
        console.log(JSON.stringify(this.state));
        localStorage.setItem('confirmUniqueKey', JSON.stringify(this.state));//hardcode -replace value 
        event.preventDefault()
    }

    render(){
        return(
            <div className ="container">
                <h2>Transaction Form</h2>
                <form onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label>Sender address </label>
                        <input id="sender"
                        className="form-control"
                        type="text" 
                        value={this.state.sender} 
                        onChange={this.handlerOnChange}/>
                    </div>
                    <div className="form-group">
                        <label>Receiver address </label>
                        <input id="receiver"
                        className="form-control"
                        type="text" 
                        value={this.state.receiver} 
                        onChange={this.handlerOnChange}/>
                    </div>
                    <div className="form-group">
                        <label>Amount </label>
                        <input id="amount"
                        className="form-control"
                        type="number" 
                        min="0.000"
                        step="0.001"
                        value={this.state.amount} 
                        onChange={this.handlerOnChange}/>
                    </div>
                    <div className="form-group">
                        <label>Fee </label>
                        <input id="fee"
                        className="form-control"
                        type="number" 
                        min="0.000"
                        step="0.001" 
                        value={this.state.fee} 
                        onChange={this.handlerOnChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormTransaction