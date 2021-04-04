import React from 'react';
import '../styles/gameInput.css';
import '../styles/buttons.css';
import GameEntry from './gameEntry.js';
import EditModal from './editModal.js';

class GameInput extends React.Component {

    constructor(props) {
        super(props);
        let entries = localStorage.getItem('entries');
        if (!entries) {
            entries = [];
        } else {
            entries = JSON.parse(entries);
        }
        this.state = {entries};
        this.createEntry = this.createEntry.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
        this.editEntry = this.editEntry.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
    }

    /**
     * Persist the current entries into local storage
     */
    persistEntries() {
        const {entries} = this.state;
        if (entries) {
            localStorage.setItem('entries', JSON.stringify(entries));
        }
    }

    /**
     * Store an entry for the current form data
     * @param e Entry data from the form
     */
    createEntry(e) {
        e.preventDefault();

        const form = document.getElementById('entryForm');
        const gameFields = form.getElementsByClassName('game-field');
        const name = gameFields[0].value; // unique identifier

        if (name === "" || this.isDuplicate(name)) {
            return;
        }

        //Create the data input for a GameEntry
        const entry = {
            name,
            year: gameFields[1].value,
            status: gameFields[2].value
        };
        for (const field of gameFields) {
            field.value = "";
        }

        //Update state to include new entry
        const state = this.state;
        state.entries.push(entry);
        this.setState(state);
        this.persistEntries();

    }

    //Open modal to edit an entry, input the existing entry values
    openEditModal(entry) {
        this.entry = entry;
        const state = this.state;
        this.setState({...state, editModal: true});
    }

    //Modify identified entry with values specified in entry
    editEntry(id, newEntry) {
        let state = this.state;
        for (let i = 0; i < state.entries.length; i++) {
            let entry = state.entries[i];
            if (entry.name === id) {
                state.entries[i].name = newEntry.name;
                state.entries[i].year = newEntry.year;
                state.entries[i].status = newEntry.status;
                this.setState(state);
                this.persistEntries();
                return true;
            }
        }
        return false;
    }

    //Delete the entry of the specified game name
    deleteEntry(name) {
        const state = this.state;
        for (let i = 0; i < state.entries.length; i++) {
            const entry = state.entries[i];
            if (name === entry.name) {
                state.entries.splice(i, 1);
                this.setState(state);
                this.persistEntries();
                return true;
            }
        }
        return false; // Not found
    }

    //Check if entry name already exists
    isDuplicate(name) {
        const {entries} = this.state || {entries: []};
        for (const entry of entries) {
            if (entry.name.trim().toUpperCase() === name.trim().toUpperCase()) {
                this.writeError("This game name is already in use");
                return true;
            }
        }
        return false;
    }

    writeError(error) {
        const errorDiv = document.getElementById('entryError');
        errorDiv.innerText = error;
        setTimeout(() => {
            errorDiv.innerText = "";
        }, 5000);
    }

    filterEntries(entries) {
        const {filter} = this.state;
        if (filter && filter.length > 0) {
            return entries.filter((entry) => entry.name.includes(filter));
        }
        return entries;
    }

    closeModal() {
        this.setState({editModal: false});
    }

    render() {
        const {entries, editModal} = this.state || {};
        return (
            <div id="entryForm" style={formStyle}>
                <form>
                    <h1>List of Games Played</h1>
                    <div style={filterStyle}>
                        <i className="material-icons">search</i>
                        <input id="game-filter" type="search" name="filter" placeholder="Filter games"
                               onChange={(event) => {
                                   this.setState({...this.state, filter: event.target.value})
                               }}/>
                    </div>
                    <br/>
                    <input name="title" className="game-field" type='text' placeholder='Game Title'/>
                    <input name="start" className="game-field" type='number' placeholder='Starting Year'/>
                    <input name="status" className="game-field" type='text' placeholder='Completion Status'/>
                    <input type="submit" className="button" onClick={this.createEntry} value='Add a Game'/>
                    <div id="entryError" className="form-error"/>
                </form>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        {['Title', 'Year', 'Status', 'Actions'].map((title) => <th>{title}</th>)}
                    </tr>
                    </thead>
                    <tbody>
                    {entries && this.filterEntries(entries).map((entry) => <GameEntry game={entry}
                                                                                      delete={this.deleteEntry}
                                                                                      edit={this.openEditModal}/>)}
                    </tbody>
                </table>
                <EditModal
                    status={editModal}
                    close={this.closeModal}
                    entry={this.entry}
                    edit={this.editEntry}
                />
            </div>
        );
    }
}


const formStyle = {
    minHeight: '200px',
    width: '70%',
    margin: '0px auto',
    backgroundColor: 'white',
    padding: '15px 25px',
    paddingBottom: '30px',
    overflow: 'visible',
    marginBottom: '50px'
};
const tableStyle = {
    width: '80%',
    margin: '0 auto',
    marginTop: '20px',
    borderSpacing: '0px'
}
const filterStyle = {
    display: 'inline-block',
    margin: '10px',
    position: 'relative',
    right: '-10%'
}

export default GameInput;