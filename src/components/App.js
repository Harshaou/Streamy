import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import StreamList from './streams/StreamList'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'


class App extends Component {

    render() {
        return (
            <div className="ui container">
                <Header />
             <div>
             <Route exact path="/" component={StreamList}/>
             <Route path="/streams/new" component={StreamCreate}/>
             <Route path="/streams/edit/:id" component={StreamEdit}/> 
             <Route path="/streams/delete/:id" component={StreamDelete}/>
             <Route path="/stream/show/:id" component={StreamShow}/>
             </div>
            </div>
        );
    }
}


export default App
