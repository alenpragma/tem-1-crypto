import { useState } from "react";
import { choose } from "../../components";

const Choose = () => {
    const [chooses, setchooses] = useState(choose);
    return (
        <section className="max-w-7xl mx-auto lg:px-0 px-5 pt-20 mb-10" id="service">
            <div className="max-w-2xlxl mx-auto text-center">
                <h2 className="font text-4xl font-bold">Why you Choose TheCoin</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-2'>
                {
                    chooses.map(data => <div className="hover:shadow shadow-slate-300 p-10 m-3" key={data.id}>
                        <div className='flex justify-center items-center mb-5'>
                            <img className='w-18 h-18' src={data.img} alt="" />
                        </div>
                        <div className="text-center space-y-5">
                            <h2 className='font-bold text-[16px]'>{data.title}</h2>
                            <p>{data.letter}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Choose;