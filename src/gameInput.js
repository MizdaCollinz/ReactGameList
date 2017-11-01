import React from 'react';
import './styles/gameInput.css'

class GameInput extends React.Component {
    
    onSubmit(e){
        return;
    }
    
    render(){
        return (
            <form style={formStyle} >
                <input name="title" type='text' placeholder='Game Title'></input>
                <input name="start" type='number' placeholder='Starting Year'></input>
                <input name="status" type='text' placeholder='Completion Status'></input>
                <input type="submit" onClick={this.onSubmit} value='+'></input>
            
                <table style={tableStyle}>
                    <thead>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
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
    width: '100%',
    marginTop: '20px'
}

export default GameInput;