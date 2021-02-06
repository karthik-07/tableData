import React from "react";
import { Component } from "react";
import { Button } from 'antd';


export default class Text extends Component{
    render() {
        return(
            <>
                <label><b>Complaint</b>: </label>
                <textarea rows="4" cols="50"></textarea>
                <Button type="primary" className="box">View Previous Visit Data</Button>

            </>
        );
}
}