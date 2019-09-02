import React, {
    Component
} from 'react';
import './product.css';
import DataService from '../services/data-service'

let db = new DataService();

class Product extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClicked =  this.onButtonClicked.bind(this);
    }
    
    onButtonClicked = () => {
        var data = {
            "id" : this.props.myId,
            "title" : this.props.title,
            "prd_like": 0,
            "price" : this.props.price            
        }
        db.addWishListItem(data);
    }
    
    /** Props can be accessed as below,
    So the value passed in the parent will be get replaced here*/
    render() {
        return(
            <div className = "card product" >
                <img className = "card-img-top" alt = "Product" src={this.props.myOwnImg}/> 
                <div className = "card-block" >
                    <h4 className = "card-title" >{this.props.title} < /h4> 
                    <p className = "card-text" > Price: {this.props.price}< /p> 
                    <a href = "#" onClick={() => this.onButtonClicked() } className = "btn btn-primary" > Add to Wishlist < /a> 
                < /div > 
            < /div>
        );
        
    }
}
                
export default Product;
