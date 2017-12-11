import React,{ Component } from 'react';
// import Items from './component/items.js';

class Items extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.finishItem = this.finishItem.bind(this);
    }

    deleteItem() {
        let {index,handleClickDelete} = this.props;
        console.log(index);
        this.props.handleClickDelete(index);
    }

    finishItem() {
        let {index,handleClickFinish} = this.props;
        console.log(index);
        this.props.handleClickFinish(index);
    }
    render() {
        let {text,index,handleClickDelete} = this.props;
        return (
            <div>
                <div key={index}>{text}</div>
                <button onClick={this.deleteItem} style={{border: "1px solid red"}}>点击删除</button>
                <button onClick={this.finishItem} style={{border: "1px solid red"}}>点击完成</button>
            </div>
        )
    }
}

export default Items;