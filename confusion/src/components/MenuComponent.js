// import React, { Component } from 'react';
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// class Menu extends Component {

//     // onDishSelect(dish){
//     //     this.setState({ selectedDish : dish });
//     // }

//     // renderDish(dish){
//     //     if(dish!=null){
//     //         return(
//     //             <Card>
//     //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//     //                 <CardBody>
//     //                     <CardTitle>{dish.name}</CardTitle>
//     //                     <CardText>{dish.description}</CardText>
//     //                 </CardBody>
//     //             </Card>
//     //                 <DishDetail selectedDish={this.state.selectedDish} />
//     //         );
//     //     }
//     //     else{
//     //         return(
//     //             <div></div>
//     //         );
//     //     }
//     // }

//     render() {
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     <Card onClick={() => this.props.onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>
//             );
//         });

//         return ( 
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                 </div>
//             </div>
//         );
//     }
// }

function RenderMenuItem( {dish} ){
    return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) =>{
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    
    return ( 
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;