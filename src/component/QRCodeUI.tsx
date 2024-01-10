import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/outline";
import vCard from "vcards-js";
import {QRCodeCanvas} from "qrcode.react";
import html2canvas from "html2canvas";
import {Palette} from "../assets";


export const QRCodeUI = (props:any) => {
    const vcf = vCard();
    vcf.firstName = props.contactDetails.firstName;
    vcf.lastName = props.contactDetails.lastName;
    vcf.middleName = props.contactDetails.addtionalName;
    vcf.email = props.contactDetails.email;
    vcf.organization = props.contactDetails.company;
    vcf.cellPhone = props.contactDetails.mobileNumber;
    vcf.workPhone = props.contactDetails.phoneNumber;
    vcf.url = props.contactDetails.website;
    vcf.role = props.  contactDetails.jobTitle;
    vcf.note = props.contactDetails.notes;
    vcf.homeAddress = props.contactDetails.address;
    vcf.photo = props.imgURL;

    const options = {
        src: props.imgURL || "/logo.png",
        height:45,
        width:55,
        excavate:false
    }

    const downloadqrCode = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        html2canvas(document.querySelector("#qrcode"))
            .then(function (canvas) {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.setAttribute(
                    'download',
                    `${props.contactDetails.firstName.toLocaleLowerCase()}_qr_contact_code.png`,
                );
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                link.parentNode.removeChild(link);
                props.setTriggerModal(false);
                window.location.reload();
            });
    }
    return props.triggerModal && <div className={'font-[Livvic] w-full h-[100%] absolute top-0 md:z-14 z-20 left-0 bg-[#000000]/30 flex items-center flex-col justify-center'}>
        <div
            className={'w-[350px] flex flex-col items-center justify-center min-h-[450px] bg-[#ffffff] rounded-md relative'}>
            <button className={'absolute top-4 right-4'} onClick={() => props.setTriggerModal(false)}>
                <XMarkIcon width={25} height={25} color={"#B33A3A"}/>
            </button>
            <div id={"qrcode"} className={'w-full p-4'}>
                <h3 className={'mt-4 text-center text-[22px] font-[600]'}>Share your Profile🎉</h3>
                <p className={'mb-4 text-[13px] text-[#000000]/50 italic text-center'}>Your profile information all in
                    one piece.</p>
                <div className={'flex flex-col items-center justify-between w-full'}>
                    <div className={'border border-[#000000]/20 rounded-md w-full'}>
                        <QRCodeCanvas
                            value={vcf.getFormattedString()}
                            size={310}
                            level="L"
                            imageSettings={options}
                            includeMargin={true}
                            bgColor="#ffffff"
                            fgColor={props.qrColor}
                        />
                    </div>
                    <div className={'text-center w-full'}>
                        <p className={'text-[13px] text-[#000000]/50 italic'}>Scan to add me to your contact list.</p>
                    </div>
                </div>
            </div>

            <div className={'flex items-center flex-row my-2'}>
                <div className={'relative flex items-center flex-row'}>
                    <input
                        type="color"
                        className={'border-none outline-none w-10 h-8'}
                        onChange={(event) => props.setQrColor(event.target.value)}
                        value={props.qrColor}
                    />
                    <img alt={'palette'} src={Palette} className={'w-[30px] h-[30px]'}/>
                </div>
                <button onClick={downloadqrCode}
                        className={'ml-8 font-[500] flex flex-row text-[#ffffff] bg-[#000000] rounded-md p-2 items-center justify-between'}>
                    <ArrowDownTrayIcon color={'#ffffff'} height={25} width={25}/>
                    <p className={'ml-2'}>Download</p>
                </button>
            </div>
        </div>
    </div>
}