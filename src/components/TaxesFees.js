import React, { Component } from 'react';

import { Row, Col } from 'react-bootstrap';

export class TaxesFees extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col md={6}>Ext. Taxes and Fees</Col>
				<Col md={6}>${this.props.taxes}</Col>
			</Row>

		);
	}
}

export default TaxesFees;