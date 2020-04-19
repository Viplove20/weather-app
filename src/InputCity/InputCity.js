import React, { Component } from 'react';
import '../InputCity/InputCity.css';
import ReportSummary from '../ReportSummary/ReportSummary';
import Image from '../Images/logo.png';


class InputCity extends Component {

    state = {
        response: false,
        city: "Hyderabad",
        status: false
    }

    searchCityHandler = e => {
        console.log(e);
        this.setState({ city: e.target.value });
    }

    searchButtonHandler = () => {
        var searchedCity = this.state.city;
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&APPID=0bc7044a6bdf0ade7e698effcfdd0bb8")
            .then(res => res.json())
            .then(res => {
                this.setState({ response: res , status: res.cod});
                
            })
            .catch(err => {
                console.log(err);
               
            })
    }



    render() {
        return (
            <div>
                <div className="ReportHeader">
                    <img alt="logo" src={Image} />
                    <div>Weather Report</div>
                </div>

                <div className="SearchBar">
                    <div class="md-form active-cyan active-cyan-2 mb-3">
                        <input class="form-control"
                            type="text" placeholder="Search" aria-label="Search"
                            value={this.state.city} onChange={this.searchCityHandler}></input>
                    </div>
                </div>

                <div className="Button">
                    <button type="button" class="btn btn-primary btn-sm active btn-light"
                        onClick={this.searchButtonHandler}>Search</button>
                </div>

                {(this.state.status && this.state.status === 200) ? <ReportSummary res={this.state.response} />
                    : this.state.status && <div> Opps!! Something went wrong. </div>
                }


            </div>
        )
    }
};

export default InputCity;