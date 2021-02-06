import React from "react";
import { Component } from "react";
import { Button } from 'antd';


export default class Buttons extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <>
                <label><b>{this.props.name}</b>: </label>
                <textarea rows="4" cols="50"></textarea>
                <Button type="primary" className="box">View Previous Visit Data</Button>

            </>
        );
}
}