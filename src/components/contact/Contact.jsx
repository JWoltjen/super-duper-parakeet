import React, { useRef } from 'react'
import './contact.scss'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/phone.png'

function Contact() {
    const formRef = useRef(); 

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project!</h1>
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



                <div className="c-right">
                    <p className="c-desc">
                        <b>What do you want to make?</b>
                        <p>Nisi tempor culpa irure nisi officia dolore ullamco sint aliquip tempor. Quis eiusmod culpa aute tempor nostrud. Velit aute pariatur adipisicing laborum reprehenderit.</p>
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
