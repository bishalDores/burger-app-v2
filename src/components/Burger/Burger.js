import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    /*
    ..................... My Way of Doing It !!!!! .........................
    const transformedIngredients = Object.keys(props.ingredients)
    const ingredientsValue = Object.values(props.ingredients)
    const finalIngredients = [];
        // .map(igKey => {
        //     // console.log(igKey)
        //     // console.log(props.ingredients[igKey])
        //     return [...Array(props.ingredients[igKey])]
        //         .map((_,i)=>{
        //               return <BurgerIngredient key={igKey + i} type={igKey}/>
        //         })
        // });
    // console.log(transformedIngredients);
    // console.log(ingredientsValue);

    for(let i=0;i<ingredientsValue.length;i++){
        for(let j=0;j<ingredientsValue[i];j++){
            finalIngredients.push(transformedIngredients[i]);
        }
    }
    const burgerIngredient = finalIngredients.map((item,key)=>{
        return <BurgerIngredient type={item} key={key}/>;
    });
    console.log(burgerIngredient);
    */

    /* -------------Maximillan way-------------------------*/

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_,i)=>{
                    return <BurgerIngredient key={igKey + i} type={igKey}/>
                })
        }).reduce((arr,el)=>{
            // console.log("arr is "+ arr + " el is " + el);
           return arr.concat(el)
        },[]);
    //console.log(transformedIngredients)
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            {/*{burgerIngredient}*/}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default burger;