import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Toggle from 'react-toggle'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: 1
        }
    }

    setScreen = screen => {
        this.setState({
            screen
        })
    }

    
    render() {
        let currentLanguage = this.props.settings.language;
        let { screen } = this.state;
        return (
            <React.Fragment>
            <div class="wrapper">
            <div class="panel mob-panel">
            <div class="cell p-a border rel">
                <p class="body m-t-0 m-b-0 ship-overview">
                    <h3 class="m-t-0 m-b-0">SFRX00999</h3>
                </p>
                <span class="status green">Completed</span>
            </div>
            <div class="cell p-a rel tabList">
                <div class="row">
                    <div class="col" onClick={() => this.setScreen(1)}>
                        <p className={screen === 1 ? "active": ""}> <FontAwesomeIcon class="icon" icon={faBars} />&nbsp;Details</p>
                    </div>
                    <div class="col" onClick={() => this.setScreen(3)}>
                        <p className={screen === 3 ? "active": ""}><FontAwesomeIcon class="icon" icon={faBus} /> &nbsp;Carrier</p>
                    </div>
                    <div class="col" onClick={() => this.setScreen(2)}>
                        <p className={screen === 2 ? "active": ""}> <FontAwesomeIcon class="icon" icon={faSortAlphaDown} /> &nbsp;Activity</p>
                    </div>
                    
                    
                </div>
                
                <div>
                    {
                        screen === 1 ?
                        <React.Fragment>
                            
                            <div class="flex tab-content">
                                <div class="cell full">
                                    <p class="body m-b-0">
                                    <div class="flex">
                                        <div class="col colg noR">
                                            <p class="head m-t-0">
                                            Pickup date
                                            </p>
                                            <p class="sub-head m-t-0 value">29 April 2021<br/>11: 35 AM</p>
                                        </div>
                                        <div class="col colg">
                                            <p class="head m-t-0">
                                            Delivery Date
                                            </p>
                                            <p class="sub-head m-t-0 value">8 May 2021<br/>12:35 PM</p>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col colg noT">
                                    <p class="head m-t-0">
                                    Last Location
                                    </p>
                                    <div class="body m-b-0">
                                    <p class="sub-head m-t-0 value">
                                        NH47, Sanand Taluka, Ahmedabad District, Gujarat, India</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col colg noT noB">
                                    <p class="head m-t-0">
                                    Source / Destination
                                    </p>
                                </div>
                            </div>
                            <div class="flex tab-content">
                                <div class="cell full">
                                    
                                    <p class="body m-b-0">
                                    <div class="flex">
                                        <div class="col colg noB noT path origin">
                                            <div class="state green">P1</div>
                                            <p class="head m-t-0">
                                                1 May 2021, 06:20 AM 
                                            </p>
                                            <p class="sub-head m-t-0 value">
                                            Plot No.B-1, 2nd Phase Industrial Area, Adityapur, Adityapur Industrial Area, Adityapur, Jamshedpur, Jharkhand 832109, India
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="col colg noT  path">
                                            <div class="state red">D1</div>
                                            <p class="head m-t-0">
                                                8 May 2021, 7:00 AM 
                                            </p>
                                            <p class="sub-head m-t-0 value">
                                                A14 15,sttel town,sarkhej bavla highway,gram moriya, tal sanand,changodar 
                                            </p>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="cell full">
                                    <p class="body m-b-0">
                                    <div class="flex">
                                        <div class="col colg noT noR">
                                            <p class="head m-t-0">
                                            Shipper
                                            </p>
                                            <p class="sub-head m-t-0 value">BMWISL - Jamshedpur </p>
                                        </div>
                                        <div class="col colg noT noR">
                                            <p class="head m-t-0">
                                            Carrier 
                                            </p>
                                            <p class="sub-head m-t-0 value">Own Fleet </p>
                                        </div>
                                        <div class="col colg noT">
                                            <p class="head m-t-0">
                                            Client 
                                            </p>
                                            <p class="sub-head m-t-0 value"> Tata Steel </p>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col colg noT">
                                    <p class="head m-t-0">
                                    Documents
                                    </p>
                                    <div class="body m-b-0">
                                    <ul class="documents m-t-0">
                                        <li>
                                            <a>1. Bill of 100 KG Mangoes <FontAwesomeIcon class="icon" icon={faFileExcel} /> </a>
                                        </li>
                                        <li>
                                            <a>2. Driving License of Upendra <FontAwesomeIcon class="icon" icon={faFilePdf} /></a>
                                        </li>
                                        <li>
                                            <a>3. RC of NL0331204 <FontAwesomeIcon class="icon" icon={faFileImage} /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            <div class="flex">
                                <div class="cell full">
                                    <p class="body m-b-0">
                                    <div class="flex">
                                        <div class="col colg noT ">
                                        <div class="driver-info">
                                        <p class="head m-t-0">
                                            DRIVER
                                            </p>
                                                <div class="dp m-r">
                                                    <img src="./um.png"/>
                                                </div>
                                                <div>
                                                <p class=" sub-head value">UPendra Mondal</p>
                                                <p class="phone sub-head value m-t-0">
                                                    <a href="tel:9508151117" class="number"><FontAwesomeIcon class="icon phone" icon={faPhoneAlt} />&nbsp;9508151117</a>
                                                    <i class="battery">89% Battery</i>
                                                </p>
                                                </div>
                                        </div>
                                        </div>
                                        
                                    </div>
                                    </p>
                                </div>
                            </div>
                    </React.Fragment> : null
                    }
                    {
                        screen === 2 ? 
                        <div class="stepper">
                            <div class="step row">
                                <div class="col-5 event">
                                    <p class="head m-t-0">
                                        8 May 2021
                                    </p>
                                    <p class="head m-t-0">
                                        7:00 AM
                                    </p>
                                </div>
                                <div class="col-7">
                                    <p class="sub-head m-t-0 value">
                                        NA / <small>NA</small>
                                    </p>
                                    <div class="comment">  GPS Tracking: Shipment completed </div>
                                </div>
                            </div>
                            <div class="step row">
                                <div class="col-5 event">
                                    <p class="head m-t-0">
                                        8 May 2021
                                    </p>
                                    <p class="head m-t-0">
                                        7:00 AM
                                    </p>
                                </div>
                                <div class="col-7">
                                    <p class="sub-head m-t-0 value">
                                        NA / <small>NA</small>
                                    </p>
                                    <div class="comment">   GPS Tracking: Driver has moved out of D1, A14 15,sttel town,sarkhej bavla highway,gram moriya, tal sanand,changodar </div>
                                </div>
                            </div>
                            <div class="step row">
                                <div class="col-5 event">
                                    <p class="head m-t-0">
                                        8 May 2021
                                    </p>
                                    <p class="head m-t-0">
                                        7:00 AM
                                    </p>
                                </div>
                                <div class="col-7">
                                    <p class="sub-head m-t-0 value">
                                        NA / <small>NA</small>
                                    </p>
                                    <div class="comment">GPS Tracking: Driver has arrived at D1, A14 15,sttel town,sarkhej bavla highway,gram moriya, tal sanand,changodar  </div>
                                </div>
                            </div>
                            <div class="step row">
                                <div class="col-5 event">
                                    <p class="head m-t-0">
                                        8 May 2021
                                    </p>
                                    <p class="head m-t-0">
                                        7:00 AM
                                    </p>
                                </div>
                                <div class="col-7">
                                    <p class="sub-head m-t-0 value">
                                        Operations / <small>Shipper</small>
                                    </p>
                                    <div class="comment">Shipper Admin Despatch has updates the commercial invoice details.   </div>
                                </div>
                            </div>
                        </div>
                         : null
                    }
                    {
                        screen === 3 ? 
                        <React.Fragment>
                        <div class="flex">
                                <div class="col colg bgRed">
                                    <p class="head m-t-0">
                                        STATUS
                                    </p>
                                    <p class="body m-b-0">
                                                <div class="vehicle-info">
                                                        <p class=" sub-head value m-b-0">DELAYED BY</p>
                                                        <p class=" sub-head value m-b-0">1 Day 03 Hours 51 Mins</p>
                                                        <p class=" sub-head value m-b-0"><small>As of 23rd April 2021</small></p>
                                                        {/* <p class="phone sub-head value m-t-0">
                                                            <span></span><i class="battery">Temperature: 26&#176;C</i>
                                                        </p> */}
                                                </div>
                                            </p>
                                </div>
                                <div class="col colg noL">
                                    <p class="head m-t-0">
                                    GEO-FENCE
                                    </p>
                                    <p class="body m-b-0">
                                                <div class="vehicle-info">
                                                        <p class=" sub-head value m-b-0">10005 Violations</p>
                                                        <label class="toggle-container m-t">
                                                        <Toggle
                                                            defaultChecked={this.state.tofuIsReady}
                                                            icons={false}
                                                            onChange={this.handleTofuChange} />
                                                            <span>Show on Map</span>
                                                        </label>
                                                </div>
                                            </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col colg">
                                    <p class="head m-t-0">
                                    Vehicle Number
                                    </p>
                                    <p class="body m-b-0">
                                                <div class="vehicle-info">
                                                        <p class=" sub-head value m-b-0">NL01N0448</p>
                                                        {/* <p class="phone sub-head value m-t-0">
                                                            <span></span><i class="battery">Temperature: 26&#176;C</i>
                                                        </p> */}
                                                </div>
                                            </p>
                                </div>
                                <div class="col colg noL">
                                    <p class="head m-t-0">
                                    Vehicle Type
                                    </p>
                                    <p class="body m-b-0">
                                                <div class="vehicle-info">
                                                        <p class=" sub-head value m-b-0">40MT Trailer</p>
                                                        {/* <p class="phone sub-head value m-t-0">
                                                            <span></span><i class="battery">Temperature: 26&#176;C</i>
                                                        </p> */}
                                                </div>
                                            </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col colg noT">
                                    <p class="head m-t-0">
                                    Distance (kms)
                                    </p>
                                    <p class="body m-b-0">
                                                <div class="vehicle-info">
                                                        <div class="row">
                                                            <div class="col">
                                                            <p class="sub-head m-t-0 m-b-0">
                                                            <span></span><span class="battery">Total</span>
                                                            </p>
                                                            <p class="sub-head m-t-0 value">
                                                                <span></span><span class="battery"> 1,742 </span>
                                                            </p>
                                                            </div>
                                                            <div class="col">
                                                            <p class="sub-head m-t-0 m-b-0">
                                                            <span></span><span class="battery">Travelled</span>
                                                            </p>
                                                            <p class="sub-head m-t-0 value">
                                                                <span></span><span class="battery"> 20,320 </span>
                                                            </p>
                                                            </div>
                                                            <div class="col">
                                                            <p class="sub-head m-t-0 m-b-0">
                                                            <span></span><span class="battery">Remaining</span>
                                                            </p>
                                                            <p class="sub-head m-t-0 value">
                                                                <span></span><span class="battery"> 0 </span>
                                                            </p>
                                                            </div>
                                                        </div>
                                                        
                                                </div>
                                            </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col-12 colg noT">
                                    <p class="head m-t-0">
                                    Photo
                                    </p>
                                    <p class="body m-b-0">
                                        <img class="vehicleImage" src="./demoTruck.png"/>
                                    </p>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="col-8 colg noT noR">
                                    <p class="head m-t-0">
                                    Speed (KM/H)
                                    </p>
                                    <p class="body m-b-0">
                                                <div class="vehicle-info">
                                                        <div class="row">
                                                            <div class="col">
                                                            <p class="sub-head m-t-0 m-b-0">
                                                            <span></span><span class="battery">Average</span>
                                                            </p>
                                                            <p class="sub-head m-t-0 value">
                                                                <span></span><span class="battery"> 25</span>
                                                            </p>
                                                            </div>
                                                            <div class="col">
                                                            <p class="sub-head m-t-0 m-b-0">
                                                            <span></span><span class="battery">Overspeed</span>
                                                            </p>
                                                            <p class="sub-head m-t-0 value">
                                                                <span></span><span class="battery"> 0</span>
                                                            </p>
                                                            </div>
                                                        </div>
                                                        
                                                </div>
                                            </p>
                                </div>
                                <div class="col-4 colg noT">
                                    <p class="head m-t-0">
                                    Vehicle Temp.
                                    </p>
                                    <p class="sub-head m-t-0 value">
                                        <span></span><span class="battery">28&#176;C</span>
                                    </p>
                                </div>
                            </div>
                        </React.Fragment>
                         : null
                    }
                    
                    
                </div>
            </div>
            </div>
                <div class="panel mob-hidden">
                    <div class="flex">
                        <div class="col-md-8">
                            <div class="flex">
                                <div class="col-md-3  cell-wrap">
                                <div class="cell">
                                    <p class="head">Shipment ID</p>
                                    <p class="body">
                                    <h3 class="m-t-0">SFRX00999</h3>
                                    </p>
                                </div>
                                </div>
                                <div class="col-md-9  cell-wrap">
                                <div class="cell">
                                    <p class="body">
                                    <div class="row">
                                        <div class="col">
                                            <p class="head m-t-0">
                                            Pickup date&nbsp;&nbsp;
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" class="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
                                            </svg>
                                            </p>
                                            <p class="sub-head m-t-0 value">29 April 2021&nbsp;11: 35 AM</p>
                                        </div>
                                        <div class="col">
                                            <p class="head m-t-0">
                                            Delivery Date&nbsp;&nbsp;
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                            </svg>
                                            </p>
                                            <p class="sub-head m-t-0 value">8 May 2021&nbsp;12:35 PM</p>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div class="flex m-t">
                                <div class="col-md-3  cell-wrap">
                                <div class="cell">
                                    <p class="head">Status</p>
                                    <p class="body">
                                    <p class="sub-head m-t-0 value">
                                        
                                        <FontAwesomeIcon class="icon green" icon={faCheckCircle} />
                                        &nbsp;
                                        Completed
                                    </p>
                                    </p>
                                </div>
                                </div>
                                <div class="col-md-9  cell-wrap">
                                <div class="cell">
                                    <p class="body">
                                    <div class="row">
                                        <div class="col">
                                            <p class="head m-t-0">
                                                E-Waybill expires on
                                            </p>
                                            <p class="sub-head m-t-0 value">29 April 2021&nbsp;11: 35 AM</p>
                                        </div>
                                        <div class="col">
                                            <p class="head m-t-0">
                                            Last Known Location
                                            </p>
                                            <p class="sub-head m-t-0 value">
                                            NH47, Sanand Taluka, Ahmedabad District, Gujarat, India
                                            </p>
                                        </div>
                                    </div>
                                    </p>
                                </div>
                                </div>
                            </div>                    
                        </div>
                        <div class="col-md-4 drive">
                            <div class="">
                            <div class="cell">
                                    <p class="head">DRIVER</p>
                                    <p class="body">
                                        <div class="driver-info">
                                                <div class="dp">
                                                    <img src="./um.png"/>
                                                </div>
                                                <p class=" sub-head value">UPendra Mondal</p>
                                                <p class="phone sub-head value m-t-0">
                                                    <a href="tel:9508151117" class="number"><FontAwesomeIcon class="icon phone" icon={faPhoneAlt} />&nbsp;9508151117</a>
                                                    <i class="battery">89% Battery</i>
                                                </p>
                                        </div>
                                    </p>
                                </div>
                                <hr class="hr"/>
                                <div class="cell">
                                    <p class="head">VEHICLE</p>
                                    <p class="body">
                                        <div class="vehicle-info p-b">
                                                <div class="dp">
                                                    <img src="./demoTruck.png"/>
                                                </div>
                                                <p class=" sub-head value">NL01N0448</p>
                                                <p class="phone sub-head value m-t-0">
                                                    <span>40MT Trailer</span><i class="battery">Temperature: 26&#176;C</i>
                                                </p>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        );   
    }
}
const mapStateToProps = state => {
    return {
      settings: state.settingsReducer.settings
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {};
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Content);