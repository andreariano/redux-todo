import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextInput from './TextInput';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    var itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });
    
    return <li className={itemClass}>
      <div className="view">
        <input type="checkbox"
               className="toggle"
               defaultChecked="toggle" />
        <label htmlFor="todo">
          {this.props.text}
        </label>
        <button className="destroy"
                onClick={() => this.props.deleteItem(this.props.id)}></button>
      </div>
      <TextInput /> 
    </li>
  }
};