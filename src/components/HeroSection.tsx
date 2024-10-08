export const HeroSection = () => {
    return (
        <div className="flex justify-center font-sans">
            <div className="hidden md:flex flex-wrap w-full max-w-[1146px] h-[616px] px-[50px] mt-[50px]">
                <div className="bg-[url('/images/media-bg-1.svg')] bg-cover bg-center bg-no-repeat p-8 w-full md:w-1/2 lg:w-1/3">
                    <p className="text-[#f02ef6] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                    <h2 className="text-[40px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                    <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                </div>

                <div className="flex flex-wrap w-full md:w-1/2 lg:w-2/3">
                    <div className="bg-[url('/images/media-bg-2.svg')] bg-cover bg-center bg-no-repeat p-8 w-full ml-[10px]">
                        <p className="text-[#f02ef6] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                        <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                        <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                    </div>
                    <div className="flex w-full flex-col md:flex-row mt-[10px] ml-[10px]">
                        <div className=" flex-1 bg-[url('/images/media-bg-3.svg')] bg-cover bg-center bg-no-repeat p-8 w-1/2 ">
                            <p className="text-[#f02ef6] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                            <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                            <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                        </div>
                        <div className="bg-[url('/images/media-bg-4.svg')] bg-cover bg-center bg-no-repeat p-8 w-1/2 ml-[10px]">
                            <p className="text-[#f02ef6] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                            <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                            <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden w-full px-[32px]">
                <div
                    className="bg-[url('/images/media-bg-1.jpg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-2 m-auto"
                >
                    <p className="text-[#601363] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                    <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                    <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                </div>

                <div className="w-full">
                    <div className="bg-[url('/images/media-bg-2.jpg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-2 m-auto">
                        <p className="text-[#601363] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                        <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                        <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                    </div>
                    <div className="w-full">
                        <div className=" flex-1 bg-[url('/images/media-bg-3.jpg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-2 m-auto">
                            <p className="text-[#601363] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                            <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                            <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                        </div>
                        <div className="bg-[url('/images/media-bg-4.jpg')] bg-cover bg-center bg-no-repeat p-8 max-w-[600px] h-[300px] my-2 m-auto">
                            <p className="text-[#601363] text-[14px] font-bold leading-6 font-sans">5 Items</p>
                            <h2 className="text-[24px] font-bold leading-10 text-[#252B42] font-sans">FURNITURE</h2>
                            <button className="text-[14px] text-[#252B42] font-bold font-sans">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
