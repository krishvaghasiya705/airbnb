import React, { useState, useEffect } from "react";
import "./helpheader.scss";
import Helpcentericon from '../../../assets/svg/Helpcentericon';
import { NavLink } from 'react-router-dom';
import EarthIcon from "../../../assets/svg/EarthIcon";
import Hemburger from "../../../assets/svg/hemburger";
import Profileicon from "../../../assets/svg/profileicon.svg";
import Earthmodel from '../../Earthmodel';

const Helpheader = () => {
    const [isEarthModalOpen, setIsEarthModalOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const openEarthModal = () => {
        if (window.innerWidth >= 576) {
            setIsEarthModalOpen(true);
            setIsActive(true);
        }
    };

    const closeEarthModal = () => {
        setIsEarthModalOpen(false);
        setIsActive(false);
    };

    const handleResize = () => {
        if (window.innerWidth < 576 && isEarthModalOpen) {
            closeEarthModal();
        }
    };

    useEffect(() => {
        document.body.style.overflow = isEarthModalOpen ? "hidden" : "auto";

        window.addEventListener("resize", handleResize);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("resize", handleResize);
        };
    }, [isEarthModalOpen]);

    return (
        <>
            <header>
                <div className="help-container-header">
                    <div className="help-header-main">
                        <NavLink to={"/"}>
                            <div className="help-header-logo-main">
                                <Helpcentericon />
                                <span>Help Centre</span>
                            </div>
                        </NavLink>

                        <div className="header-last-content-main">
                            <NavLink
                                to={"#"}
                                onClick={isEarthModalOpen ? closeEarthModal : openEarthModal}
                                className={isActive ? "earth-icon-active" : ""}
                            >
                                <EarthIcon />
                            </NavLink>

                            <div className="header-profile-div-main">
                                <Hemburger />
                                <img src={Profileicon} alt="Profile icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Earthmodel isModalOpen={isEarthModalOpen} closeModal={closeEarthModal} />
        </>
    );
};

export default Helpheader;