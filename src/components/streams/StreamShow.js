import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions'

class StreamShow extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if(!this.props.streams){
            return null
        }

        const {title, description} = this.props.streams
        
        return (
            <div>
                <h1>Stream Show</h1>
                <h3>{title}</h3>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => ({
    streams: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps,{fetchStream})(StreamShow)
