import React from 'react';
import './daily.css';
import { FaCartPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';

export class Daily extends React.Component{
    render(){
        return (
            <div>
                <div class='col-md-1' style = {{color: 'white'}}>
                a
                </div>

                <div class = 'col-md-10'>
                <div class = 'col-md-12'>
                    <div class = 'col-md-2'>
                   <h2> #DAILY </h2>
                    </div>

                    <div class = 'col-md-5' style = {{color: 'white'}}>
                    a
                    </div>

                    <div class = 'col-md-5' style = {{marginTop: '25px'}}>
                    
                    <div class ="col-md-6"> <input class = 'form-control col-md-12' style = {{background: '#d6cece'}} type = 'text' placeholder = 'Search'></input></div>

                    <div className ="col-md-1" style = {{marginTop: '10px', marginLeft: '-15px'}}><FaSearch/></div> 
                    <div className = "col-md-3">
                    <span style = {{fontSize: '27px'}}><FaCartPlus/></span>
                    <span class = 'badge'> 0</span>                    
                    </div>

                    <div class = 'col-md-2' style = {{fontSize: '28px'}}>
                    <FaBars/>
                    </div>
                    </div>
                </div>

                <div class ='col-md-12'>
                    <div class = 'col-md-8' style = {{paddingLeft: '0px'}}>
                    <h1> Shopping Cart</h1>

                            <div class ='col-md-5'> Product</div>
                            <div class = 'col-md-2'> Size </div>
                            <div class = 'col-md-2'> Quantity </div>
                            <div class = 'col-md-2'>Total Price</div>
                            <div class = 'col-md-1'>Cancel</div>

                            <hr style = {{marginTop: '50px'}}/>

                            <div class ='col-md-5'> 
                            <div class = 'col-md-4'><img src = 'images/shirt.png' style = {{width: '75px'}}></img></div>
                            <div class = 'col-md-8'><b>Hentley T Shirt</b> <br/> Dark Grey</div>
                            </div>
                            <div class = 'col-md-2'> 
                            <select class = 'form-control' style = {{width: '90px'}}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                            </div>
                            <div class = 'col-md-2'> 
                            <select class = 'form-control' style = {{width: '90px'}}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                             </div>
                            <div class = 'col-md-2'> $39.98</div>
                            <div class = 'col-md-1'><button style = {{background: 'transparent', border: 'none'}}> <b> x </b> </button> </div>

                            <hr style = {{marginTop: '105px'}}/>

                            <div class ='col-md-5'> 
                            <div class = 'col-md-4'><img src = 'images/shoes.png' style = {{width: '75px'}}></img></div>
                            <div class = 'col-md-8'><b>High Top Brogues</b> <br/> Brown</div>
                            </div>
                            <div class = 'col-md-2'> 
                            <select class = 'form-control' style = {{width: '90px'}}>
                                <option> 10.2 </option>
                                <option> 10.3 </option>
                                <option> 10.4 </option>
                            </select>
                            </div>
                            <div class = 'col-md-2'> 
                            <select class = 'form-control' style = {{width: '90px'}}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                             </div>
                            <div class = 'col-md-2'> $69.99</div>
                            <div class = 'col-md-1'><button style = {{background: 'transparent', border: 'none'}}> <b> x </b> </button> </div>

                            <hr style = {{marginTop: '105px'}}/>

                            <div class ='col-md-5'> 
                            <div class = 'col-md-4'><img src = 'images/hoodie.png' style = {{width: '75px'}}></img></div>
                            <div class = 'col-md-8'> <b>Sweater Hoodie</b> <br/>Light Grey</div>
                            </div>
                            <div class = 'col-md-2'> 
                            <select class = 'form-control' style = {{width: '90px'}}>
                                <option> 10.2 </option>
                                <option> 10.3 </option>
                                <option> 10.4 </option>
                            </select>
                            </div>
                            <div class = 'col-md-2'> 
                            <select class = 'form-control' style = {{width: '90px'}}>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                            </select>
                            </div>
                            <div class = 'col-md-2'> $69.99</div>
                            <div class = 'col-md-1'><button style = {{background: 'transparent', border: 'none'}}> <b> x </b> </button> </div>
                <div class = 'col-md-12'>
                    <div class = 'col-md-6'> 
                    <button class = 'shoppingbutton'>  <FaChevronLeft/>  Continue Shopping </button>
                    </div>

                    <div class ='col-md-2' style = {{color: 'white'}}>a</div>
                    <div class = 'col-md-4' style = {{textAlign: 'right'}}>
                    <p> Subtotal: &nbsp; $149.96</p>
                    <p> Shipping : &nbsp; $9.9 &nbsp; $</p>
                    <p> 9 &nbsp; 0 </p>
                    <hr/>
                    <p> Subtotal: &nbsp; <b>$149.96</b></p>
                    <p>6</p>

                </div>
                </div>

                    </div>


                    <div class = 'col-md-4' style = {{background:' #1d1d3af7', color: 'white', marginTop: '20px', width: '360px', marginLeft: '14px', borderRadius: '50px'}}>
                       <div class ='container'> 
                       <p><h1><center>Payment Info</center></h1></p>
                        <hr/>
                        <p>Payment Method</p>
                       <center>
                        <div class = 'col-md-6'>
                        <button class = 'payment' style = {{color: 'white'}}><FaCreditCard/> Credit Card</button>
                        </div>

                        <div class = 'col-md-6'>
                        <button class ='payment' style = {{color: 'white'}}> <FaPaypal/> <i>PayPal</i></button>
                        <br></br>
                        </div> 
                        </center>

               <div style = {{marginTop: '20px'}}><p><hr/></p></div>

                <p><b style = {{fontSize: '14px',fontWeight: '600'}}>Name on Card</b></p>
                <input class = 'form-control boxy' style = {{color: 'white'}} type = 'text' />

                <p><b style = {{fontSize: '14px',fontWeight: '600'}}>Card Number</b></p>
                <input class = 'form-control boxy' style = {{color: 'white'}} type = 'text' />

                <div class = 'col-md-8'>
                <p><b style = {{fontSize: '14px',fontWeight: '600'}}>Expiration Date</b></p>
                        <div class ='col-md-6'>
                        <select class = 'form-control boxy' style = {{color: 'white'}}>
                            <option>MM</option> 
                            <option> 1 </option> 
                            <option> 2 </option>
                        </select>
                        </div>
                        <div class ='col-md-6'>
                        <select class = 'form-control boxy' style = {{color: 'white'}}>
                            <option>YYYY </option> 
                            <option> 2000 </option> 
                            <option> 3000 </option>
                        </select>
                        </div>
                </div>

                <div class = 'col-md-4'>
                <p><b style = {{fontSize: '14px',fontWeight: '600'}}>CCV</b></p>
                <input class = 'form-control boxy' style = {{marginTop: '-13px'}} type = 'text' />
                </div>

                <div class = 'col-md-12' style = {{marginTop: '40px'}}>
                
                <center><button class = 'checkoutbtn'> Check Out. </button></center>
                
                </div>

                <div style = {{marginTop: '20%', color: 'white'}}> a </div>   



            </div>
                    
                    </div>
                </div>

                </div>

                <div class = 'col-md-1' style = {{color: 'white'}}>
                a
                </div>


            </div>
        )
    }
}