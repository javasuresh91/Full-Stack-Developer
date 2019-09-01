import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
//Service
import HttpService from '../services/http-services';

//Component
import Product from '../product/product';
import WishList from '../wishlist/wishlist';

const http = new HttpService();

class App extends Component {

    constructor(props) {
        super(props);
        
        this.state = {products:[]};

        //Bind Function in ES6 React
        this.loadData = this.loadData.bind(this);
        this.productList = this.productList.bind(this);

        //calling the binded method
        this.loadData();
    }

    loadData = () => {
        var self = this;
        //.then will execute when the response is received from method call
        //The method return response as success(data) or error(err) , based on that, the method body will execute
        http.getProduct().then(data => {
            //method body
            console.log(data);
            self.setState({products:data});
        }, err => {
            //method body
        });
    }
    
    productList = () => {
        const list = this.state.products.map((prod)=>
            <div className="col-sm-4" key={prod.id}>
                <Product title={prod.title} price={prod.price} 
                    myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
            </div>
        );
        return (list);                                             
    }

    render() {
        /** price and title is the prop of the Product Component*/
        return ( 
            < div className = "App" >
                <div className = "App-header" >
                    <img src = {logo} className = "App-logo" alt = "logo"></img>
                    <h2 > Welcome to React < /h2> 
                </ div > 
                <div className="container-fluid App-main">
                    <div className="row">
                    <div className="col-sm-8">  
                        <div className="row">
                            <Product className="col-sm-4" price="4.25" title="My product" myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
                            <Product className="col-sm-4" price="5.25" title="My product Two" myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
                            <Product className="col-sm-4" price="6.25" title="My product Three" myOwnImg ="https://odditymall.com/includes/content/upload/water-cannon-squirt-gun-with-tripod-5718.jpg"/>
                        
                            {this.productList()}                        
                        </div>
                        
                    </div>
                    <div className="col-sm-4">
                        <WishList/>
                    </div>
                        </div>    
                    
                    
                </div>        
                
            < /div>
        );
    }
}

export default App;
