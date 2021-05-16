import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faBus } from '@fortawesome/free-solid-svg-icons'
import { faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
  
class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    
    render() {
        let currentLanguage = this.props.settings.language;
        return (
            <React.Fragment>
                <div>
                    <div class="head-logo p-a">
                    <img src="./smartruck-logo.svg"/>
                    </div>
                    <div class="co">
                        <ul>
                            <li class="active">
                                <a><FontAwesomeIcon class="icon" icon={faBars} />Dashboard</a>
                             </li>
                            <li class="">
                                <a><FontAwesomeIcon class="icon" icon={faServer} />Shipment Details</a>
                            </li>
                            <li>
                                <a><FontAwesomeIcon class="icon" icon={faBus} />Carrier Information</a>
                            </li>
                            <li>
                                <a><FontAwesomeIcon class="icon" icon={faSortAlphaDown} />Activity Timeline</a>
                            </li>
                            <li>
                                <a><FontAwesomeIcon class="icon" icon={faCopy} />Documents</a>
                            </li>
                        </ul>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);