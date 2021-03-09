import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        return(
            <Card>
                <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
    /* {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} */
        let options = { year: "numeric", month: "short", day: "numeric" };
        var List = comments.map(comment => {
            return (
                <li key={comment.id}>
                    {comment.comment}<br/><br/>
                    -- {comment.author}, {new Date(comment.date).toLocaleDateString("en-US", options)}
                    <br/><br/>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {List}
                </ul>
            </div>
        );
    }

    render(){
        if(this.props.dish!=null) {
            return(
                <div className="container">
                <div className="row ">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail; 
