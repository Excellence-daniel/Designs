import React from 'react';

const textBoxStyle = {
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius:'4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
}
const colmd3 = {
    width: '25%',
    float: 'left'
}

const buttonStyle = {
    height: '50px',
    width: '150px',
    color: 'black',
    background: 'white',
    fontSize: '16px',
    borderRadius: '10px',
    cursor: 'pointer', 
    marginTop: '30px'
}

const colmd6 = {
    float: 'left',
    width: '50%'
}

export class ToDoList extends React.Component{
    constructor(props){
        super (props);

        this.state = {userInput : ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleChange(e){
        this.setState({
            userInput: e.target.value
          });
        }

        handleSubmit(event) {
        


    alert('Text in the box is : ' + this.state.userInput);
    event.preventDefault();

  }
    
    render(){
        return (
            <div>
                <div style ={colmd3}>
                Ganja Burns
                </div>
                <div style={colmd6}>
                <h2>to-do List</h2>
                <form onSubmit = {this.handleSubmit}>
                <input style = {textBoxStyle} onChange = {this.handleChange} value = {this.state.userInput}></input>
                <center>
                    <button type = "submit" value = "submit" style = {buttonStyle}>
                            Add to List
                    </button>
                </center>
                </form>
               
                
                


                <h2> Hey there! </h2>
                </div>
                <div style = {colmd3}> Hey Yo!</div>
            </div>
        );
    }
}