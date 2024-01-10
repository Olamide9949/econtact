import {Logo} from "../assets";
import * as Icon from "@heroicons/react/16/solid";


export const HeaderUI = (props:any) => {
    return <div className={'font-[Livvic] max-w-[1350px] mx-auto md:px-12 px-4 py-4 flex flex-row items-center justify-between'}>

        {/*Desktop Header*/}
        <div className={'md:flex hidden flex-row items-center'}>
            <img className={'hidden w-10 h-10'} src={`${Logo}`} alt={'scanny logo'}/>
            <p className={'hidden text-[22px] text-[#666666] font-[800]'}>Scanny</p>

            <div className={'hidden ml-16 text-[#666666] font-[500]'}>
                <button onClick={()=>alert("You're currently on the personal contact service!")} className={'outline-none hover:text-[#888888]'}>
                    <p>Personal Contact</p>
                </button>
                <button onClick={()=> {
                    props.setIsCompany(!props.isCompany)
                }} className={'ml-12 outline-none hover:text-[#888888]'}>
                    <p>Company Contact</p>
                </button>
                <button onClick={()=>alert("Working on a customized service for you!")} className={'ml-12 outline-none hover:text-[#888888]'}>
                    <p>Social Media Contact</p>
                </button>
            </div>
        </div>
        <div className={'md:flex hidden flex-row items-center text-[#664465] font-[500]'}>
            <button onClick={()=>alert("Feature Coming Soon!")} className={'outline-none hover:text-[#888888]'}>
                <p>Sign In</p>
            </button>
            <button onClick={()=>alert("Feature Coming Soon!")} className={'bg-[#000000] py-2 px-4 rounded-md outline-none ml-4 text-[#ffffff] hover:text-[#CCCCCC]'}>
                <p>Create account</p>
            </button>
        </div>

        {/*Mobile header*/}
        <div className={'md:hidden flex flex-row items-center justify-between'}>
            <img className={'w-10 h-10'} src={`${Logo}`} alt={'scanny logo'}/>
            <p className={'text-[22px] text-[#666666] font-[800]'}>Scanny</p>
        </div>
        <button className={'md:hidden block outline-none border border-[#666666]/30 bg-[#666666]/10 p-2 rounded-full'}>
            <Icon.HomeIcon color={'#666666'} height={30} width={30}/>
        </button>
    </div>
}