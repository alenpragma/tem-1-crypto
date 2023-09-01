
import { Link } from 'react-router-dom';
import image from '../../assets/image/contact.png';
import logo from '../../assets/logo/logo.png';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.email !== data.password) {
            reset();
        }
    };
    return (
        <section className="max-w-5xl mx-auto mt-10 mb-10">
            <div className="lg:grid grid-cols-2 rounded">
                <div className="hidden lg:flex justify-center items-center p-10 lg:max-w-1/2">
                    <img src={image} alt="" />
                </div>
                <div className="lg:max-w-1/2 px-16 pb-10">
                    <div className='my-5'>
                        <h2 className='text-2xl text-center font-bold'>Contact Us</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                        <div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="title" className="mb-2">
                                    Name
                                </label>
                                <input
                                    className='w-full p-2 border-[1px] border-slate-400 rounded-xl outline-1 outline-blue-600'
                                    id="name"
                                    type="text"
                                    {...register("description")}
                                />
                            </div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="title" className="mb-2">
                                    Email
                                </label>
                                <input
                                    className='w-full p-2 border-[1px] border-slate-400 rounded-xl outline-1 outline-blue-600'
                                    id="name"
                                    type="email"
                                    {...register("email")}
                                />
                            </div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="title" className="mb-2">
                                    Subject
                                </label>
                                <input
                                    className='w-full p-2 border-[1px] border-slate-400 rounded-xl outline-1 outline-blue-600'
                                    id="name"
                                    type="text"
                                    {...register("subject")}
                                />
                            </div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="title" className="mb-2">
                                    Message
                                </label>
                                <textarea
                                    className='w-full p-2 border-[1px] border-slate-400 rounded-xl outline-1 outline-blue-600'
                                    id="message"
                                    type="text"
                                    {...register("message")}
                                />
                            </div>
                        </div>
                        <button type='submit' className='w-full bg-slate-300 hover:bg-slate-500 hover:text-white  font-bold p-2 rounded-xl cursor-pointer'>Send</button>
                    </form>
                </div>
            </div>
            <div className='flex justify-center mt-10 lg:px-0 px-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.9272726395943!2d91.98047707505438!3d23.099758013443925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3752e5f392c142c1%3A0x3d99e727c3514ab6!2sEdulife%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1693548626875!5m2!1sen!2sbd" width="1000" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </section>
    );
};

export default Contact;