import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    update(field){
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

    render() {
        return(
            <div>
                <div className="session-body">
                    <div className="session-box">
                        
                        <div>
                            <form onSubmit={this.handleSubmit} >
                            <div>
                                <h1>Sign-In</h1>
                                <div className="form-input-box">
                                        <label>Email</label>
                                        <input type="text" value={this.state.email} onChange={this.update("email")} />
                                </div>
                                <div className="form-input-box">                           
                                        <label>Password</label>
                                        <input type="password" value={this.state.password} onChange={this.update("password")} />
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
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default Login;