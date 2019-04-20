import React, { Component } from 'react';
import './PartsPriceTotal.css'

class PartsPriceTotal extends Component{
    render(){
        const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);    
        
        return (
        <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
                <div>
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
            </div>
        </div>)
    }
}

export default PartsPriceTotal;
