import React, { Component } from 'react';
import {deleteStream, fetchStream } from '../../actions'
import { connect } from 'react-redux';
import Model from '../Model'
import history from '../../history'


class StreamDelete extends Component {

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }



    render() {
        const {id} = this.props.match.params
        console.log("id: ", id);
        
        if(!this.props.stream){
            return <h2>Loading</h2>
        }

        const actions = () => {
            return (
                <div>
                    <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                    <button onClick={() => history.push('/')} className="ui button">Cancel</button>
                </div>
            )
        }

        const renderContent = () => {
            return (
            <div className="ui celled list">
            <div className="item" >
                <i className="large middle aligned icon camera" />
                <div className="content">{this.props.stream.title}
                    <div className="description">{this.props.stream.description}</div>
                </div>
            </div>
            </div>
            )
        }

        

        return (
            <div>
                <h3>Delete Stream</h3>
                <Model 
                header={"Delete Stream"}
                content={"Are you sure want to delete this stream ?"}
                actions={() => actions()}
                onDissmiss={()=> history.push('/')}
                renderContent={() => renderContent()}
                />
            </div>    
        );
    }
}

const mapStateToProps = (state,ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)
