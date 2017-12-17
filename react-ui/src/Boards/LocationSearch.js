import React, { Component } from 'react';
import { Async } from 'react-select';
import locationApi from '../api/locationApi';
import styles from './styles';

class LocationSearch extends Component {

    request;

    constructor(props) {
        super(props);

        this.getLocations = this.getLocations.bind(this);
    }

    getLocations(input) {
        return new Promise(resolve => {
            clearTimeout(this.request);
            if (!input) {
                return resolve({ options: [] });
            }
            this.request = setTimeout(() => {
                return locationApi.getLocationsByText(input)
                    .then((json) => {
                        resolve({ options: json });
                    });
            }, 500);
        });
    }

    render() {
        return (
            <div class="row" style={styles.locationSearch}>
                <Async className="col-sm-12" onChange={this.props.handler} loadOptions={this.getLocations} autoload={false} />
            </div>
        )
    }
}

export default LocationSearch;