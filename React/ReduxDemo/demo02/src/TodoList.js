import React from 'react';
import { connect } from 'react-redux'  //引入连接器

const TodoList =(props)=>{
    let {inputValue ,inputChange,clickButton,list} = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}
/*
class TodoList extends Component {

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} />
                    <button onClick={this.props.clickButton}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>

        );
    }
}
 */
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        clickButton() {
            let action = { type: 'add_item' }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList)