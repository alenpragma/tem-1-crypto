import banner from '../../assets/icon/illustration.png';

const Hero = () => {

    return (
        <section className="max-w-7xl mx-auto lg:px-0 px-5 pt-10 mb-10">
            <div className='lg:flex justify-center items-center gap-5'>
                <div className='lg:w-1/2 space-y-5 leading-10'>
                    <h2 className="lg:text-6xl text-4xl font">Welcome to next level Cryptocurrency Token with faster transfer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veritatis, rerum ut at praesentium ullam alias magni! Ipsam unde nostrum ut enim commodi eaque tempora. Laborum accusamus deleniti eius? Sapiente?</p>
                    <div className='lg:w-1/2'>
                        <button className="bg-black text-white px-3 py-1 rounded">Get Token</button>
                        <button className="hover:bg-black hover:text-white px-3 py-1 rounded">White Paper</button>

                    </div>
                </div>
                <div className='lg:w-1/2 lg:mt-0 mt-5'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;