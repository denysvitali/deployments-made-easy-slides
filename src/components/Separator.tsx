/* eslint-disable react/destructuring-assignment */
import React from "react";
import { FlexBox, Slide } from 'spectacle';
import './Separator.scss';

interface SeparatorProps {
    backgroundColor?: string;
};

class Separator extends React.Component<SeparatorProps> {
    render(): JSX.Element {
        return (
            <Slide backgroundColor={this.props.backgroundColor}>
                <FlexBox alignContent="middle" height="100%" flexDirection="column">
                    <FlexBox>
                    { this.props.children }
                    </FlexBox>
                </FlexBox>
            </Slide>
        )
    }
}

export default Separator;