import React, {PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import './DisplayTareas.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class DisplayTareas extends React.Component {

  render() {
    return (
      <div className="tareas">
        <Col lg={4} md={4} sm={4} xsHidden />
        <Col lg={4} md={4} sm={4} xs={12}>
          <ReactCSSTransitionGroup
                    transitionName="task"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
              {
                this.props.tareas.map((tarea, key) => (
                <Row onClick={this.props.completar.apply(null, [key])}
                      className="tarea"
                      key={key.toString()}>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    <span>{tarea.nombre}</span>
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <span className={'state ' + (tarea.completada ? 'tick' : 'circle')}/>
                  </Col>
                </Row>
              ))}
          </ReactCSSTransitionGroup>
        </Col>
        <Col lg={4} md={4} sm={4} xsHidden />

    </div>
    )
    }
  }

DisplayTareas.propTypes = {
  tareas: React.PropTypes.array,
  completar: React.PropTypes.func
};
