import React from 'react';
import './AgregarTarea.scss';

export default class AgregarTarea extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.agregarTarea} className='add-task'>
        <input type="text"
                onChange={this.props.guardarTarea}
                value={this.props.value}
                placeholder="Inserte tarea"
                size="30"/>
        <input type="submit" value="Agregar"/>
      </form>
    )
  }
}
