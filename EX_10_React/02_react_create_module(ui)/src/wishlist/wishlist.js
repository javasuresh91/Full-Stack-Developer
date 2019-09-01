import React, {Component} from 'react';
import './wishlist.css';

import ProductCondensed from '../product-condensed/product-condensed';

class WishList extends Component {
    
    
    constructor(props) {
        super(props);
        
        this.state = {wishList:[
            {
                "title":"Soap",
                "price" : 12.5,
                "id":8
            },
            {
                "title":"Gum",
                "price" : 72.5,
                "id":9
            }
            
        ]}
        
        //bind Functions
        this.createWishList = this.createWishList.bind(this);
    }
    
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
