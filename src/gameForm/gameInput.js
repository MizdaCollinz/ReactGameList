import React from 'react';
import '../styles/gameInput.css';
import '../styles/buttons.css';
import GameEntry from './gameEntry.js';
import EditModal from './editModal.js';

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
       this.deleteEntry = this.deleteEntry.bind(this);
       this.editEntry = this.editEntry.bind(this);
       this.closeModal = this.closeModal.bind(this);
       this.openEditModal = this.openEditModal.bind(this);
       
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
        let form = document.getElementById('entryForm');
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

    //Open modal to edit an entry, input the existing entry values
    openEditModal(entry){
        this.entry = entry;
        //Create edit modal
        this.setState({editModal: true});
    }

    //Modify identified entry with values specified in entry
    editEntry(id,newEntry){
        let state = this.state;
        for (let i=0; i<state.entries.length; i++){
            let entry = state.entries[i];
            if (entry.name === id){
                state.entries[i].name = newEntry.name;
                state.entries[i].year = newEntry.year;
                state.entries[i].status = newEntry.status;
                this.setState(state);
                this.persistEntries();
                return true;
            }
        }
        //Name wasnt found
        return false;
    }

    //Delete the entry of the specified game name
    deleteEntry(name){

        let state = this.state;
        for (let i=0; i<state.entries.length; i++){
            let entry = state.entries[i];
            if (name === entry.name){
                state.entries.splice(i,1);
                this.setState(state);
                this.persistEntries();
                return true;
            }
        }
        //Name wasnt found
        return false; 
    }

    //Check if entry name already exists
    isDuplicate(name){
        let entries = this.state.entries;
        for (let entry of entries){
            if(entry.name.trim().toUpperCase() === name.trim().toUpperCase()){
                this.writeError("This game name is already in use");
                return true;
            }
        }
        return false;
    }

    writeError(error){
        let errorDiv = document.getElementById('entryError');
        errorDiv.innerText = error;
        setTimeout(function(){errorDiv.innerText = ""; }, 5000);
    }

    closeModal(){
        this.setState({editModal: false});
    }
    
    render(){
        return (
            <div id="entryForm" style={formStyle} >
                <form>
                    <h1>List of Games Played</h1>
                    
                    <div style={filterStyle}>
                        <i class="material-icons">search</i> 
                        <input type="search" name="filter" placeholder="Filter games"></input>
                    </div>

                    <br></br>
                    <input name="title" type='text' placeholder='Game Title'></input>
                    <input name="start" type='number' placeholder='Starting Year'></input>
                    <input name="status" type='text' placeholder='Completion Status'></input>
                    <input type="submit" className="button" onClick={this.createEntry} value='Add a Game'></input>
                    <div id="entryError" className="form-error"></div>
                </form>

                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Status</th>
                            <th>Adjustments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.entries.map((entry) => {
                            return (<GameEntry game={entry} delete={this.deleteEntry} edit={this.openEditModal}></GameEntry>);
                        })}   
                    </tbody>
                </table>

                <EditModal 
                    status={this.state.editModal} 
                    close={this.closeModal}
                    entry={this.entry}
                    edit={this.editEntry}
                >
                    
                    
                </EditModal>

            </div>
           
        );
    }
}


var formStyle = {
    minHeight: '200px',
    width: '70%',
    margin: '0px auto',
    backgroundColor: 'white',
    padding: '15px 25px',
    paddingBottom: '30px',
    overflow: 'visible',
    marginBottom: '50px'
};

var tableStyle = {
    width: '80%',
    margin: '0 auto',
    marginTop: '20px',
    borderSpacing: '0px'
}

var filterStyle = {
    display: 'inline-block',
    margin: '10px',
    position: 'relative',
    right: '-10%'
}

export default GameInput;