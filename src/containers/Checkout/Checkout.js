import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state={
        // ingredients:{
        //     salad: 1,
        //     meat:1,
        //     cheese:1,
        //     bacon:1
        // },
        ingredients:null,
        totalPrice: 0
    };

    componentWillMount(){
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            // console.log(param)
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] = +param[1]
            }
        }
        this.setState({ingredients:ingredients,totalPrice:price});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };
    render(){
        // console.log(this.props)
        return(
            <div>
                <CheckoutSummary
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + '/contact-data'}
                       render={(props)=>(<ContactData  ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}/>
            </div>
        )
    }
}
export default Checkout;