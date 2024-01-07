import {ContactCardUI, FloatingFooterUI, HeaderUI, QRCodeUI} from "./component";
import {useState} from "react";

function MainActivity() {

    const [triggerModal, setTriggerModal] = useState(false);
    const [contactDetails, setContactDetails] = useState({
        firstName:"",
        lastName:"",
        additionalName:"",
        phoneNumber:"",
        mobileNumber:"",
        email:"",
        jobTitle:"",
        company:"",
        website:"",
        address:"",
        city:"",
        state:"",
        country:"",
        zipcode:"",
        notes:""
    })

  return (
    <>
        <HeaderUI/>
        <ContactCardUI contactDetails={contactDetails} setContactDetails={setContactDetails} setTriggerModal={setTriggerModal}/>
        <QRCodeUI contactDetails={contactDetails} setContactDetails={setContactDetails} triggerModal={triggerModal} setTriggerModal={setTriggerModal}/>
        <FloatingFooterUI/>
    </>
  )
}

export default MainActivity;
