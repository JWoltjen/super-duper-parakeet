import React from 'react'
import "./intro.scss"
import cat from '../../img/cat.png'
function Intro() {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jeff Woltjen</h1>
                    <div className="i-title">
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Digital Explorer</div>
                            <div className='i-title-item'>Writer</div>
                            <div className='i-title-item'>Content Developer</div>
                        </div>
                    </div>
                    <div className='i-description'>
                        Commodo officia non elit occaecat. Officia non voluptate adipisicing laboris irure aliquip. Eu duis aliqua elit Lorem nisi magna Lorem culpa dolore id aliqua.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className='i-bg'></div>
                <img src={cat} alt='' className='i-img'/>
            </div>
        </div>
    )
}

export default Intro
