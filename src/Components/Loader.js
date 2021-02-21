import { Spin } from 'antd'
import React from 'react'

const Loader = ({fullscreen = false}) => {
    return(
        <div className={`hero ${fullscreen ? 'is-fullheight' : ''}`}>
            <div className="hero-body has-text-centered">
                <div className="container">
                    <div className="title">
                        <Spin size="large" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader