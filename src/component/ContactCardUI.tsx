import {QrCodeIcon} from "@heroicons/react/16/solid";
import {useState} from "react";


export const ContactCardUI = (props:any) => {
    const [img, setImg] = useState<any>();
    // const reader = new FileReader();
    // reader.readAsDataURL(img)
    //
    // reader.onload = () => {
    //     console.log('called: ', reader)
    //     console.log(reader.result)
    // }

    return <div className={'font-[Livvic] overflow-hidden max-w-[1350px] mx-auto md:px-16 px-4 md:pt-20 pt-10'}>
        <div className={'flex w-full md:flex-row md:items-start md:justify-between flex-col'}>
            <div className={'md:w-1/2 w-full'}>
                <p className={'md:text-[70px] text-[30px] font-[700] text-[#000000]'}>Who are you?</p>
                <p className={'text-[#666666]/60 font-[500]'}>Enter your contact details you want to share.</p>
                <p className={'text-[#666666]/60 font-[500]'}>Click and share qr-code.</p>
            </div>

            {/*Contact form*/}
            <div
                className={'md:h-[450px] h-[350px] overflow-y-scroll md:w-1/2 w-full text-[#666666] font-[500] md:mt-0 mt-8'}>
                {/*Company Logo*/}
                {props.isCompany && <div className={'my-8 w-full'}>
                    <p>Upload Company Logo</p>
                    <input
                        required
                        type={"file"}
                        onChange={(event: any) => {
                            setImg(event.target.files[0])
                        }}
                        className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                        placeholder={'company logo'}/>
                </div>}
                {/*First and Last Names*/}
                <div className={'flex md:items-center w-full md:justify-between md:flex-row flex-col'}>
                    <div className={'w-full'}>
                        <p>First Name</p>
                        <input
                            required
                            inputMode={"text"}
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    firstName: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'First name'}/>
                    </div>
                    <div className={'md:ml-2 ml-0 md:mt-0 mt-8 w-full'}>
                        <p>Last Name</p>
                        <input
                            required
                            inputMode={"text"}
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    lastName: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Last name'}/>
                    </div>
                </div>

                {/*Additional Names*/}
                <div className={'mt-8 w-full'}>
                    <p>Additional Names</p>
                    <input
                        onChange={(event) => {
                            props.setContactDetails({
                                ...props.contactDetails,
                                addtionalName: event.target.value
                            })
                        }}
                        className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                        placeholder={'Additional name'}/>
                </div>

                {/*Phone number and company*/}
                <div className={'mt-8 flex md:items-center w-full md:justify-between md:flex-row flex-col'}>
                    <div className={'w-full'}>
                        <p>Work Phone</p>
                        <input
                            inputMode={"tel"}
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    phoneNumber: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Work phone (0909821234)'}/>
                    </div>
                    <div className={'md:ml-2 ml-0 md:mt-0 mt-8 w-full'}>
                        <p>Mobile Number</p>
                        <input
                            required
                            inputMode={"tel"}
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    mobileNumber: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Mobile number'}/>
                    </div>
                </div>

                {/*Email address*/}
                <div className={'mt-8 w-full'}>
                    <p>Email Address</p>
                    <input
                        required
                        inputMode={"email"}
                        onChange={(event) => {
                            props.setContactDetails({
                                ...props.contactDetails,
                                email: event.target.value
                            })
                        }}
                        className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                        placeholder={'Email address'}/>
                </div>
                {/*Job title*/}
                <div className={'mt-8 w-full'}>
                    <p>Job title</p>
                    <input
                        onChange={(event) => {
                            props.setContactDetails({
                                ...props.contactDetails,
                                jobTitle: event.target.value
                            })
                        }}
                        className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                        placeholder={'Job title'}/>
                </div>

                {/*Organization and Website*/}
                <div className={'mt-8 flex md:items-center w-full md:justify-between md:flex-row flex-col'}>
                    <div className={'w-full'}>
                        <p>Company</p>
                        <input
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    company: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Company/Organization name'}/>
                    </div>
                    <div className={'md:ml-2 ml-0 md:mt-0 mt-8 w-full'}>
                        <p>Website</p>
                        <input
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    website: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Website'}/>
                    </div>
                </div>

                {/*Address information*/}
                <div className={'mt-8 w-full'}>
                    <p>Street Address</p>
                    <textarea
                        required
                        inputMode={"text"}
                        onChange={(event) => {
                            props.setContactDetails({
                                ...props.contactDetails,
                                address: event.target.value
                            })
                        }}
                        className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                        placeholder={'Street address'}/>
                </div>

                {/*City and State*/}
                <div className={'mt-8 flex md:items-center w-full md:justify-between md:flex-row flex-col'}>
                    <div className={'w-full'}>
                        <p>City</p>
                        <input
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    city: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'City'}/>
                    </div>
                    <div className={'md:ml-2 ml-0 md:mt-0 mt-8 w-full'}>
                        <p>State</p>
                        <input
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    state: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'State'}/>
                    </div>
                </div>

                {/*Country and Zipcode*/}
                <div className={'mt-8 flex md:items-center w-full md:justify-between md:flex-row flex-col'}>
                    <div className={'w-full'}>
                        <p>Country</p>
                        <input
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    country: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Country'}/>
                    </div>
                    <div className={'md:ml-2 ml-0 md:mt-0 mt-8 w-full'}>
                        <p>Zipcode</p>
                        <input
                            onChange={(event) => {
                                props.setContactDetails({
                                    ...props.contactDetails,
                                    zipcode: event.target.value
                                })
                            }}
                            className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                            placeholder={'Zipcode'}/>
                    </div>
                </div>

                {/*Additional notes*/}
                <div className={'mt-8 w-full'}>
                    <p>Notes</p>
                    <textarea
                        onChange={(event) => {
                            props.setContactDetails({
                                ...props.contactDetails,
                                notes: event.target.value
                            })
                        }}
                        className={'placeholder:font-[600] mt-2 rounded-md outline-[#666666]/70 border-[#666666]/30 w-full p-2 border'}
                        placeholder={'Notes'}/>
                </div>

                {/*Button*/}
                <button onClick={() => props.setTriggerModal(true)}
                        className={'flex flex-row items-center justify-between outline-none bg-[#000000] text-[#ffffff] p-2 rounded-md mt-4'}>
                    <QrCodeIcon height={25} width={25}/>
                    <p>Generate your Qr</p>
                </button>
            </div>
        </div>
    </div>
}