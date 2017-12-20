import React, { Component } from 'react';
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
        this.props.handleRemoval(location);
    }

    render() {
        return (
            <div class="row" style={styles.locationList}>
                {this.state.locations.map(loc =>
                    <div class="col-sm-3">
                        <LocationCard handleRemoval={this.handleRemoval} location={loc} />
                    </div>
                )}
            </div>
        )
    }
}


export default LocationList;