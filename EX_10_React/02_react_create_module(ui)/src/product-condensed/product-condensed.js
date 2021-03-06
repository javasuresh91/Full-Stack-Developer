import React,{Component} from 'react';
import './product-condensed.css'

class ProductCondensed extends Component {
    
    render() {
        return (
            <li className="list-group-items pc-condensed">
                <a className="btn btn-outline-danger">X</a>
                {this.props.product.title} | <b>{this.props.product.price}</b>
            </li>
        );
    }
}

export default ProductCondensed;