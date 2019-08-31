import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-services';
import Product from '../product/product';

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
        /** price and title is the prop of the Product Component*/
        return ( 
            < div className = "App" >
                <div className = "App-header" >
                    <img src = {logo} className = "App-logo" alt = "logo"></img>
                    <h2 > Welcome to React < /h2> 
                </ div > 
                <div className="container App-main">
                    <div className="row">
                        <Product className="col-sm-4" price="4.25" title="My product" myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
                        <Product className="col-sm-4" price="5.25" title="My product Two" myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
                        <Product className="col-sm-4" price="6.25" title="My product Three" myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
                    </div>
                    
                </div>        
                
            < /div>
        );
    }
}

export default App;
