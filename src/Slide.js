import React, { Component } from 'react';
import { render } from 'react-dom';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import logo from './logo.svg';
import Accordion from './Accordion'
class Slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            isPaneOpenLeft: false
        };
    }

    openLeftPanel = () => {
      this.setState({isPaneOpenLeft: true})
    }


    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {
        return <div ref={ref => this.el = ref}>
            <button onClick={() => this.setState({ isPaneOpen: true })}>Click me to open right pane!</button>
            <div style={{ marginTop: '32px' }}>
                <button onClick={ () => this.setState({ isPaneOpenLeft: true }) }>
                    Click me to open left pane with 20% width!
                </button>
            </div>
            <SlidingPane
                className='some-custom-class'
                overlayClassName='some-custom-overlay-class'
                isOpen={ this.state.isPaneOpen }
                title='Hey, it is optional pane title.  I can be React component too.'
                subtitle='Optional subtitle.'
                onRequestClose={ () => {
                    // triggered on "<" on left top click or on outside click
                    this.setState({ isPaneOpen: false });
                } }>
                <div>And I am pane content. BTW, what rocks?</div>
                <br />
                <img src={logo} className="App-logo" alt="logo" />
            </SlidingPane>
            <SlidingPane
                closeIcon={<div>Some div containing custom close icon.</div>}
                isOpen={ this.state.isPaneOpenLeft }
                title='Hey, it is optional pane title.  I can be React component too.'
                from='left'
                width='300px'
                onRequestClose={ () => this.setState({ isPaneOpenLeft: false }) }>
                <div><Accordion /></div>
            </SlidingPane>
        </div>;
    }
}
export default Slide;
