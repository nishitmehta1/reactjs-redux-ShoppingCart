import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class EstimatedTotal extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col md={6} className="summary__title"><h5>Est. Total:</h5></Col>
				<Col md={6} className="summary__amount"><h5>${this.props.price}</h5></Col>
			</Row>
		);
	}
}

export default EstimatedTotal;
