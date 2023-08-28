

// Phone Img
import img1 from '../../assets/icon/Phone1.png';
import img2 from '../../assets/icon/Phone2.png';


// button Img
import apple from '../../assets/icon/Apple.png';
import PlayStore from '../../assets/icon/playStore.png';


// Customers Img
import verify from '../../assets/icon/varify.png';
import wallet from '../../assets/icon/walet.png';
import pay from '../../assets/icon/pay.png';

const AppSection = () => {
    return (
        <section className="max-w-7xl mx-auto lg:px-0 px-5 pt-10 mb-10">
            <div className='lg:flex justify-center items-center gap-5'>
                <div className='lg:w-1/2 lg:mt-0 mt-5 flex justify-center items-baseline relative'>
                    <img className='w-[280px]' src={img2} alt="" />
                    <img className='w-[300px] -ml-20' src={img1} alt="" />
                </div>
                <div className='lg:w-1/2 space-y-5 leading-10 mt-5 lg:mt-0'>
                    <h2 className="lg:text-6xl text-4xl font">Our wallet is built-in for the cryptocurrencies customers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, corrupti? Veniam modi mollitia excepturi nihil dolorum non distinctio dolor, assumenda, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, nostrum?</p>
                    <div>
                        <ul>
                            <li className='flex justify-start items-center gap-5'>
                                <img className='w-5' src={verify} alt="" />
                                <p>Secure transfers with verified Casinos.</p>
                            </li>
                            <li className='flex justify-start items-center gap-5'>
                                <img className='w-5' src={wallet} alt="" />
                                <p>Easily buy and sell CLV within the wallet.</p>
                            </li>
                            <li className='flex justify-start items-center gap-5'>
                                <img className='w-5' src={pay} alt="" />
                                <p>Pay for Gas in CLV.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-start items-center gap-5'>
                        <button className='bg-black w-[200px] rounded flex justify-center items-center gap-3 px-5 py-2'>
                            <img className='w-5' src={apple} alt="" />
                            <span className='uppercase text-white font-bold'>App Store</span>
                        </button>
                        <button className='bg-black w-[200px] rounded flex justify-center items-center gap-3 px-5 py-2'>
                            <img className='w-5' src={PlayStore} alt="" />
                            <span className='uppercase text-white font-bold'>App Store</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AppSection;