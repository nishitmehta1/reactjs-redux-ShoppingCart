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
				<Button className="item-details-button" bsStyle="link" onClick={() => this.setState({open: !this.state.open})}>
					{this.state.open === false ? `See` : `Hide`} item Details 
					{this.state.open === false ? ` +` : ` -`}
				</Button>
				<Collapse in={this.state.open}>
					<div>
						<Media>
							<img width={100}
								src="https://via.placeholder.com/50" 
								alt="Item Alt" />
							<Media.Body>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, vitae.</p>
								<Row className="show-grid">
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
