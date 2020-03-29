import React, { Component } from 'react';
import {signIn,signOut} from '../actions/index'
import {connect} from 'react-redux'

class GoogleAuth extends Component {


    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '840373231043-bucmreg8sqkk2c8k7e099g3o1iiqelad.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    

    onClickSignIn = () => {
        this.auth.signIn()
    }

    onClickSignOut = () => {
        this.auth.signOut()
    }


    renderAuthStatus = () => {
        if(this.props.auth === null) {
            return null
        } else if(this.props.auth){
            return (
            <button onClick={this.onClickSignOut} className="ui red google button">
                <i className="google icon" />
                Sign Out
                </button>
            )
        } else {
            return(
            <button onClick={this.onClickSignIn} className="ui red google button">
                <i  className="google icon" />
                Sign In With Google </button>
                )
        }
    }


    render() {
        
        return (
            <div className='item'>
                {this.renderAuthStatus()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
   auth: state.auth.isSignedIn
})

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)
