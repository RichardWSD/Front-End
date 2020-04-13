import React, { Component } from 'react';
// 在使用Ant Design时，第一件事就是先引入CSS样式
import 'antd/dist/antd.css';
import { Input , Button , List } from 'antd'

// 这种没业务逻辑，只有UI部分的组件可以做成无状态组件
const TodoListUI = (props)=>{
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) => (
                            <List.Item onClick={()=>{props.deleteItem(index)}}>
                                {item}
                            </List.Item>
                        )
                    }
                />
            </div>
        </div>
    );
}


/*
class TodoListUI extends Component {
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input
                        placeholder={this.props.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button type="primary" onClick={this.props.clickBtn}>增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={
                            (item, index) => (
                                <List.Item onClick={()=>{this.props.deleteItem(index)}}>
                                    {item}
                                </List.Item>
                            )
                        }
                    />
                </div>
            </div>
        );
    }
}
 */
export default TodoListUI;