import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardSubtitle } from 'reactstrap';

class LocationCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: props.location
        }
    }

    render() {
        return (
            <Card>
                <CardImg top src="http://l.yimg.com/a/i/us/we/52/26.gif" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.state.location.title}</CardTitle>
                    <CardSubtitle><strong>{this.state.location.condition.temp}º</strong>, {this.state.location.condition.text}</CardSubtitle>
                    <CardText>
                        <div class='row'>
                            {this.state.location.forecast.map(forecast =>
                            {}
                                // <div class='col-sm-6'>
                                //     <label class='col-sm-12'>{forecast.day}, {forecast.date}</label>
                                //     <label class='col-sm-12'>{forecast.text}</label>
                                //     <label class='col-sm-12'>High: {forecast.high}</label>
                                //     <label class='col-sm-12'>Low: {forecast.low}</label>
                                // </div>
                            )}
                        </div>
                    </CardText>
                    {this.state.location.isSelected ?
                        <Button outline color="primary" size='sm' onClick={this.props.handleToggle}>Remove from board</Button> :
                        <Button color="primary" size='sm' onClick={this.props.handleToggle}>Add to board</Button>}
                </CardBody>
            </Card>
        )
    }
}

export default LocationCard;