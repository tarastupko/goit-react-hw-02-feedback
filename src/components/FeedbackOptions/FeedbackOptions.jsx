import React, { Component } from "react";
import { Button, List } from "./FeedbackOptions.styled"
import { getColor } from "./buttonColor"
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options,onLeaveFeedback }) => {

    return (
        <List>
        {options.map(option => (
            <li key={option.toLowerCase()}>
                <Button name={option.toLowerCase()} color={getColor(option)} onClick={onLeaveFeedback}>{option}</Button></li>
        ))}
        </List>
    )
}