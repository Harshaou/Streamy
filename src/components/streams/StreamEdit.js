import React, { Component } from 'react';
import { connect } from 'react-redux';
import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions/index";
import _ from 'lodash'

class StreamEdit extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.stream.id,formValues)
    }

    render() {

        if(!this.props.stream){
            return <h2>Loading</h2>
        }
        
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                 initialValues={_.pick(this.props.stream, 'title', 'description')}
                 onSubmit={this.onSubmit} 
                 />
                
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit)
