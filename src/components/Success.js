import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'



export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success User Data" />
                    <h1>Thank You For Submitting Your Form!</h1>
                    <p>We will send you an email with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;
