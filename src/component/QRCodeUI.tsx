import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import vCard from "vcards-js";
import {QRCodeCanvas} from "qrcode.react";
//import { QRCode } from "react-qrcode-logo";
//import {QrCodeIcon} from "@heroicons/react/24/solid";


export const QRCodeUI = (props:any) => {
    const vcf = vCard();
    vcf.firstName = props.contactDetails.firstName;
    vcf.lastName = props.contactDetails.lastName;
    vcf.middleName = props.contactDetails.addtionalName;
    vcf.email = props.contactDetails.email;
    vcf.organization = props.contactDetails.company;
    vcf.cellPhone = props.contactDetails.mobileNumber;
    vcf.workPhone = props.contactDetails.phoneNumber;
    vcf.homeAddress = props.contactDetails.address;
    vcf.url = props.contactDetails.website;
    vcf.role = props.contactDetails.jobTitle;
    vcf.note = props.contactDetails.notes;
    vcf.homeAddress = props.contactDetails.address;
    const options = {
        src:"/logo.png",
        height:30,
        width:30,
        excavate:false
    }

    const generateCode = () => {
        props.setTriggerModal(false)

    }
    return props.triggerModal && <div className={'font-[Livvic] w-full h-full absolute top-0 z-14 left-0 bg-[#000000]/30 flex items-center flex-col justify-center'}>
        <div className={'w-[350px] px-4 flex flex-col items-center justify-center h-[450px] bg-[#ffffff] rounded-md'}>
            <h3 className={'mt-8 text-center text-[22px] font-[600]'}>Share your Profile🎉</h3>
            <p className={'mb-8 text-[13px] text-[#000000]/50 italic text-center'}>Your profile information all in one piece.</p>
            <div className={'flex flex-row items-center justify-between w-full'}>
                <div className={'p-1 border border-[#000000]/20 rounded-md w-1/2'}>
                    <QRCodeCanvas
                        value={vcf.getFormattedString()}
                        size={150}
                        level="L"
                        imageSettings={options}
                        bgColor="#fff"
                        fgColor="#000"
                    />
                </div>
                <div className={'w-1/2 ml-4'}>
                    <p className={'text-[13px] text-[#000000]/50 italic'}>Scan to add me to your contact list.</p>
                </div>
            </div>

            <button onClick={generateCode}
                    className={'font-[500] mt-20 flex flex-row text-[#ffffff] bg-[#000000] rounded-md p-2 items-center justify-between'}>
                <ArrowDownTrayIcon color={'#ffffff'} height={25} width={25}/>
                <p className={'ml-2'}>Download</p>
            </button>
        </div>
    </div>
}