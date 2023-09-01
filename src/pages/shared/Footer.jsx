import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

const Footer = () => {
    return (
        <section className="max-w-7xl mx-auto lg:px-0 px-5">
            <footer className="footer p-10 text-base-content flex justify-around">
                <div className="w-2/5">
                    <img className='w-64' src={logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, minus sint iure nisi mollitia necessitatibus aut error quo sapiente nesciunt, accusantium consectetur repellat voluptates eaque?</p>
                </div>
                <div className="w-3/5 flex justify-around">
                    <div className="flex flex-col">
                        <span className="footer-title">Importent Menu</span>
                        <a className="link link-hover">About us</a>
                        <Link to="contact" className="link link-hover">Contact</Link>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="footer-title">My Account</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div className="flex flex-col">
                        <span className="footer-title">Address</span>
                        <h2 className='font-semibold'>Cecilia Chapman</h2>
                        <span>711-2880 Nulla St.</span>
                        <span> Mankato Mississippi 96522</span>
                        <span>(257) 563-7401</span>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;