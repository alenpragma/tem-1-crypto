
import { Link } from 'react-router-dom';
import image from '../../assets/image/background.jpg';
import logo from '../../assets/logo/logo.png';

import { useForm } from "react-hook-form";
import { useState } from 'react';

import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.password !== data.confirm){
            Swal.fire({
                title: "<strong>Password doesn't match</strong>",
                icon: 'error',
                focusConfirm: false,
                confirmButtonText:
                  'Try Again',
              })
        }else{
            reset();
        }
    };

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleButton = () => {
        setShowPassword(!showPassword)
    }
    const [confirm, setConfirm] = useState('');
    const [ShowConfirm, setShowConfirm] = useState(false);
    const ConfirmToggleButton = () => {
        setShowConfirm(!ShowConfirm)
    }

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
                        <h2 className='text-2xl font-bold'>Sign Up</h2>
                        <p className='text-slate-500'>Enter the information you entered while registering.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">Email</label>
                            <input className='w-full p-2 border-[1px] border-slate-400 rounded outline-1 outline-blue-600' type='text' id='email' {...register("email", { required: true })} placeholder='Enter your email' />
                            {errors.email && <span className="text-red-500">Email field is required</span>}
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? 'text' : 'password'} className='w-full p-2 border-[1px] border-slate-400 rounded outline-1 outline-blue-600' id='password' {...register("password", { required: true })} placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                            {errors.email && <span className="text-red-500">Password field is required</span>}
                            <button>
                                {
                                    showPassword ? <FaEye className='absolute right-2 bottom-3 text-[20px]' onClick={toggleButton} /> :
                                        <FaEyeSlash className='absolute right-2 bottom-3 text-[20px]' onClick={toggleButton} />
                                }
                            </button>
                        </div>
                        <div className='flex flex-col gap-1 relative'>
                            <label htmlFor="confirm">Confirm Password</label>
                            <input type={ShowConfirm ? 'text' : 'password'} className='w-full p-2 border-[1px] border-slate-400 rounded outline-1 outline-blue-600' id='confirm' {...register("confirm", { required: true })} placeholder='Enter Confirm password' onChange={(e) => setConfirm(e.target.value)}/>
                            {/* {errors.email && <span className="text-red-500">Password field is required</span>} */}
                            <button>
                                {
                                    ShowConfirm ? <FaEye className='absolute right-2 bottom-3 text-[20px]' onClick={ConfirmToggleButton} /> :
                                        <FaEyeSlash className='absolute right-2 bottom-3 text-[20px]' onClick={ConfirmToggleButton} />
                                }
                            </button>
                        </div>
                        <input className='w-full bg-slate-300 font-bold p-2 rounded cursor-pointer' type="submit" value="Sign Up" />
                        <p className='text-center'>Don’t have an account? <Link to="/login" className='text-[#1A73E8]'>Log In</Link></p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;