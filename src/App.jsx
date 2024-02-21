import React, { Component } from 'react'
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({ lat: pos.coords.latitude }),
            err => this.setState({ errorMessage: 'User denied geolocation' })
        );
    }
    
    renderContent() {
        if (this.state.errorMessage &&!this.state.lat) {
            return(
                <div><h1>Error: {this.state.errorMessage}</h1></div>
            );
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return(
                <SeasonDisplay lat = {this.state.lat}/>
            );
        }

        else
            return(<Loading message= "Please click allow to get your location" />);
    }
    
    render() { 
        return(
            <div>
                {this.renderContent()}
            </div>
        );
        
    }
}   

export default App;
