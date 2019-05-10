import React, { Component } from 'react';
import { Row, Col, Button, Media, Collapse } from 'react-bootstrap'

export default class ItemDetails extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: true
		}
	}
	
	render() {
		const cartItems = this.props.cartItems;
		console.log(cartItems)
		return (
			<div className="itemDetails__div">
				{cartItems.length===0 ? "Cart is empty." :
					<div>
						<Button className="item-details-button" 
							variant="link" onClick={() => this.setState({open: !this.state.open})}>
							{this.state.open === false ? `See` : `Hide`} item Details 
							{this.state.open === false ? ` +` : ` -`}
						</Button>

						<Collapse in={this.state.open}>
							<div className="itemDetails__list">
							{cartItems.map(cartItem => (
								<Media>
									<img className="item-details__thumbnail" width={100}
										src="https://www.imagehandler.net/?iset=0100&istyle=0000&fmt=jpg&w=2000&h=2000&cmp=85&c=999&img=A1026199000&iindex=0088&retBlank=1x1" 
										alt="Item Alt" />
									<Media.Body className="mediaBody__text">
										<p>
											{cartItem.title}
										</p>
										<Button 
											variant="danger" 
											size="sm"
											onClick={(e) => this.props.handleRemoveFromCart(e, cartItem)}
										>
											X
										</Button>
										<Row className="show-grid item-details__price">
											<Col md={6}>
												<strong>${(cartItem.price * cartItem.count).toFixed(2)}</strong>
												<br/>
											</Col>
											<Col md={6}>
												Qty: {cartItem.count}
											</Col>
										</Row>
									</Media.Body>
								</Media>
							))}
							</div>
						</Collapse>
					</div>
				}
			</div>
		);
	}
}
