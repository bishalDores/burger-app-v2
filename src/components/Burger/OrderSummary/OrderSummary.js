import React, { Component } from 'react';
import Aux from '../../../hoc/ReactAux/ReactAux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
// This could be a functional component !!
    componentWillUpdate(){
        console.log("[OrderSummary] will update")
    };

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igkey=>{
                return (
                    <li key={igkey}>
                        <span style={{textTransform:'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}
                    </li>
                )
            }) ;
        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;