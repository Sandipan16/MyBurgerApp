import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  addIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    this.setState({ ingredients: updatedIngredients });
  };

  removeIngredient = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updateCount;
    this.setState({ ingredients: updatedIngredients });
  };

  render() {
    return (
      <Layout>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          onAdd={this.addIngredient}
          onRemove={this.removeIngredient}
        />
      </Layout>
    );
  }
}

export default BurgerBuilder;
