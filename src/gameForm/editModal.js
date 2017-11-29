import React from 'react';
import Modal from 'react-modal';
import '../styles/buttons.css';
import '../styles/editModal.css';

class EditModal extends React.Component {
    constructor(props){
        super(props);
        this.open = this.open.bind(this);
        this.edit = this.edit.bind(this);
    }

    open(entry){

        //Access form inputs
        let name = this.refs.title;
        let year = this.refs.year;
        let status = this.refs.status;

        //Set form values to current entry values
        name.value = entry.name;
        year.value = entry.year;
        status.value = entry.status;
    }

    edit(e){
        e.preventDefault();
        console.log("Prevented");
        let id = this.props.entry.name;
        let newEntry = {
            name: this.refs.title.value,
            year: this.refs.year.value,
            status: this.refs.status.value
        };
        this.props.edit(id,newEntry);
        this.props.close();
    }

    render() {
        return (
                <Modal
                    isOpen={this.props.status}
                    onAfterOpen={() => this.open(this.props.entry)}
                    contentLabel="Edit Modal"
                    onRequestClose={this.props.close}
                    style = {modalStyle}
                >
                    <h2>Edit this game entry</h2>
                    <form>
                        <input name="title" type='text' placeholder='Game Title' ref="title"></input>
                        <br />
                        <input name="start" type='number' placeholder='Starting Year' ref="year"></input>
                        <br />
                        <input name="status" type='text' placeholder='Completion Status' ref="status"></input>
                        <br />
                        <input className="button" type='submit' value= "Save Changes" onClick={this.edit}></input>
                    </form>

                </Modal>
        );
    }

}

var modalStyle = {
    content: {
        height:'250px',
        width:'350px',
        margin: 'auto auto',
        textAlign: 'center'
    }
}

export default EditModal;