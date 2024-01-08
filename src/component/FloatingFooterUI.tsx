

export const FloatingFooterUI = () => {
    return <div className={'md:max-w-[400px] w-full md:px-0 px-4 md:bottom-10 my-10 h-[180px] md:absolute md:z-10 md:left-12'}>
        <div
            className={'text-[Livvic] md:animate-pulse hover:animate-none hover:cursor-default border border-[#666666]/20 p-4 flex justify-center flex-col rounded-md w-full bg-[#CCCCCC]/20'}>
            <h3 className={'text-[#000000] mt-2 font-[700]'}>Support Us</h3>
            <p className={'mb-4 text-[#666666]/80 font-[500] text-[13px]'}>We are working to get this project to it's
                own domain, if you find this project resourceful, support us to bring you great features and to move it
                to it's own permanent domain.</p>
            <button className={'outline-none bg-[#000000] text-[#ffffff] md:w-[150px] w-auto p-2 rounded-md'}>Donate &
                Support
            </button>
        </div>
    </div>
}