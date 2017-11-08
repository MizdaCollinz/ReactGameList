import React from 'react';
import '../styles/gameInput.css';
import GameEntry from './gameEntry.js';

const entries = [{
    name: "Resident Evil 7",
    year:"2017",
    status:"Finished"
},{
    name: "Nier Automata",
    year:"2017",
    status:"Glitchy"
}];

class GameInput extends React.Component {
    
    constructor(props){
        super(props);
       this.state = {
           entries:entries
       };
       this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();

        //Retrieve inputs from the form
        let form = document.getElementById('EntryForm');
        let inputs = form.getElementsByTagName('input');
        let name = inputs[0].value;
        let year = inputs[1].value;
        let status = inputs[2].value;

        //Create the data input for a GameEntry
        let entry = {
            name: name,
            year: year,
            status: status
        };

        //Update state to include new entry
        let state = this.state;
        state.entries.push(entry);
        this.setState(state);
        
    }
    
    render(){
        return (
            <form id="EntryForm" style={formStyle} >
                <input name="title" type='text' placeholder='Game Title'></input>
                <input name="start" type='number' placeholder='Starting Year'></input>
                <input name="status" type='text' placeholder='Completion Status'></input>
                <input type="submit" onClick={this.onSubmit} value='+'></input>
            
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entries.map((entry) => {
                            return (<GameEntry game={entry}></GameEntry>);
                        })}   
                    </tbody>
                </table>
            </form>
           
        );
    }
}


var formStyle = {
    height: '200px',
    width: '70%',
    margin: '0px auto',
    backgroundColor: 'white',
    padding: '10px'
};

var tableStyle = {
    width: '80%',
    margin: '0 auto',
    marginTop: '20px'
}

export default GameInput;