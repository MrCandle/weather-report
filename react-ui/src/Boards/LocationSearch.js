import React, { Component } from 'react';
import { Async } from 'react-select';
import { Row } from 'reactstrap';
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
            <Row style={styles.locationSearch}>
                <Async className='col-sm-12' style={styles.noPadding} onChange={this.props.handler} loadOptions={this.getLocations} autoload={false} />
            </Row>
        )
    }
}

export default LocationSearch;