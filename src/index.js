import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import ToDo from './components/ToDo'

render(
    <ToDo />
    , document.getElementById('app')
);
