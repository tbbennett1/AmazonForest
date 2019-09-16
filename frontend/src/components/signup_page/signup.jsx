import React from 'react';

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

    render() {
        return(
            <div>
                <p>Create Account</p>
                <form onSubmit={this.handleSubmit} >
                    <label>Your Name
                        <input type="text" value={this.state.name} onChange={this.update("name")} />
                    </label>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update("email")} />
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>
                    <label>Re-enter Password
                        <input type="password" value={this.state.password2} onChange={this.update("password2")} />
                    </label>
                    <input type="submit" value="Create your Amazon Forest account" />
                </form>
            </div>
        )
    }
}

export default SignUp;