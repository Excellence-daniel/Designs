import React from 'react';
import './ghostlamp.css';
import { FaBell, FaCheckSquare, FaEnvelope, FaLock, FaFacebook, FaGoogle, FaTwitter  } from 'react-icons/fa';

export class GhostLamp extends React.Component{
render(){
    return (
        <div class = 'col-md-12' style = {{backgroundColor: '#f8fafb'}}>
        <div class = 'col-md-1' style = {{color: 'transparent'}}>a</div>
        <div class = 'col-md-10'>
                <div class = 'col-md-12'> <img src = 'images/Ghostlamp.PNG' /></div>
                
                <div class = 'col-md-12'>
                <div class = 'col-md-7'>
                    <img src = 'images/Ghostlamp-picture-1.PNG' style = {{width: '100%'}}></img>
                </div>

                <div class = 'col-md-1' style = {{color: 'transparent'}}>a</div>

                <div class = 'col-md-4'>
                <h1> Welcome Back :) </h1>
                <h5 style = {{fontWeight: '400'}}> To keep connected with us login with your personal information by email address and password. <FaBell style = {{color: 'gold', marginTop: '2px'}}/></h5>
                <div class = 'col-md-12'>
                    <div class = 'col-md-12' style = {{background: '#808080bf'}}>
                    <div class = 'col-md-1' style ={{background: '#9e9f9f', height: '62px', width: '40px'}}> <FaEnvelope style = {{marginLeft: '10px',fontSize: '25px', marginTop: '27px', color: '#c1bebe'}}/> </div>
                    <div class = 'col-md-9' style = {{background: '#9e9f9f'}}> 
                    <p style = {{fontSize: '11px'}}> Email </p>
                    <p style = {{marginTop: '-10px'}}><input type = 'text' style = {{width: '250px', height: '29px', border: '1px none', background: '#9e9f9f'}}/></p>
                    </div>
                    <div class = 'col-md-2' style = {{width: '0px'}}> <FaCheckSquare style = {{marginTop: '30px', color: 'green'}}/></div>
                    </div>
                    <div class = 'col-md-12' style = {{background: 'white'}}>
                    <div class = 'col-md-1' style ={{background: 'white', height: '62px', width: '40px'}}> <FaLock style = {{marginLeft: '10px',fontSize: '25px', marginTop: '27px', color: '#c1bebe'}}/> </div>
                    <div class = 'col-md-9' style = {{background: 'white'}}> 
                    <p style = {{fontSize: '11px'}}> Password </p>
                    <p style = {{marginTop: '-10px'}}><input type = 'text' style = {{width: '250px', height: '29px', border: '1px none', background: 'white'}}/></p>
                    </div>
                    <div class = 'col-md-2' style = {{width: '0px', color: 'transparent'}}> a </div>
                    </div>                
                </div>
                <div class = 'col-md-12' style = {{fontWeight: '400', fontSize: '15px', color: 'gray'}}>
                    <div class = 'col-md-6'>
                        <div class = 'col-md-2' style = {{color: 'green'}}><p><FaCheckSquare/></p></div> 
                        <div class='col-md-10'><p>Remember Password</p></div>
                    </div>
                    <div class = 'col-md-6'> <p style = {{float: 'right'}}>Forgot Password?</p></div>
                </div>

                <div class = 'col-md-12'>
                <button style = {{width: '100px', height: '35px',fontSize: '14px', borderRadius: '50px',border: '1px', marginRight: '10px',background: '#57abef', color: 'white'}}>Login Now</button>
                <button style = {{width: '120px',background: 'white', height: '35px',fontSize: '14px', borderRadius: '50px',border: '1px', marginRight: '10px'}}> Create Account </button>
                </div>

                <div class = 'col-md-12'> 
                    <p style = {{fontSize: '14px', fontWeight: '300'}}> Or you can join width </p>
                    <button class = 'btn' style = {{background: 'white', color: 'red'}}> <FaGoogle/></button>
                    <button class = 'btn' style = {{background: 'blue'}}> <FaFacebook/> </button>
                    <button class = 'btn'> <FaTwitter/></button>

                </div>
               
                <div class = 'col-md-12' style = {{marginTop: '90px'}}> </div>
                </div>
                </div>

                
        </div>
        <div class = 'col-md-1'>q</div>

        </div>
    );
}

}
