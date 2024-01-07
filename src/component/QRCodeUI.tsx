import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import { QRCode } from "react-qrcode-logo";
//import {QrCodeIcon} from "@heroicons/react/24/solid";
//import vCard from "vcards-js";


export const QRCodeUI = (props:any) => {
    // const vcf = vCard();
    const generateCode = () => {
        console.log(props.contactDetails)
        props.setTriggerModal(false)

    }
    return props.triggerModal && <div className={'font-[Livvic] w-full h-full absolute top-0 z-14 left-0 bg-[#000000]/30 flex items-center flex-col justify-center'}>
        <div className={'w-[350px] px-4 flex flex-col items-center justify-center h-[450px] bg-[#ffffff] rounded-md'}>
            <h3 className={'mt-8 text-center text-[22px] font-[600]'}>Share your Profile🎉</h3>
            <p className={'mb-8 text-[13px] text-[#000000]/50 italic text-center'}>Your profile information all in one piece.</p>
            <div className={'flex flex-row items-center justify-between w-full'}>
                <div className={'border border-[#000000]/10 rounded-md w-1/2'}>
                    <QRCode size={128}
                            style={{ height: "auto", maxWidth: "50%", width: "50%" }}
                            value={JSON.stringify(props.contactDetails)}
                            logoImage={'/logo.png'}
                            logoHeight={30}
                            logoWidth={30}
                            eyeRadius={10}
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