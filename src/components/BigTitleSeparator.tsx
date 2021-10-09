/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Heading } from 'spectacle';
import './Separator.scss';
import Separator from "./Separator";

interface BigTitleSeparatorProps {
    backgroundColor?: string;
};

class BigTitleSeparator extends React.Component<BigTitleSeparatorProps> {
    render(): JSX.Element {
        return (
            <Separator backgroundColor={this.props.backgroundColor}>
                <Heading margin={4} padding={4} fontSize="h1">
                    {this.props.children}
                </Heading>
            </Separator>
        )
    }
}

export default BigTitleSeparator;