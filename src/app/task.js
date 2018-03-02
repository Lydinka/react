import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";


const Button = styled.button`
  border-radius: 6px;
  padding: 0.25em 2em;
  margin: 0 0.6em;
  background: transparent;
  color:#003087;
  border: 2px solid #003087;
`

 const Title = styled.span`
    padding: 0.5em;
    margin: 0.5em;
    color: #003087;
    background: #fff; 
    border-radius: 3px;
   text-align: right;
 `;

const click = styled.button``;



export class Task extends React.Component {


    onCheckClick = (e) => {
     e.preventDefault();
       this.props.onCheckClick(this.props.task.id);
     };

    onCleanClick = (e) => {
        e.preventDefault();
       this.props.onCleanClick(this.props.task.id);
    };

    render(){
        const click =  this.props.task.checked ? 'green' : 'orange';
        return (
            <div>
                <label>
                    <Title>
                        {this.props.task.title}</Title>
                        <Button onClick={this.onCheckClick}>{this.props.task.checked ?'Uncheck' : 'Check'}</Button>
                        <Button  onClick={this.onCleanClick}>CLEAN</Button>

                </label>
            </div>)

    }


}

 Task.propTypes ={
        task:PropTypes.object,
        onCheckClick:PropTypes.func,
        onCleanClick:PropTypes.func,
}