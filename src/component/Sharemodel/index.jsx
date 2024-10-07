import React, { useState, useEffect } from "react";
import "./sharemodel.scss";

import Crossicon from "../../assets/svg/Crossicon";
import Copyicon from "../../assets/svg/copyicon";
import Emailicon from "../../assets/svg/Emailicon";
import Messageicon from "../../assets/svg/Messageicon";
import Whatsappicon from "../../assets/svg/Whatsappicon";
import Messangericon from "../../assets/svg/Messangericon";
import Facebookicon2 from "../../assets/svg/Facebookicon2";
import Twittericon2 from "../../assets/svg/Twittericon2";
import Moreicon from "../../assets/svg/Moreicon";

const Sharemodel = ({ title, image, onClose, link }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (title && image) {
            setIsVisible(true);
        }
    }, [title, image]);

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onClose();
            }, 500); // Match this with your closing animation duration
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    const handleClose = () => {
        setIsClosing(true);
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                alert("Link copied to clipboard!");
            })
            .catch((err) => {
                console.error("Failed to copy the link: ", err);
            });
    };

    if (!isVisible) return null; // Prevent rendering if not visible

    return (
        <>
            <div className={`share-model-main-background ${isVisible ? "open" : ""} ${isClosing ? "closing" : ""}`} onClick={handleClose}></div>
            <div className={`share-model-main ${isClosing ? "closing" : "open"}`}>
                <div className="share-model-close" onClick={handleClose}>
                    <Crossicon />
                </div>
                <div className="share-model-title">
                    <h1>Share this experience</h1>
                </div>
                <div className="share-model-card-details">
                    <div className="shared-image">
                        <img src={image} alt={title} />
                    </div>
                    <p>{title}</p>
                </div>
                <div className="share-model-body">
                    <div className="share-model-via-box" onClick={handleCopyLink}>
                        <Copyicon />
                        <p>Copy Link</p>
                    </div>
                    <div className="share-model-via-box">
                        <Emailicon />
                        <p>Email</p>
                    </div>
                    <div className="share-model-via-box">
                        <Messageicon />
                        <p>Messages</p>
                    </div>
                    <div className="share-model-via-box">
                        <Whatsappicon />
                        <p>WhatsApp</p>
                    </div>
                    <div className="share-model-via-box">
                        <Messangericon />
                        <p>Messenger</p>
                    </div>
                    <div className="share-model-via-box">
                        <Facebookicon2 />
                        <p>Facebook</p>
                    </div>
                    <div className="share-model-via-box">
                        <Twittericon2 />
                        <p>Twitter</p>
                    </div>
                    <div className="share-model-via-box">
                        <Moreicon />
                        <p>More options</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sharemodel;