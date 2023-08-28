import graph from '../../assets/icon/graph.png';
const Graph = () => {
    return (
        <section className="max-w-7xl mx-auto lg:px-0 px-5 pt-10 mb-10">
            <div className='lg:flex justify-center items-center gap-5'>
                <div className='lg:w-1/2 lg:mt-0 mt-5'>
                    <img src={graph} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5 leading-10'>
                    <h2 className="lg:text-6xl text-4xl font">Total Investment sale from last year transaction</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corrupti? Veniam modi mollitia excepturi nihil dolorum non distinctio dolor, assumenda, quam repellat aspernatur et soluta, obcaecati molestias! Placeat nesciunt architecto adipisci, provident accusamus quis nemo magnam beatae totam necessitatibus, voluptatibus iure. Minus, nemo amet facere explicabo expedita molestias sunt illum.</p>
                    <div className='lg:w-1/2'>
                        <button className="bg-black font-bold text-white px-3 py-1 rounded">Lern More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Graph;