import React,{ Component } from 'react';

class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        let {handleKeyChange,handleKeyPunish} = this.props;
        return (
            <div>
                <p>TodoList</p>
                <input type="text" style={{border: "1px solid black"}} onChange={handleKeyChange} onKeyDown={handleKeyPunish}/>
            </div>
        )
    }
}

export default Header;