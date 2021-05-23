import React from 'react'
//import Background from '../images/Remit-body.PNG'
const BG = '../images/Remita-body.PNG'
const child = {
  name: 'Joel Pakistan',
  sex: 'Male',
  age: 12,
}
//let imgUrl = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';
//const Background = '../images/Remit-body.PNG';
// const background = 'pink url("https://media.giphy.com/media/oyr89uTOBNVbG/giphy.gif") fixed';

const logoStyle = {
  width: '23%',
}
const Container = {
  width: '100%',
}

const lefty = {
  float: 'left',
  lineHeight: '0px',
}

const colmd4 = {
  width: '33.33%',
  float: 'left',
}
const textBoxStyle = {
  width: '100%',
  background: 'transparent',
  borderTop: 'transparent',
  borderLeft: 'transparent',
  borderRight: 'transparent',
  borderBottomColor: 'black',
  borderRadius: '0px',
  boxShadow: 'none',
  fontSize: '16px',
}

const buttonStyle = {
  height: '50px',
  width: '150px',
  color: 'black',
  background: 'white',
  fontSize: '16px',
  borderRadius: '10px',
  cursor: 'pointer',
}
const h4Style = {
  fontWeight: 400,
  lineHeight: '0px',
}
const colmd12 = {
  width: '100%',
}
export class TryOuts extends React.Component {
  render() {
    return (
      <div>
        <div style={Container}>
          <div style={colmd4}>
            <div>REMIT</div>
          </div>

          <div style={colmd4}>
            <div style={{ marginTop: '40px' }}>
              <center>
                <img src="images/Login-logo.PNG" style={logoStyle}></img>
                <h2> SIGN IN </h2>
                <h4 style={h4Style}>
                  {' '}
                  Hello there. Sign in and start managing your bank items{' '}
                </h4>

                <div style={{ width: '100%', marginTop: '40px' }}>
                  <div style={colmd12}>
                    <p style={lefty}>
                      <b>email</b>
                    </p>
                    <input type="email" style={textBoxStyle}></input>
                  </div>

                  <div style={{ width: '100%', marginTop: '15px' }}>
                    <p style={lefty}>
                      <b>password</b>
                    </p>
                    <input type="password" style={textBoxStyle}></input>
                  </div>

                  <div style={{ width: '100%', marginTop: '50px' }}>
                    <button style={buttonStyle}>
                      SIGN IN NOW <b>:)</b>
                    </button>
                  </div>

                  <p> Forgot Password? Reset Here. </p>

                  <p style={{ marginTop: '40px' }}>
                    {' '}
                    &copy; Spenc Note Inc. All rights reserved 2006
                  </p>
                </div>
              </center>
            </div>
          </div>

          <div style={colmd4}>
            <div>Hi, Im the last DIV</div>
          </div>
        </div>
      </div>
    )
  }
}
