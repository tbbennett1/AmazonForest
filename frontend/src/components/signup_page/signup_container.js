import { connect } from 'react-redux';
// import React from 'react';
import { signup } from '../../actions/session_actions';
import SignUp from './signup';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signup: user => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);