import React, { Component } from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

export class PickupSavings extends Component {
	render() {
		const tooltip = (
			<Tooltip id="tooltip">
				<p>Tooltip Demo</p>
			</Tooltip>
		);
		return (
			<Row className="show-grid">
				<Col md={6}>
					<OverlayTrigger palcement="bottom" overlay={tooltip}>
						<div className="pickupSavings__text">
							Pickup Savings				
						</div>
					</OverlayTrigger>
				</Col>
				<Col className="pickupSavings__amount" md={6}>
					${this.props.price}
				</Col>
			</Row>
		);
	}
}

export default PickupSavings