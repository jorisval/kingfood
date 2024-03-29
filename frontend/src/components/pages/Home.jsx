import React, { useContext, useState, useEffect, useRef } from "react";
import CatalogView from "../layout/catalog-view";
import ThankYouPopup from "./Thank-you-booking";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/k-hero-image.png";
import CustomerImage1 from "../../assets/images/customer-image.png";
import Coma from "../../assets/images/section-one-coma.png";
import StaffImage1 from "../../assets/images/staff-1.png";
import StaffImage2 from "../../assets/images/staff-2.png";
import StaffImage3 from "../../assets/images/staff-3.png";
import Trust1 from "../../assets/images/trust-1.png";
import Trust2 from "../../assets/images/trust-2.png";
import Trust3 from "../../assets/images/trust-3.png";
import Trust4 from "../../assets/images/trust-4.png";
import Trust5 from "../../assets/images/trust-5.png";
import Trust6 from "../../assets/images/trust-6.png";
import Trust7 from "../../assets/images/trust-7.png";
import { HomeContainer } from "../styles/Home";
import { Link } from "react-router-dom";
import { BASE_URL } from '../../config';


function Home() {
    const { setActivePage } = useContext(HeaderContext);
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;

    const [activeReview, setActiveReview] = useState(0);
    const reviewRef = useRef();
    const reviewsData = [
        {
            name: "RONALD D. MORGAN",
            post: "FOUCHETTE & CO",
            image: CustomerImage1,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            name: "JEAN D. CLAUDE",
            post: "CHIVI & CO",
            image: CustomerImage1,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            name: "ALEX TARGARIAN",
            post: "THRONE & CO",
            image: CustomerImage1,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        },
        {
            name: "SAHAD DANARIAS",
            post: "TESLA INC.",
            image: CustomerImage1,
            comment: "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi."
        }
    ]
    
    const handleReviewScroll = (direction) => {
        if (direction === 'left') {
            reviewRef.current.scrollLeft -= reviewRef.current.offsetWidth;
            if (activeReview > 0) {
                setActiveReview(activeReview - 1);
            }
        } else {
            reviewRef.current.scrollLeft += reviewRef.current.offsetWidth;
            if   (activeReview < reviewsData.length - 1) {
                setActiveReview(activeReview + 1);
            }
        }
    };

    const handleReviewCircleClick = (index) => {
        setActiveReview(index);
        reviewRef.current.scrollLeft = index * reviewRef.current.offsetWidth;
    };


    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);
    async function handleBookingSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
      
        try {
            await fetch(`${BASE_URL}/api/booking/`, {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            // Reset the form
            event.target.reset();
            
            //Redirect to the home page
            setShowThankYouPopup(true);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
    };

    return(
        <HomeContainer className="home">
            <div className="hero">
                <div className="hero__text">
                    <h1>RECIPE MENU</h1>
                    <p className="subtitle">HOME <span>/ RECIPE MENU</span></p>
                </div>
                <div className="hero__image">
                    <img src={Hero} alt=""/>
                </div>
            </div>
            <CatalogView id="catalogView"/>
            <div className="section-one">
                <div className="section-one__image">
                </div>
                <div className="section-one__text">
                    <p className="subtitle">Testimonial</p>
                    <h2>OUR CUSTOMER SAY</h2>
                    <div className="coma">
                        <img src={Coma} alt=""/>
                        <img src={Coma} alt=""/>
                    </div>
                    <div className="Customer-reviews" ref={reviewRef}>
                        <span className="bi bi-chevron-left" onClick={() => handleReviewScroll('left')}></span>
                        {reviewsData.map((review, index) => (
                            <div className={`Customer-review ${index === activeReview ? 'active' : ''}`} key={index}>
                                <p>{review.comment}</p>
                                <img src={review.image} alt="" className="Customer-review__image"/>
                                <div className="Customer-review__name">{review.name}</div>
                                <div className="Customer-review__post">{review.post}</div>
                            </div>
                        ))}
                        <span className="bi bi-chevron-right" onClick={() => handleReviewScroll('right')}></span>
                    </div>
                    <div className="review-circles">
                        {reviewsData.map((_, index) => (
                            <div
                                className={`review-circle ${index === activeReview ? 'active' : ''}`}
                                onClick={() => handleReviewCircleClick(index)}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="section-two">
                <div className="section-two__image">
                </div>
                <div className="section-two__text">
                    <p className="subtitle">Reservation</p>
                    <h2>BOOK A TABLE NOW !</h2>
                    <div className="booking-section">
                        <form onSubmit={handleBookingSubmit}>
                            <div>
                                <select name="person" id="person">
                                    <option value="1">1 Person</option>
                                    <option value="2">2 Person</option>
                                    <option value="3">3 Person</option>
                                    <option value="4">4 Person</option>
                                    <option value="5">5 Person</option>
                                    <option value="6">6 Person</option>
                                </select>
                            </div>
                            <div><input type="email" name="email" id="email" placeholder="Email"/></div>
                            <div><input type="time" name="time" id="time" defaultValue={currentTime}/></div>
                            <div><textarea name="message" id="message" rows="6" placeholder="Message"></textarea></div>
                            <div><input type="submit" value="RESERVE NOW" className="cta-button"/></div>
                        </form>
                    </div>
                </div>
            </div>
            {showThankYouPopup && (
                <ThankYouPopup onClose={handleCloseThankYouPopup} />
            )}
            <div className="staff">
                <div className="staff-header">
                    <div className="staff-header__part1">
                        <p className="subtitle">Our Professional</p>
                        <h2>MEET OUR STAFF</h2>
                    </div>
                    <div className="staff-header__part2">
                        <Link to='/faq' className="cta-button">VIEW ALL STAFF</Link>
                    </div>
                </div>
                <div className="staff-members">
                    <div className="staff-member">
                        <div className="image">
                            <img src={StaffImage1} alt=""/>
                        </div>
                        <div className="infos">
                            <div className="staff-member__name">RASALINA DE</div>
                            <div className="staff-member__experience">12 YEARS EXPERIENCE</div>
                        </div>
                        <div className="media">
                            <Link to=""><span className="bi bi-facebook"></span></Link>
                            <Link to=""><span className="bi bi-twitter"></span></Link>
                            <Link to=""><span className="bi bi-pinterest"></span></Link>
                            <Link to=""><span className="bi bi-linkedin"></span></Link>
                        </div>
                    </div>
                    <div className="staff-member">
                        <div className="image">
                            <img src={StaffImage2} alt=""/>
                        </div>
                        <div className="infos">
                            <div className="staff-member__name">MARK HERNERITIX</div>
                            <div className="staff-member__experience">10 YEARS EXPERIENCE</div>
                        </div>
                        <div className="media">
                            <Link to=""><span className="bi bi-facebook"></span></Link>
                            <Link to=""><span className="bi bi-twitter"></span></Link>
                            <Link to=""><span className="bi bi-pinterest"></span></Link>
                            <Link to=""><span className="bi bi-linkedin"></span></Link>
                        </div>
                    </div>
                    <div className="staff-member">
                        <div className="image">
                            <img src={StaffImage3} alt=""/>
                        </div>
                        <div className="infos">
                            <div className="staff-member__name">PETER SIA</div>
                            <div className="staff-member__experience">12 YEARS EXPERIENCE</div>
                        </div>
                        <div className="media">
                            <Link to=""><span className="bi bi-facebook"></span></Link>
                            <Link to=""><span className="bi bi-twitter"></span></Link>
                            <Link to=""><span className="bi bi-pinterest"></span></Link>
                            <Link to=""><span className="bi bi-linkedin"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="trust-section">
                <div className="trust-images">
                    <img src={Trust1} alt="" />
                    <img src={Trust2} alt="" />
                    <img src={Trust3} alt="" />
                    <img src={Trust4} alt="" />
                    <img src={Trust5} alt="" />
                    <img src={Trust6} alt="" />
                    <img src={Trust7} alt="" />
                </div>
                <div className="trust-images">
                    <img src={Trust1} alt="" />
                    <img src={Trust2} alt="" />
                    <img src={Trust3} alt="" />
                    <img src={Trust4} alt="" />
                    <img src={Trust5} alt="" />
                    <img src={Trust6} alt="" />
                    <img src={Trust7} alt="" />
                </div>
            </div>
        </HomeContainer>
    )
}

export default Home