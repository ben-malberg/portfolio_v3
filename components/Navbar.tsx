import useSWR from 'swr';
import PullImage from "@/utils/PullImage";

const Navbar = () => {

    // SWR
    // Create a function to fetch the logo data
    const fetchLogo = async () => PullImage("bm-logo-white");
    // Use the useSWR hook to fetch the data and handle caching
    const { data: logo, error } = useSWR("bm-logo-white", fetchLogo);
    if (error) {
        console.error("Error fetching BM logo: ", error);
    }

    return (
        <div className="navbarContainer">
            <div className="navbarLogoContainer">
                {logo ? logo : <div className="navbarLogo" style={{fontSize: '.75rem'}}>BEN MALBERG</div>}
            </div>
            <ul className="navbarMenuItems">
                <li>BIO</li>
                <li>WORK</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
};

export default Navbar;
