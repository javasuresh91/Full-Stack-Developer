import React, {
    Component
} from 'react';
import './product.css';

class Product extends Component {
    /** Props can be accessed as below,
    So the value passed in the parent will be get replaced here*/
    render() {
        return(
            <div className = "card product" >
                <img className = "card-img-top" alt = "Product" src={this.props.myOwnImg}/> 
                <div className = "card-block" >
                    <h4 className = "card-title" >{this.props.title} < /h4> 
                    <p className = "card-text" > Price: {this.props.price}< /p> 
                    <a href = "#" className = "btn btn-primary" > Add to Wishlist < /a> 
                < /div > 
            < /div>
        );
        
    }
}
                
export default Product;
