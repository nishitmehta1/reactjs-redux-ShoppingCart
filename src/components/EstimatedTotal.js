import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class EstimatedTotal extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col md={6} className="summary__title estTotal__title">Est. Total:</Col>
				<Col md={6} className="summary__amount estTotal__amount">${this.props.price}</Col>
			</Row>
		);
	}
}

export default EstimatedTotal;
