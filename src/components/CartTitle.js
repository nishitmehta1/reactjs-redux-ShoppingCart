import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class CartTitle extends Component {
	render() {
		return (
			<Row>
				<Col className="cartTitle__col">
					<span className="cartTitle__title">
						<strong>{this.props.value}</strong>
					</span>
				</Col>
			</Row>
		);
	}
}
