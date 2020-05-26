import React from 'react';
import './ContactInfo.css';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
const ContactInfo = () => {
    return (
        <div className="contactInfoContainer" id="contacts">
            <h3>CONTACTS</h3>
            <div className="contactHolder">
                <div className="address">
                    <PinDropOutlinedIcon style={{ fontSize: '50' }} />
                    <p className="titleTag">WHERE TO FIND ME</p>
                    <p className="addressDetail">72/7, Agroni Bank Goli<br />
                    pathapath signal,
                    Dhaka</p>
                </div>
                <div className="email">
                    <MailOutlineIcon style={{ fontSize: '50' }} />
                    <p className="titleTag">EMAIL ME AT</p>
                    <p className="emailDetail">sojibrahmatuzzaman@gmail.com</p>
                </div>
                <div className="phone">
                    <PhoneAndroidOutlinedIcon style={{ fontSize: '50' }} />
                    <p className="titleTag">CALL ME AT</p>
                    <p className="phoneDetail">+8801616096888</p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;