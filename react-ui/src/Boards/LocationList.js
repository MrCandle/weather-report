import React, { Component } from 'react';
import { Col, Row, Fade } from 'reactstrap';
import LocationCard from './LocationCard';
import styles from './styles';


class LocationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: props.locations
        }

        this.handleRemoval = this.handleRemoval.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ locations: nextProps.locations })
    }

    handleRemoval(location) {
        this.props.onRemoval(location);
    }

    render() {
        return (
            <Row style={styles.locationList}>
                {this.state.locations.map(loc =>
                    <Col key={loc.woeid} sm='3'>
                        <Fade>
                            <LocationCard handleRemoval={this.handleRemoval} location={loc} />
                        </Fade>
                    </Col>
                )}
            </Row>
        )
    }
}


export default LocationList;