import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

export class TaxesFees extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col md={6} className="summary__title">Ext. Taxes and Fees</Col>
				<Col md={6} className="summary__amount">${this.props.taxes}</Col>
			</Row>

		);
	}
}

export default TaxesFees;