import React from "react";
import { render } from "react-dom";
import Hello from "./index.js";
import PropTypes from 'prop-types';
import "../styles.css";

export class Task extends React.Component {


   onCheckClick = (e) => {
     e.preventDefault();
     this.props.onCheckHandler(this.props.id)
   };

    onCleanClick = (e) => {
        e.preventDefault();
        this.props.onCleanClick(this.props.id)
    };


    render() {
        console.log(this.state);
        return (<form>
            <label>
                {this.props.title}
                <button onClick={this.onCheckClick}>Check</button>
                <button onClick={this.onCleanClick}>Clean</button>
            </label>
        </form>)
    }
}

 Task.propTypes ={
        title:PropTypes.string,
        id:PropTypes.string,
        onCheckClick:PropTypes.func,
        onCleanClick:PropTypes.func,
}