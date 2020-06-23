import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    totalPrice: 4,
    purchasable: false
  };

  updatePursable = updatedIngredients => {
    const sum = Object.values(updatedIngredients).reduce((accum, curr) => {
      return accum + curr;
    }, 0);

    this.setState({ purchasable: sum > 0 });
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
    this.updatePursable(updatedIngredients);
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
    this.updatePursable(updatedIngredients);
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
        <OrderSummary ingredients={this.state.ingredients} />
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onAdd={this.addIngredient}
          onRemove={this.removeIngredient}
          disabled={disableinfo}
          price={this.state.totalPrice}
          purchased={this.state.purchasable}
        />
      </Layout>
    );
  }
}

export default BurgerBuilder;
