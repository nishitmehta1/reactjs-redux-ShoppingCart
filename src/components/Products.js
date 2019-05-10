import React, { Component } from 'react';
import { Row, Col, Button, Media, Collapse, Card,  } from 'react-bootstrap'

export default class Products extends Component {
	render() {
		const productItems = this.props.products.map( product => (
				<Card style={{ width: '15rem' }}>
				  <Card.Img 
				  	variant="top" 
				  	src="https://www.imagehandler.net/?iset=0100&istyle=0000&fmt=jpg&w=2000&h=2000&cmp=85&c=999&img=A1026199000&iindex=0088&retBlank=1x1" />
				  <Card.Body>
				    <Card.Title>{product.title}</Card.Title>
				    <Card.Text>
				      ${product.price.toFixed(2)}
				    </Card.Text>
				    <Button className="products__addToCart" 
						variant="primary" onClick={(e)=>this.props.handleAddToCart(e, product)}>
						Add to cart 
					</Button>
				  </Card.Body>
				</Card>
			)
		);
		return (
			<div className="row">
				{productItems}
			</div>
		);
	}
}
