import React, { Component } from 'react';
import LocationCard from './LocationCard';
import styles from './styles';


class LocationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: props.locations
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ locations: nextProps.locations })
    }

    render() {
        return (
            <div class="row" style={styles.locationList}>
                {this.state.locations.map(loc =>
                    <div class="col-sm-3">
                        <LocationCard handleToggle={() => this.props.handleToggle(loc)} location={loc} />
                    </div>
                )}
            </div>
        )
    }
}


export default LocationList;