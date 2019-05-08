import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal';
import { Row, Col } from 'react-bootstrap';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';
import "./App.css";
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 100,
      pickupSaving: -3.21,
      taxes: 0,
      estTotal: 0,
      disabledPromoButton: false
    }
  }

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
  }
  
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
  }

  render() {
    return (
      <div className="container col-md-3">
        <Container className="purchase-card">
          <Row>
            <Col>
              <Subtotal price={this.state.total.toFixed(2)} />
              <PickupSavings price={this.state.pickupSaving}></PickupSavings>
              <TaxesFees taxes={this.state.taxes.toFixed(2)}></TaxesFees>
              <hr/>
              <EstimatedTotal price={this.state.estTotal.toFixed(2)}></EstimatedTotal>
              <ItemDetails price={this.state.estTotal.toFixed(2)}></ItemDetails>
              <hr/>
              <PromoCode 
                giveDiscount={() => this.giveDiscountHandler()} 
                isDisabled={this.state.disabledPromoButton} 
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.values
})

export default connect(mapStateToProps, { handleChange })(App);
