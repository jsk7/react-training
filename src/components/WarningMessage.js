import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './WarningMessage.scss';


export default class WarningMessage extends React.Component {

  render() {
    return (
        <ReactCSSTransitionGroup
                  transitionName="warning"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
          {this.props.show &&
            <div className="warning" key="warning">Por favor, escriba una tarea para que se agregue a la lista</div>
          }
        </ReactCSSTransitionGroup>
    )
  }
}
