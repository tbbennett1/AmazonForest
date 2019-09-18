import React from 'react';
import {Link} from 'react-router-dom';

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
    }

    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
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
        return <label className="error hidden" id="name-error">test</label>
    }

    renderEmailError(){

    }

    renderPasswordError(){
        return <label className="password2">Password must be at least 6 characters.</label>
    }

    renderPasswordError2(){

    }

    render() {
        return(
            <div className="session-body">
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
                            <div>Already have and account? <Link to="/login">Sign-In</Link></div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;