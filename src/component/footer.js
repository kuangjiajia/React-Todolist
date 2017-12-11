import React,{ Component } from 'react';

class Footer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div style={{marginTop: "40px"}}>
                <button style={{border: "1px solid black"}}>All</button>
                <button style={{border: "1px solid black"}}>Active</button>
                <button style={{border: "1px solid black"}}>Completed</button>
            </div>
        )
    }
}

export default Footer;