import {ContactCardUI, FloatingFooterUI, HeaderUI, QRCodeUI} from "./component";
import {useState} from "react";

function MainActivity() {
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
    const [triggerModal, setTriggerModal] = useState(false);
    const [isCompany, setIsCompany] = useState(false);
    const [imgURL, setImgURl] = useState();

  return (
    <>
        <HeaderUI setIsCompany={setIsCompany} isCompany={isCompany}/>
        <ContactCardUI setImgURl={setImgURl} imgURL={imgURL} isCompany={isCompany} contactDetails={contactDetails} setContactDetails={setContactDetails} setTriggerModal={setTriggerModal}/>
        <QRCodeUI imgURL={imgURL} contactDetails={contactDetails} setContactDetails={setContactDetails} triggerModal={triggerModal} setTriggerModal={setTriggerModal}/>
        <FloatingFooterUI/>
    </>
  )
}

export default MainActivity;
