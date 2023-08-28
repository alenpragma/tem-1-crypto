import { Link } from "react-router-dom";


const HomeButton = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    return (
        <li
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 mb-5 lg:mb-0`}
        >
            <Link to="/" className="uppercase font-semibold" smooth={true} duration={1000}>
                <button onClick={goToBtn}>HOME</button>
            </Link>
        </li>
    );
};

export default HomeButton;