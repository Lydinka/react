import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";


const Button = styled.button`
  border-radius: 6px;
  font-weight: bold;
  padding: 0.25em 2em;
  margin: 0.5em;
  background: transparent;
  color:#003087;
  border: 2px solid #003087;
 `;

 const Title = styled.span`
    padding: 0.29em;
    margin: 0.5em;
    color: #003087;
    background: orange;
    border: 1px solid #003087;
    border-radius: 3px;
`;

 const TitleChecked = styled.span`
    padding: 0.29em;
    margin: 0.5em;
    color: #003087;
    background: green;
    border: 1px solid #003087;
    border-radius: 3px;
`;


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
       const title = this.props.task.checked ? (<TitleChecked>{this.props.task.title}</TitleChecked>):
           (<Title>{this.props.task.title}</Title>);

        return (
            <div>
                <label>
                    {title}
                        <span>
                        <Button onClick={this.onCheckClick}>{this.props.task.checked ?'UN-CHECK' : 'CHECK'}</Button>
                        </span>
                        <Button  onClick={this.onCleanClick}>CLEAN</Button>
                </label>
            </div>
        )
    }
}

 Task.propTypes ={
        task:PropTypes.object,
        onCheckClick:PropTypes.func,
        onCleanClick:PropTypes.func,
};