import React, { useState } from 'react'
import "./helphowsection.scss"
import SearchIcon from '../../../assets/svg/Search-icon'
import Sideicon from '../../../assets/svg/Sideicon'
import { Link } from 'react-router-dom'
import Helpimage1 from '../../../assets/images/help1.jpg'
import Helpimage2 from '../../../assets/images/help2.jpg'
import Helpimage3 from '../../../assets/images/help3.jpg'
import Helpimage4 from '../../../assets/images/help4.png'

import Helppolicyimage from '../../../assets/images/helppolicy.png'
import Helpsafetyimage from '../../../assets/images/helpsafety.png'

const userTypes = ['Guest', 'Host', 'Experience Host', 'Travel admin']
const helpImages = [
    { src: Helpimage1, alt: "Helpimage1", text: "Getting started with Airbnb" },
    { src: Helpimage2, alt: "Helpimage2", text: "Access and manage your account" },
    { src: Helpimage3, alt: "Helpimage3", text: "Help with a reservation" },
    { src: Helpimage4, alt: "Helpimage4", text: "AirCover for guests" }
]
const topArticles = [
    { title: "Cancelling your reservation for a stay", description: "Your plans have changed and now you need to cancel your reservation. No problem." },
    { title: "Change the date or time of your Experience reservation", description: "You booked an Experience, but the date or time no longer works for you? Don't worry, you don't have to miss out! You may be able to change y…" },
    { title: "If your Host cancels your reservation", description: "While it's rare, sometimes a Host may need to cancel a reservation. We understand this can affect your plans in a big way. Rest assured that…" },
    { title: "Payment methods accepted", description: "Airbnb supports different payment methods, depending on the country your payment account is located in. We'll show you which payment methods…" },
    { title: "Editing, removing, or adding a payment method", description: "If an existing payment method on your account is incorrect (e.g. an expired credit card), you can update it or add a new payment method." },
    { title: "When you'll pay for your reservation", description: "You just made a reservation – congrats! So, what happens next? Your payment method will be charged as soon as your reservation is confirmed …" }
]

export default function Helphowsection() {
    return (
        <div className='help-how-main'>
            <div className='help-container'>
                <h1>Hi, how can we help?</h1>
                <SearchBar />
            </div>
            <div className='help-container'>
                <HelpContent />
            </div>
            <ExploreSection />
        </div>
    )
}

const SearchBar = () => (
    <div className='search-input-main'>
        <div className='search-input'>
            <input type="text" placeholder="Search how-tos and more" aria-label="Search how-tos and more" />
            <button type='button'><SearchIcon /></button>
        </div>
    </div>
)

const HelpContent = () => (
    <div className='help-were-div-main'>
        <UserTypeSlider />
        <LoginPrompt />
        <GuidesSection />
        <TopArticlesSection />
    </div>
)

const UserTypeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='help-were-slide-main'>
            {userTypes.map((type, index) => (
                <div key={index} className='help-were-slide-box'>
                    <p className={activeIndex === index ? 'active' : ''} onClick={() => setActiveIndex(index)}>{type}</p>
                </div>
            ))}
        </div>
    )
}

const LoginPrompt = () => (
    <div className='help-were-ticket-div-main'>
        <div>
            <h2>We're here for you</h2>
            <p>Log in to get help with your reservations, account, and more.</p>
        </div>
        <div className='log-in-button'>
            <button type='button'>Log in or sign up</button>
        </div>
    </div>
)

const GuidesSection = () => (
    <>
        <div className='help-guide-div-main'>
            <div className='help-guide-title-box'>
                <h3>Guides for getting started</h3>
                <button type='button'>Browse all topics<Sideicon /></button>
            </div>
        </div>
        <div className='help-guid-ard-grd-main'>
            {helpImages.map((image, index) => (
                <div key={index} className='help-guide-card'>
                    <div className='help-gide-card-image'>
                        <img src={image.src} alt={image.alt} />
                    </div>
                    <p>{image.text}</p>
                </div>
            ))}
        </div>
    </>
)

const TopArticlesSection = () => (
    <div className='help-guide-top-article-div-main'>
        <h4>Top articles</h4>
        <div className='help-guide-article-grd-main'>
            {topArticles.map((article, index) => (
                <Link key={index} to="/">
                    <div className='help-guide-article-box'>
                        <h5>{article.title}</h5>
                        <p>{article.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
)

const ExploreSection = () => (
    <div className='help-explore-section-main'>
        <div className='help-container'>
            <div className='help-explore-title'>
                <h5>Explore more</h5>
            </div>
            <div className='help-explore-main-flx'>
                <ExploreSectionLeft />
                <ExploreSectionRight />
            </div>
        </div>
    </div>
)

const ExploreSectionLeft = () => (
    <div className='help-explore-left-grd'>
        <ExploreBox image={Helppolicyimage} title="Our community policies" description="How we build a foundation of trust." />
        <ExploreBox image={Helpsafetyimage} title="Safety tips and guidelines" description="Resources to help travellers stay safe." />
    </div>
)

const ExploreBox = ({ image, title, description }) => (
    <Link to="/">
        <div className='help-explore-left-box-one'>
            <div className='help-exlore-left-box-one-image'>
                <img src={image} alt={title} />
            </div>
            <div className='help-exlore-left-box-one-content'>
                <p>{title}</p>
                <span>{description}</span>
            </div>
        </div>
    </Link>
)

const ExploreSectionRight = () => (
    <div className='help-explore-right-flx'>
        <h6>Need to get in touch?</h6>
        <p>We'll start with some questions and get you to the right place.</p>
        <button type='button'>Contact us</button>
        <span>You can also <Link to="/">give us feedback.</Link></span>
    </div>
)