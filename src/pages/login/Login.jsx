
import { Link } from 'react-router-dom';
import image from '../../assets/image/background.jpg';
import logo from '../../assets/logo/logo.png';

import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if(data.email !== data.password){
            reset();
        }
    };
    return (
        <section className="max-w-5xl mx-auto mt-10 mb-10">
            <div className="lg:grid grid-cols-2 h-[700px] shadow-md rounded">
            <div className="hidden lg:flex justify-center items-center p-10 lg:max-w-1/2" style={{ backgroundImage: `url(${image})`, borderRadius: "5px", backgroundPosition: "center", height: "700px", backgroundRepeat: "no-repeat" }}>
                    <div className='bg-[#ffffff2c] p-10 rounded'>
                    <h2 className='text-4xl font-white font-bold'>Premium residential proxies for data scrapting of any scale</h2>
                    </div>
                </div>
                <div className="lg:max-w-1/2 p-16 bg-slate-100">
                    <img src={logo} alt="" />
                    <div className='my-5'>
                        <h2 className='text-2xl font-bold'>Hey, hello.</h2>
                        <p className='text-slate-500'>Enter the information you entered while registering.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input className='w-full p-2 border-[1px] border-slate-400 rounded outline-1 outline-blue-600' type='text' id='email' {...register("email")} placeholder='Enter your email' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="password">Password</label>
                            <input className='w-full p-2 border-[1px] border-slate-400 rounded outline-1 outline-blue-600' type='password' id='password' {...register("password")} placeholder='Enter your password' />
                        </div>
                        <div className='flex justify-start items-center'>
                            <input className='w-5 h-5 mr-3' type='checkbox' id='checkbox' {...register("checkbox")} />
                            <label htmlFor="checkbox">Remember Me?</label>
                        </div>
                        <input className='w-full bg-slate-300 font-bold p-2 rounded cursor-pointer' type="submit" />
                        <p className='text-center'>Don’t have an account? <Link to="/register" className='text-[#1A73E8]'>Sign up for free</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;