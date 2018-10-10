import React from 'react';
import './fiksar.css';
import { FaGlobe, FaThermometerHalf } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { MdPhotoCamera, MdKeyboardControl, MdMoreHoriz} from 'react-icons/md';
import { FaFortAwesome } from 'react-icons/fa';

const container = {
    marginRight: 'auto',
    marginLeft: 'auto'
}

 const inputBox ={
//display: 'block',
    width: '70%',
    height: '35px',
    padding: '6px 12px',
    fontSize: '17px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage:'none',
    border: '1px solid #ccc',
    borderLeft: 'none'
 }

 const spanStyle = {    
    fontSize:' 30px',
    borderLeft: '1px solid #ccc',
    paddingBottom: '13px',
    borderBottom: '1px solid #ccc',
    borderTop: '1px solid #ccc',
    borderRight: '1px solid #ccc'
 }

 const buttonStyleTwo = {
    textAlign: 'center',
    border: '1px solid transparent',
    color: '#fff',
    backgroundColor: 'rgb(17, 63, 113)',
    borderColor:' rgb(17, 63, 113)',
    height: '40px',
    fontSize: '18px',    
 height: '48px',
 width: '100px',
 borderTopRightRadius: '10px',
 borderBottomRightRadius: '10px'
    }


export class Fiksar extends React.Component{
    render(){
        return (
<div style = {container}>
<div class = 'col-md-12' style = {{background: 'url("images/desktop.PNG")', backgroundSize: 'cover'}}>
    <div class = 'col-md-6'>
    <div class = 'col-md-1' style={{color: 'white'}}> d </div>
    <div class = 'col-md-2'> <img src = 'images/desktop-logo.PNG'></img> </div>
    <div class = 'col-md-9'>
            <ul> 
                  <li> How it Works</li> 
                  <li>Find a Job</li> 
                  <li> Login </li>
                  <li>Sign <br/> Up</li>
                  <li> <FaGlobe/> ESP</li>

            </ul>
    </div>

    <div class = 'col-md-12'>
    <div class ='col-md-2' style ={{color:'white'}}>a</div>
    <div class = 'col-md-10' style = {{marginTop: '12%'}}>
    <p style ={{fontSize:'43px', fontWeight:'400',color: '#3c3c3b' }}>
    Find Reliable & Verified Home Service Providers</p>

    <div>
        <div class = 'col-md-1' style ={{background: 'white', height: '51px'}}> <FaHome style = {{marginLeft: '10px',fontSize: '18px', marginTop: '17px'}}/> </div>
        <div class = 'col-md-9'> <input type = 'text' placeholder = 'What services do you need?' style = {{width: '400px', height: '49px'}}/></div>
        <div class = 'col-md-2'><button style = {{height: '52px', width: '100px', background: 'blue', border: '1px none', borderTopRightRadius:' 10px', 
        borderBottomRightRadius: '10px', color: 'white', marginLeft: '-25px'}}>Find <br/> Services</button></div>
    </div>

    <div class = 'col-md-12'>
    <ul>
    <li style = {{padding: '5px'}}><button class="form-control" style= {{borderRadius : '50px', background: '#fbfbfb',borderColor: '#fbfbfb', boxShadow: 'none'}}> <b>House Cleaning</b> </button></li> 
    <li style = {{padding: '5px'}}><button class="form-control" style= {{borderRadius : '50px', background: '#fbfbfb',borderColor: '#fbfbfb', boxShadow: 'none'}}> <b>Painting</b> </button></li>
    <li style = {{padding: '5px'}}><button class="form-control" style= {{borderRadius : '50px', background: '#fbfbfb',borderColor: '#fbfbfb', boxShadow: 'none'}}> <b>Photography</b> </button></li>
    <li style = {{padding: '5px'}}><button class="form-control" style= {{borderRadius : '50px', background: '#fbfbfb',borderColor: '#fbfbfb', boxShadow: 'none'}}> <b>Personal training</b> </button></li>
    <li style = {{padding: '5px'}}><button class="form-control" style= {{borderRadius : '50px', background: '#fbfbfb',borderColor: '#fbfbfb', boxShadow: 'none'}}><i><MdMoreHoriz/></i></button></li>
   </ul>
    </div>

    <div style = {{marginTop: '35%', color: 'transparent'}}>a</div>

    </div>
    </div>
    </div>

    <div class = 'col-md-6'>
   
    </div>
</div>



<div class = 'col-md-12' style = {{fontSize: '18px', color: 'gray', marginTop: '4%'}}>
    <div class = 'col-md-2'>
    <div class = 'col-md-3' style = {{fontSize: '20px', marginTop: '3px'}}> <FaListUl style = {{float: 'right'}}/>  </div>
    <div class = 'col-md-9'> <span style = {{float: 'left'}}>&nbsp; All Categories</span></div>
    </div>
    <div class = 'col-md-2'>
    <div class = 'col-md-3' style = {{fontSize: '20px',  marginTop: '3px'}}> <FaHome style ={{float: 'right'}}/>  </div>
    <div class = 'col-md-9'> <span style = {{float: 'left'}}>&nbsp; Home</span></div>
    </div>
    <div class = 'col-md-2'>
    <div class = 'col-md-3' style = {{fontSize: '20px', marginTop: '3px'}}> <FaBriefcase style = {{float: 'right'}}/>  </div>
    <div class = 'col-md-9'> <span style = {{float: 'left'}}>&nbsp; Business</span></div>
    </div>
    <div class = 'col-md-2'>
    <div class = 'col-md-3' style = {{fontSize: '20px', marginTop: '5px'}}> <MdPhotoCamera style = {{float: 'right'}}/>  </div>
    <div class = 'col-md-9'> <span style = {{float: 'left'}}>&nbsp; Photography</span></div>
    </div>

    <div class = 'col-md-2'>
    <div class = 'col-md-3' style = {{fontSize: '20px', marginTop: '5px'}}> <FaBook style = {{float: 'right'}}/>  </div>
    <div class = 'col-md-9'> <span style = {{float: 'left'}}>&nbsp;Lessons</span></div>
    </div>

    <div class = 'col-md-2'>
    <div class = 'col-md-3' style = {{fontSize: '20px', marginTop: '5px'}}> <FaFortAwesome style = {{float: 'right'}}/>  </div>
    <div class = 'col-md-9'> <span style = {{float: 'left'}}>&nbsp; Entertainment</span></div>
    </div>
</div>

</div>

        );
    }
}