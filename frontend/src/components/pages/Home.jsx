import { useContext, useEffect } from "react";
import CatalogView from "../layout/catalog-view";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/k-hero-image.png";
import CustomerImage1 from "../../assets/images/customer-image.png";
import Coma from "../../assets/images/section-one-coma.png";
//import BeneSecond from "../../assets/images/section2-large.png";
//import PostImage1 from "../../assets/images/nordic.png";
//import PostImage2 from "../../assets/images/kruzo.png";
//import PostImage3 from "../../assets/images/ergonomic.png";
import { HomeContainer } from "../styles/Home";


function Home() {
    const { setActivePage } = useContext(HeaderContext);
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);
    async function handleBookingSubmit(event) {
        event.preventDefault();
    }
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
                    <div className="Customer-reviews">
                        <div className="Customer-review active">
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                            <img src={CustomerImage1} alt="" className="Customer-review__image"/>
                            <div className="Customer-review__name">RONALD D. MORGAN</div>
                            <div className="Customer-review__post">FOUCHETTE & CO</div>
                        </div>
                        <div className="Customer-review">
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                            <img src={CustomerImage1} alt="" className="Customer-review__image"/>
                            <div className="Customer-review__name">JEAN D. CLAUDE</div>
                            <div className="Customer-review__post">CHIVI & CO</div>
                        </div>
                        <div className="Customer-review">
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                            <img src={CustomerImage1} alt="" className="Customer-review__image"/>
                            <div className="Customer-review__name">ALEX TARGARIAN</div>
                            <div className="Customer-review__post">THRONE & CO</div>
                        </div>
                        <div className="Customer-review">
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
                            <img src={CustomerImage1} alt="" className="Customer-review__image"/>
                            <div className="Customer-review__name">SAHAD DANARIAS</div>
                            <div className="Customer-review__post">TESLA INC.</div>
                        </div>
                    </div>
                    <div className="review-circles">
                        <div 
                            className="review-circle active"
                        >
                        </div>
                        <div 
                            className="review-circle"
                        >
                        </div>
                        <div 
                            className="review-circle"
                        >
                        </div>
                        <div 
                            className="review-circle"
                        >
                        </div>
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
            </div>{/*
            <div className="blog">
                <div className="blog__posts">
                    <div className="blog__post">
                        <div className="image">
                            <img src={PostImage1} alt=""/>
                        </div>
                        <div>
                        <h4>Nordic Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                    <div className="blog__post">
                    <div className="image">
                            <img src={PostImage2} alt=""/>
                        </div>
                        <div>
                            <h4>Kurozo Aero Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                    <div className="blog__post">
                    <div className="image">
                            <img src={PostImage3} alt=""/>
                        </div>
                        <div>
                        <h4>Ergonomic Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                </div>
            </div>*/}
        </HomeContainer>
    )
}

export default Home