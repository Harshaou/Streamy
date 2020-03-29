import React from 'react'
import ReactDOM from 'react-dom'


const Model = (props) => {
    return ReactDOM.createPortal(
        <div onClick={() => props.onDissmiss()} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.header}</div>
                <div className="content">
                {props.renderContent()}
                </div>
                <div className="actions">
                {props.actions()}
                </div>
            </div>
        </div>,
        document.querySelector('#model')
    )
}

export default Model