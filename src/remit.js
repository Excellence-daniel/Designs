import React from 'react';
import { FaKey } from 'react-icons/fa';
import './remit.css';

//css declarations with style
const colmd6 = {
    width: '50%',
    float: 'left'
}

const colmd12 = {
    width:'100%'
}
const colmd1 = {
    width: '8.33333333%',
    float: 'left'
}
const colmd10 = {
    float: 'left',
    width: '83.33333333%'

}
const container = {
    marginRight: 'auto',
    marginLeft: 'auto'
}
 const inputBox ={
display: 'block',
    width: '70%',
    height: '30px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage:'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)'
 }

 const buttonStyle = {
 fontWeight: '400',
 textAlign: 'center',
 whiteSpace: 'nowrap',
 border: '1px solid transparent',
 color: '#fff',
 backgroundColor: 'rgb(17, 63, 113)',
 borderColor:' rgb(17, 63, 113)',
 height: '40px',
 fontSize: '18px',
 borderRadius: '70px',
 marginTop: '30px',
 width: '85%'
 }

export class Remit extends React.Component{




    render(){
        return (
            <div style = {container}>

                <div style = {colmd6}>
                    <div style = {colmd1}></div>
                    <div style = {colmd10}>
                <center>
                        <h1 style = {{color:'#dc1414', marginTop: '10%'}}> Remit</h1>
                        <h1 style = {{marginTop: '7%', fontWeight: '400'}}> Welcome! </h1>
                        <p> Sign in by entering the information below</p>
                        <p style = {{marginTop: '5%'}}>
                        <p>
                            <input type = 'email' style = {inputBox}  placeholder = 'Email Address'></input>   

                        </p>

                        <p>
                            <input type = 'password' style = {inputBox}  placeholder = 'Password'></input>   

                        </p>
                        </p>
                    <div style = {colmd12}>
                        <div style = {colmd6}>
                            <input type = "checkbox"/>Remember Password
                        </div>
                        
                        <div style = {colmd6}>
                        <a><FaKey /> Forgot Password?</a>
                        </div>
                    </div>

                    <button style = {buttonStyle}> Continue </button>

                    <p> Don't have an account yet? <a>Create one here</a></p>
                        
                           
                                  
                
                
                </center>
                </div>
                <div style = {colmd1}></div>

                </div>

                <div style = {colmd6}>
                <img src = 'images/Remit-body.PNG' style = {{width: '100%',height: 'auto', display: 'block'}}></img>
                </div>

            </div>
        )
    }
    
}