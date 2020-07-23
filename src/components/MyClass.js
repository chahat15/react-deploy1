import React, { Component } from 'react';
import SignUp from './components/SignUp.js';

class MyClass extends Comment {
    state = {
        accounts : [
            { 
                email:'chahatvijay15@gmail.com',
                firstname: 'chahat', 
                lastname: 'vijay', 
                password: 'chahat1999' , 
                id: 1 
            },
            { 
                email:'John.doe@gmail.com',
                firstname: 'John', 
                lastname:'Doe', 
                password: 'dust011', 
                id: 2 
            },
        ]
    }
    LoggingIn = (user) => {
        user.id = Math.random();
        let accounts = [...this.state.accounts,user];
        this.setState({
            accounts : accounts
        })
        console.log(this.state.accounts);
    }

    render(){
        return(
            <div>
                <SignUp LoggingIn={this.LoggingIn}/>
            </div>
        )
    }
}