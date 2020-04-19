import React from 'react';
import '../ReportSummary/ReportSummary.css';


const ReportSummary = (props) => {

    const getDate = () => {

        var unixtimestamp = props.res.dt;
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = new Date(unixtimestamp * 1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();

        var dateTime = month + ' ' + day + ', ' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return dateTime;
    }
    return (

        <div>
            {props.res &&
                <div>
                    <div className="ReportSummary">
                        <div className="details">
                            <div className="MainInfo">
                                <div className="dateTime">{getDate()}</div>
                                <div className="temperature">{Math.round(Number(props.res.main.temp) - 273)}°C </div>
                                <div className="cityName">{props.res.name} </div>

                            </div>

                            <div className="PrimaryInfo">
                                <img src={`http://openweathermap.org/img/wn/${props.res.weather[0].icon}@2x.png`} />

                                <div className="weather">{props.res.weather[0].main}- {props.res.weather[0].description}</div>

                            </div>
                        </div>

                        <div className="AdditionalInfo">
                            <div className="infoDetails">Details:</div>
                            <hr className="line"></hr>
                            <div>Max Temp ⬆ {Math.round(Number(props.res.main.temp_max) - 273)}°C </div>
                            <div>Min Temp ⬇ {Math.round(Number(props.res.main.temp_min) - 273)}°C</div>
                            <div>Feels Like~ {Math.round(Number(props.res.main.feels_like) - 273)}°C </div>

                            <div> Pressure: {props.res.main.pressure} mBar</div>
                            <div> Humidity: {props.res.main.humidity} %</div>
                            <div> Wind: {props.res.wind.speed} miles/hr</div>
                        </div>
                    </div>
                </div>
            }
        </div>

    )
}


export default ReportSummary;