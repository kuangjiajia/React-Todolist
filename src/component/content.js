import React,{ Component } from 'react';
import Items from './items.js';

class Content extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        let {todos,handleClickDelete,handleClickFinish} = this.props;
        console.log(todos);
        let items = todos.map((json,index) => {
            return (
                <Items text={json.text} index={index} key={index} handleClickDelete={handleClickDelete} handleClickFinish={handleClickFinish}/>
            )
        })
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default Content;