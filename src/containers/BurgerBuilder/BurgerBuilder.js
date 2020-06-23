import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  meat: 1.3,
  salad: 0.7,
  cheese: 0.8,
  bacon: 1.1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  render() {
    const disableinfo = {
      ...this.state.ingredients
    };

    for (let key in disableinfo) {
      disableinfo[key] = disableinfo[key] <= 0;
    }
    return (
      <Layout>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onAdd={this.addIngredient}
          onRemove={this.removeIngredient}
          disabled={disableinfo}
          price={this.state.totalPrice}
        />
      </Layout>
    );
  }
}

export default BurgerBuilder;
