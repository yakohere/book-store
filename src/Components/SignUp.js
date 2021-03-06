import React, { Component } from "react";
import styled from "styled-components";
import Aux from "../UI/Auxiliary";
import SignUpPic from "../assets/signup.png";

class SignUp extends Component {
  render() {
    return (
      <Aux>
        <Backdrop onClick={this.props.clicked}></Backdrop>
        <LoginDiv>
          <div onClick={this.props.clicked} className="closer">
            x
          </div>
          <div className="mail">Please fill the information below.</div>
          <input type="text" placeholder="Name" />
          <br />
          <input type="text" placeholder="E-mail" />
          <br />
          <input type="text" placeholder="Password" />
          <br />
          <input type="text" placeholder="Repeat Password" />
          <div className="submit">
            <button>Submit</button>
          </div>

          {/*<hr style={{ width: "100px" }} />
          <div className="social">Or Sign up with Socail Media</div>
          <div className="social-networks">
            <div className="facebook">Facebook</div>
            <div className="google">Google</div>
    </div>*/}
        </LoginDiv>
      </Aux>
    );
  }
}

export default SignUp;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 200;

  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const LoginDiv = styled.div`
  position: fixed;
  background-image: url(${SignUpPic});
  width: 550px;
  z-index: 300;
  height: 550px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow: hidden;

  font-family: "Raleway", sans-serif;

  .closer {
    background-color: white;
    opacity: 0.6;
    position: relative;
    left: 30px;
    width: 15px;
    cursor: pointer;
    border: 1px solid grey;
  }

  .mail {
    position: center bottom;
    font-size: 17px;
    padding: 5px;
  }

  .social {
    position: center bottom;
    font-size: 15px;
    padding: 5px;
  }

  input {
    padding: 5px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  .submit {
    padding: 5px;
  }

  button {
    cursor: pointer;
    padding: 7px;
    width: 100px;
    background: rgb(149, 132, 255);
    background: linear-gradient(
      90deg,
      rgba(149, 132, 255, 1) 0%,
      rgba(255, 102, 196, 1) 100%
    );
    color: white;
    box-sizing: border-box;
    border: 2px solid white;
    border-radius: 20px;
  }

  button:hover {
    background: linear-gradient(
      90deg,
      rgba(255, 102, 196, 1) 0%,
      rgba(149, 132, 255, 1) 100%
    );
  }

  .social-networks {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .facebook {
    width: 70px;
    border: 1px solid black;
    padding: 5px;
    border-right: none;
    background-color: #6077a8;
    color: white;
  }

  .google {
    width: 70px;
    border: 1px solid black;
    padding: 5px;
  }
`;
