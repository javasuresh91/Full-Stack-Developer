import React, {Component} from 'react';
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

import DataService from '../services/data-service';
import NotificationService,{NOTIF_WISHLIST_CHANGED} from '../services/notification-services';

let ns = new NotificationService();

class WishList extends Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {wishList:[]}
        
        //bind Functions
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    
    //React Some life cycle method - Starts
    
    componentDidMount() {
        console.log("WishList Component Loaded")
        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged);
    }
    componentWillUnmount() {
        console.log("WishList Component unloadLoaded")
        ns.removeObserver(this,NOTIF_WISHLIST_CHANGED);
    }
    
    onWishListChanged(newWishList) {
        console.log("WishList Component Changed")
        this.setState({wishList: newWishList});
    }
    
    //React Some life cycle method - Ends
    
    createWishList = () => {
        const list = this.state.wishList.map((product)=>
            <ProductCondensed product={product} key={product.id}/>
        );
                                             
        return (list);
    }
    
    render()  {
        return(
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;
