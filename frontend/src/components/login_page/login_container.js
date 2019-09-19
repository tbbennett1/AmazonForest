import { connect } from 'react-redux';
// import React from 'react';
import { login } from '../../actions/session_actions';
import Login from './login';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);