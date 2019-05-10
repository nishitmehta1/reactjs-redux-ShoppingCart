import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal';
import { Row, Col } from 'react-bootstrap';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import CartTitle from './components/CartTitle.js';
import PromoCode from './components/PromoCode';
import Products from './components/Products';
import "./App.css";
import { connect } from 'react-redux';
import db from './db.js';
import { handleChange } from './actions/promoCodeActions';
import { HashRouter, Route, Link, BrowserRouter } from "react-router-dom";

// https://www.imagehandler.net/?iset=0100&istyle=0000&fmt=jpg&w=2000&h=2000&cmp=85&c=999&img=A1026199000&iindex=0088&retBlank=1x1

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      pickupSaving: 0,
      taxes: 0,
      estTotal: 0,
      disabledPromoButton: false,
      products: [],
      filteredProducts: [],
      cartItems: []
    }
  }

  componentWillMount = () => {
    console.log(db)
    const data = db;
    this.setState({
      products: data.products,
      filteredProducts: data.products
    });
  };

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.pickupSaving) * 0.0875
    }, 
      function() {
        this.setState({
          estTotal: 
          this.state.total + this.state.pickupSaving + this.state.taxes
        })
      }
    )
  };
  
  giveDiscountHandler = () => {
    // console.log(this.props.promoCode)
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estTotal: this.state.estTotal  * 0.9
      },
      function(){
        this.setState({
          disabledPromoButton: true
        })
      }
      )
    }
  };
  
  handleAddToCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        if (cp.id === product.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      return { cartItems: cartItems };
    }, function() {
        this.setState({
          total: this.state.total + product.price
        }, function() {
            this.setState({
              taxes: (this.state.total + this.state.pickupSaving) * 0.0875
            }, 
              function() {
                this.setState({
                  estTotal: 
                  this.state.total + this.state.pickupSaving + this.state.taxes
                })
              }
            )
        })
      }
    );
  };

  handleRemoveFromCart = (e, product) => {
      for (var i = 0; i < this.state.cartItems.length; i++) {
        if (this.state.cartItems[i].id === product.id) {
          break;
        }
      }
      
      let cartItems = this.state.cartItems
      cartItems[i].count--
      if (cartItems[i].count === 0){
        cartItems = this.state.cartItems.filter(a => a.id !== product.id)
      }
      
      this.setState({
        cartItems: cartItems
      }, function() {
          this.setState({
            total: this.state.total - product.price
          }, function() {
            this.setState({
              taxes: (this.state.total + this.state.pickupSaving) * 0.0875
            }, 
              function() {
                this.setState({
                  estTotal: 
                  this.state.total + this.state.pickupSaving + this.state.taxes
                })
              }
            )
          }
        )
      })
  };

  render() {
    return (
     <BrowserRouter basename="/reactjs-redux-ShoppingCart/">
        <div className="container">
          <Row>
            <Col md={8}>
              <Products 
                filteredProducts={this.state.filteredProducts} products={this.state.products}
                handleAddToCart={this.handleAddToCart}
              />
            </Col>
            <Col md={4}>
              <Container className="purchase-card main_app">
                <Row>
                  <Col>
                    <CartTitle value="SUMMARY"></CartTitle>
                    <Subtotal price={this.state.total.toFixed(2)} />
                    <PickupSavings price={this.state.pickupSaving}></PickupSavings>
                    <TaxesFees taxes={this.state.taxes.toFixed(2)}></TaxesFees>
                    <hr/>
                    <EstimatedTotal price={this.state.estTotal.toFixed(2)}></EstimatedTotal>
                    <ItemDetails handleRemoveFromCart={this.handleRemoveFromCart} cartItems={this.state.cartItems} price={this.state.estTotal.toFixed(2)}></ItemDetails>
                    <hr/>
                    <PromoCode 
                      giveDiscount={() => this.giveDiscountHandler()} 
                      isDisabled={this.state.disabledPromoButton} 
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = state => ({
  promoCode: state.promoCode.values
})

export default connect(mapStateToProps, { handleChange })(App);
