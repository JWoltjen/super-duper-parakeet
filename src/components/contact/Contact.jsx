import React from 'react'
import './contact.scss'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/phone.png'

function Contact() {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's dicuss your project!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone}
                                alt="" 
                                className="c-icon"
                            />
                            +1 913 944 6189
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email}
                                alt="" 
                                className="c-icon"
                            />
                            Jeff.Woltjen@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address}
                                alt="" 
                                className="c-icon"
                            />
                            github.com/JWoltjen
                        </div>
                    </div>
                </div>
                <div className="c-right"></div>
            </div>
        </div>
    )
}

export default Contact
