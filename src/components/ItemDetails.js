import React, { Component } from 'react';
import { Row, Col, Button, Media, Collapse } from 'react-bootstrap'

export default class ItemDetails extends Component {
	constructor(props){
		super(props)
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<div>
				<Button className="item-details-button" 
					variant="link" onClick={() => this.setState({open: !this.state.open})}>
					{this.state.open === false ? `See` : `Hide`} item Details 
					{this.state.open === false ? ` +` : ` -`}
				</Button>
				<Collapse in={this.state.open}>
					<div>
						<Media>
							<img className="item-details__thumbnail" width={100}
								src="https://images-na.ssl-images-amazon.com/images/I/61PURpRGKQL._SL1000_.jpg" 
								alt="Item Alt" />
							<Media.Body className="mediaBody__text">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, vitae.
								</p>
								<Row className="show-grid item-details__price">
									<Col md={6}>
										<strong>${this.props.price}</strong>
										<br/>
										<strong className="price-strike">${this.props.price}</strong>
									</Col>
									<Col md={6}>
										Qty: 1
									</Col>
								</Row>
							</Media.Body>
						</Media>
					</div>
				</Collapse>
			</div>
		);
	}
}
