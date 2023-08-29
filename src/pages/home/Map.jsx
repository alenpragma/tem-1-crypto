
import map from '../../assets/icon/map.png';
const Map = () => {

    return (
        <section className="max-w-6xl mx-auto lg:px-0 px-5 pt-20 mb-10" id='map'>
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="font text-4xl font-bold">We have more than 3 Bilion worldwide user</h2>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, perferendis. Quas harum dolorem magni laudantium.</p>
            </div>
            <div className='mt-16 flex justify-center'>
                <img src={map} alt="" />
            </div>
        </section>
    );
};

export default Map;