import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";



const Button = styled.button`
    font-weight: bold;
    color:#fff;
    background: #003087;
    border: 2px solid #003087;
    border-radius: 6px;
    padding: 5px 20px;
    margin: 6px;
    `;

 const Title = styled.span`
    font-weight: bold;
    color: #fff;
    background: #ff9233;
    border-radius: 6px;
    padding: 5px 60px;
    margin: 10px;
    width: 35%; 
     border: 1px solid #fff;
  `;

 const TitleChecked = styled.span`
    font-weight: bold;
    border-radius: 6px;
    border-sizing: border-box;
    padding: 5px 60px;
    width:35%;
    margin: 10px;
    color: #fff;
    background: #2DF98C;
  border: 1px solid #fff;
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
            <div className='task'>
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