import React from "react";
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

const Sharemodel = ({ title, image, onClose }) => {
    return (
        <>
            <div className="share-model-main-background" onClick={onClose}></div>
            <div className={`share-model-main open`}>
                <div className="share-model-close" onClick={onClose}>
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
                    <div className="share-model-via-box">
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