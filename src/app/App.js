import React from "react";
import PropTypes from 'prop-types';
import './styles/styles.css';


export default class App extends React.Component {

    render()
    {
        return (
            <div >
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
};