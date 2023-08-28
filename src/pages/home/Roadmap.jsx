import { useState } from "react";
import { RxRadiobutton } from "react-icons/rx";

const Roadmap = () => {
    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [toggle3, setToggle3] = useState(true)
    return (
        <section className="max-w-7xl mx-auto lg:px-0 px-5 pt-10 mb-10">
            <div className="max-w-2xlxl mx-auto text-center">
                <h2 className="font text-4xl font-bold">Meet The Roadmap</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>

            <div className=' grid lg:grid-cols-3 md:grid-cols-3'>
                <div className="lg:h-[400px] md:h-[400px] p-3 m-3">
                    <div className="p-5">

                        <div className="text-center space-y-5">
                            <h2 className='font-bold text-[16px]'>Join New Server Hosting</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni modi unde, excepturi facilis quod quasi dicta dolorem a repudiandae.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-5">
                            <p className="my-3" onClick={() => setToggle1((e) => !e)}>
                                {toggle1 ? <RxRadiobutton className="text-3xl text-slate-300" /> : <RxRadiobutton className="text-3xl text-emerald-500" />}
                            </p>
                            <p>29 January 2019</p>
                        </div>
                    </div>
                </div>
                <div className="lg:h-[400px] md:h-[400px] p-3 m-3 lg:relative md:relative">
                    <div className="p-5 lg:absolute md:absolute bottom-0 right-2 left-2">
                        <div className="flex flex-col justify-center items-center">
                            <p>29 January 2019</p>
                            <p className="my-3" onClick={() => setToggle2((e) => !e)}>
                                {toggle2 ? <RxRadiobutton className="text-3xl text-slate-300" /> : <RxRadiobutton className="text-3xl text-emerald-500" />}
                            </p>
                        </div>
                        <div className="text-center space-y-5">
                            <h2 className='font-bold text-[16px]'>Mining Coin with letest gpu</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni modi unde, excepturi facilis quod quasi dicta dolorem a repudiandae.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:h-[400px] md:h-[400px] p-3 m-3">
                    <div className="p-5">
                        <div className="text-center space-y-5">
                            <h2 className='font-bold text-[16px]'>Tern new website with design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni modi unde, excepturi facilis quod quasi dicta dolorem a repudiandae.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <p className="my-3" onClick={() => setToggle3((e) => !e)}>
                            {toggle3 ? <RxRadiobutton className="text-3xl text-slate-300" /> : <RxRadiobutton className="text-3xl text-emerald-500" />}
                        </p>
                        <p>29 January 2019</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;