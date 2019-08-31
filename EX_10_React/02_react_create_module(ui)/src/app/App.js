import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-services'

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);

        //Bind Function in ES6 React
        this.loadData = this.loadData.bind(this);

        //calling the binded method
        this.loadData();
    }

    loadData = () => {
        //.then will execute when the response is received from method call
        //The method return response as success(data) or error(err) , based on that, the method body will execute
        http.getProduct().then(data => {
            //method body
            console.log(data);
        }, err => {
            //method body
        });
    }

    render() {
        return ( < div className = "App" >
            <
            div className = "App-header" >
            <
            img src = {
                logo
            }
            className = "App-logo"
            alt = "logo" / >
            <
            h2 > Welcome to React < /h2> </div > <
            p className = "App-intro" >
            To get started, edit < code > src / App.js < /code> and save to reload. < /
            p > <
            /div>
        );
    }
}

export default App;
