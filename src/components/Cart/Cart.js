import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import AddressForm from "../AddressForm";

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart"></Title>
                  <CartColumns></CartColumns>
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return (
                <div className="justify-content-md-center">
                  {/* <CartTotals /> */}
                  <EmptyCart />
                  <AddressForm />
                </div>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
