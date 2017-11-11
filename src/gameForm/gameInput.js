import React from 'react';
import '../styles/gameInput.css';
import GameEntry from './gameEntry.js';

class GameInput extends React.Component {
    
    constructor(props){
        super(props);
        let entries = localStorage.getItem('entries');
        entries = JSON.parse(entries);

        if (entries === undefined){
            entries = [];
        }

        this.state = {
            entries:entries
        };

       this.createEntry = this.createEntry.bind(this);
    }

    //Persist entry list in local storage
    persistEntries(){
        let entries = this.state.entries;
        let json = JSON.stringify(entries);
        localStorage.setItem('entries',json);
    }

    //Create a new entry from form input
    createEntry(e){
        e.preventDefault();

        //Retrieve inputs from the form
        let form = document.getElementById('EntryForm');
        let inputs = form.getElementsByTagName('input');
        //Names must be unique identifiers for a game entry
        let name = inputs[0].value;

        if(this.isDuplicate(name)){
            //An entry is not created
            return;
        }

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
        this.persistEntries();

    }

    deleteEntry(name){
        //TODO
    }

    //Check if entry name already exists
    isDuplicate(name){
        let entries = this.state.entries;
        for (let entry of entries){
            if(entry.name.trim().toUpperCase() === name.trim().toUpperCase()){
                return true;
            }
        }
        return false;
    }
    
    render(){
        return (
            <form id="EntryForm" style={formStyle} >
                <input name="title" type='text' placeholder='Game Title'></input>
                <input name="start" type='number' placeholder='Starting Year'></input>
                <input name="status" type='text' placeholder='Completion Status'></input>
                <input type="submit" onClick={this.createEntry} value='+'></input>
                <div className="form-error" >This is an error message</div>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.entries.map((entry) => {
                            return (<GameEntry game={entry} delete={this.deleteEntry}></GameEntry>);
                        })}   
                    </tbody>
                </table>
            </form>
           
        );
    }
}


var formStyle = {
    minHeight: '200px',
    width: '70%',
    margin: '0px auto',
    backgroundColor: 'white',
    padding: '20px'
};

var tableStyle = {
    width: '80%',
    margin: '0 auto',
    marginTop: '20px'
}

export default GameInput;