import React from 'react';
import { Link } from 'react-router-dom';
import BlackLogo from '../../assets/images/forest_icon_black.png'
import { MdErrorOutline } from "react-icons/md";

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderEmailError = this.renderEmailError.bind(this);
        this.renderPasswordError = this.renderPasswordError.bind(this);
    }

    
    update(field){
        if(this.state[field]){
        let elementId = `${field}` + '-error'
        let element = document.getElementById(field)
        let errorElement = document.getElementById(elementId)
        if (element) this.removeRedBorder(field)
        if (errorElement && Array.from(errorElement.classList).includes("active")) errorElement.remove("active")
        }
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const user = {
            password: this.state.password,
            email: this.state.email,
        } 
        // debugger
        this.props.login(user)
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.email) {
            let element = document.getElementById("email-error")
            if (element) {
                element.classList.remove("active")
            }
        }
        if (this.state.password) {
            let element = document.getElementById("password-error")
            if (element) {
                element.classList.remove("active")
            }
        }
        
        if (this.props.errors.session != prevProps.errors.session) {
            const { email, password } = this.props.errors.session

            if (email && email.includes("required")) {
                let element = document.getElementById("email-error")
                if (element) {
                    element.textContent = email
                    element.classList.add("active")
                    this.addRedBorder("email")
                }
            }
            
            if (password && password.includes("required")) {
                let element = document.getElementById("password-error")
                if (element) {
                    element.textContent = password
                    element.classList.add("active")
                    this.addRedBorder("password")
                }
            }


            if ((email && (email.includes("invalid"))) || (email && (email.includes("user"))) || (password && password.includes("Incorrect"))) {
                let element = document.getElementById("session-error")
                if (element) element.classList.add("active")
            }
        }

    }

    renderEmailError(){
        return <label className="error hidden" id="email-error"></label>
    }

    renderPasswordError(){
        return <label className="error hidden" id="password-error"></label>
    }

    addRedBorder(elementId) {
        const element = document.getElementById(elementId)
        if (element) element.classList.add("red-border")
    }

    removeRedBorder(elementId) {
        const element = document.getElementById(elementId)
        if (element) element.classList.remove("red-border")
    }

    render() {
        return(
            <div>
                <div className="session-body">
                <Link to="/"><img src={BlackLogo} alt=""/></Link>
                    <div className="session-error" id="session-error">
                        <div>
                            <MdErrorOutline/>
                            <h4>There was a Problem</h4>
                            <div>
                                We cannot find an account with that email address
                            </div>
                        </div>
                    </div>
                    <div className="session-box">
                        
                        <div>
                            <form onSubmit={this.handleSubmit} >
                            <div>
                                <h1>Sign-In</h1>
                                <div className="form-input-box">
                                        <label>Email</label>
                                        <input type="text" 
                                        value={this.state.email} 
                                        onChange={this.update("email")}
                                        id="email"
                                        />
                                        {this.renderEmailError()}
                                </div>
                                <div className="form-input-box">                           
                                        <label>Password</label>
                                        <input type="password" 
                                        value={this.state.password} 
                                        onChange={this.update("password")}
                                        id="password"
                                        />
                                        {this.renderPasswordError()}
                                </div>
                                <div className="form-orange-button">   
                                    <input type="submit" value="Continue" />
                                </div>
                                <div className="session-box-legal">
                                        By continuing, you agree to Amazon Forest's <a href="">Conditions of Use</a> and <a href="">Privacy Notice.</a>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
    
                    <div className="session-divider-break">
                            <h5>
                                New to Amazon Forest?
                            </h5>
                    </div>
                    <Link to="/signup" className="form-orange-button session-gray-button">Create your Amazon Forest Account</Link>
                </div>
                <div className="session-footer">
                    <div className="form-divider">
                        <div className="form-divider-inner"></div>
                    </div>
                    <div className="session-footer-links">
                        <div>
                            <a href="">Conditions of Use</a>
                            <a href="">Privacy Notice</a>
                            <a href="">Help</a>
                        </div>
                    </div>
                    <div className="session-footer-copyright">
                        © 2019-2019, Amazon Forest, Inc. or its affiliates
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;