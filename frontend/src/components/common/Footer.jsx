import { useState } from "react";
import Logo from "../../assets/images/kingfood-logo-white.png";
import ThankYouPopup from "../pages/Thank-you-newsletter";
import { useFetch } from "../utils/hooks";
import { Link } from "react-router-dom";
import { BASE_URL } from '../../config';

function Footer() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const { data } = useFetch(`${BASE_URL}/api/post`);
    const posts = Array.isArray(data) && data?.slice(0, 2);

    const formatedDate = (isoDate) => {
        // Create a new Date object from the ISO date string
        const date = new Date(isoDate);

        // Define an array of month names
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Format the date into the desired format
        const formatDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

        return(formatDate); // "March 29, 2023"

    }

    async function handleSubmit(event) {
        event.preventDefault();
        /*
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("${BASE_URL}/api/newsletter", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        ...
        */
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
    
        try {
            const response = await fetch(`${BASE_URL}/api/newsletter`, {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });
      
            const data = await response.json();
            console.log(data);

            // Reset the form
            event.target.reset();

            // Show thank you popup
            setShowThankYouPopup(true);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
      };

    return (
        <div className="footer">
            {showThankYouPopup && (
                <ThankYouPopup onClose={handleCloseThankYouPopup} />
            )}
            <div className="newsletter">
                <h3>SUBSCRIBE NEWSLETTER</h3>
                <form onSubmit={handleSubmit}>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                    <input type="submit" value="SUBSCRIBE NOW"/>
                </form>
            </div>
            <div className="footer__part-1">
                <div className="more">
                    <div className="more-one">
                        <h4>ABOUT KINGFOOD</h4>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis</p>
                    </div>
                    <div className="more-two">
                        <div className="calendar-div">
                            <span className="bi bi-calendar2"></span>
                        </div>
                        <div className="open-hours">
                            <h4>OPEN HOURS</h4>
                            <p>
                                Mon - Sat (8:00 - 6:00)<br/>
                                Sunday - Closed
                            </p>
                        </div>
                    </div>
                </div>
                <div className="support">
                    <h3>CONTACT US</h3>
                    <ul>
                        <li><a href="#b"><i className="address">ADRESS :</i> 123 Main Street, New York, NY 10030</a></li>
                        <li><a href="#b"><i className="phone">PHONE :</i> +33 7 80 70 82 87</a></li>
                        <li><a href="#b"><i className="mail">MAIL :</i> info@kingfood.com</a></li>
                        <li><a href="#b"><i className="fax">FAX ID :</i> +99 7 80 70 82 87</a></li>
                    </ul>
                </div>
                <div className="legal">
                    <h3>LINK</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>FAQ</a></li>
                        <li><a href="#b"><i className="bi"></i>Team</a></li>
                        <li><a href="#b"><i className="bi"></i>History</a></li>
                        <li><a href="#b"><i className="bi"></i>Sales Conditions</a></li>
                        <li><a href="#b"><i className="bi"></i>Privacy Policy</a></li>
                        <li><a href="#b"><i className="bi"></i>Return & Fund Policy</a></li>
                    </ul>
                </div>
                <div className="recent-blog">
                    <h3>RECENT BLOG</h3>
                    {posts && Array.isArray(posts) && 
                        posts.map((post) => {
                            return(
                                <div className="recent-blog__post" key={post._id}>
                                    <Link to={`/article/${post._id}`}>
                                        <div className="post-image">
                                            <img src={post.imageUrl} alt="" />
                                        </div>
                                        <div>
                                            <p>
                                                {post.title.slice(0, 35)}
                                                {post.title.length > 35 && '...'}
                                            </p>
                                            <span>{formatedDate(post.dateCreated)}</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="footer__part-2">
                <div className="footer-logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="footer-copyright">
                    <p>© 2024 Kingfood | All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;