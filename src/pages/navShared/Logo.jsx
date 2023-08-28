import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png"

const Logo = () => {
    return (
        <div>
            <Link>
                <img className="w-40" src={logo} alt="" />
            </Link>
        </div>
    );
};

export default Logo;