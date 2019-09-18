import React from 'react';
import {Link} from 'react-router-dom';
import BlackLogo from '../../assets/images/forest_icon_black.png'

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderNameError = this.renderNameError.bind(this);
        this.renderPasswordError = this.renderPasswordError.bind(this);
        this.renderPasswordError2 = this.renderPasswordError2.bind(this);
    }

    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    cleanErrors(field){
        let elementId = `${field}` + '-error'
        let element = document.getElementById(field)
        let errorElement = document.getElementById(elementId)
        if (element) this.removeRedBorder(field)
        if (errorElement && Array.from(errorElement.classList).includes("active")) errorElement.remove("active")
    }

    valid(field){
        if (field === "email") {
            if (this.validateEmail(this.state.email)) {
                this.cleanErrors(field)
            }
        }

        // if (this.state[field]) {
        //     this.cleanErrors(field)
        // }

    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.email) {
            if (this.validateEmail(this.state.email)){
                this.cleanErrors("email")
            }
        }

        if (this.state.password) {
            if (this.state.password.length >= 6){
            this.cleanErrors("password")
            }
        }

        if (this.state.name){
            this.cleanErrors("name")
        }

        if (this.state.password2 && this.state.password && this.state.password === this.state.password2){
            this.cleanErrors("password2")
        }

        if (this.props.errors.session != prevProps.errors.session) {
            const { name, email, password, password2 } = this.props.errors.session

            if (email && (email.includes("required") || email.includes("invalid") || password.includes("must"))) {
                let element = document.getElementById("email-error")
                if (element) {
                    element.textContent = email
                    element.classList.add("active")
                    this.addRedBorder("email")
                }
            }

            if (name && (name.includes("required") || name.includes("must"))) {
                let element = document.getElementById("name-error")
                if (element) {
                    element.textContent = name
                    element.classList.add("active")
                    this.addRedBorder("name")
                }
            }

            if (password && (password.includes("required") || password.includes("must"))) {
                let element = document.getElementById("password-error")
                if (element) {
                    element.textContent = password
                    element.classList.add("active")
                    this.addRedBorder("password")
                }
            }

            if (password2 && (password2.includes("required") || password2.includes("must"))) {
                let element = document.getElementById("password2-error")
                if (element) {
                    element.textContent = password2
                    element.classList.add("active")
                    this.addRedBorder("password2")
                }
            }

        }

    }

    handleSubmit(e){
        e.preventDefault();
        const user = {
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2,
            email: this.state.email,
        } 
        // debugger
        this.props.signup(user)
    }

    renderNameError(){
        return <label className="error hidden" id="name-error"></label>
    }

    renderEmailError(){
        return <label className="error hidden" id="email-error"></label>
    }

    renderPasswordError(){
        if (this.props.errors.session.password) {
            return <label className="error hidden" id="password-error"></label>
        } else
        return <label className="error password">Password must be at least 6 characters.</label>
    }

    renderPasswordError2(){
        return <label className="error hidden" id="password2-error"></label>
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
                <Link to="/"><img src={BlackLogo} alt="" /></Link>
                <div className="session-box">
    
                    <div>
                        <form onSubmit={this.handleSubmit} className="session-form">
                        <div>
                            <h1>Create Account</h1>
                            <div className="form-input-box">
                                <label>Your Name</label>
                                    <input type="text" 
                                    value={this.state.name} 
                                    onChange={this.update("name")}
                                    id="name" 
                                    />
                                {this.renderNameError()}
                            </div>
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
                            <div className="form-input-box">
                                <label>Re-enter Password</label>
                                <input type="password" 
                                value={this.state.password2} 
                                onChange={this.update("password2")} 
                                id="password2"
                                />
                                {this.renderPasswordError2()}
                            </div>
        
                            <div className="form-orange-button">
                                <input type="submit" value="Create your Amazon Forest account" />
                            </div>
                            <div className="session-box-legal">
                                By creating an account, you agree to Amazon Forest's <a href="">Conditions of Use</a> and <a href="">Privacy Notice.</a>
                            </div>
                            <div className="form-divider">
                                <div className="form-divider-inner">
                            </div>
                            </div>
                            <div className="link-to-login">Already have and account? <Link to="/login">Sign-In</Link></div>
                        </div>
                        </form>
                    </div>
                </div>
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

export default SignUp;