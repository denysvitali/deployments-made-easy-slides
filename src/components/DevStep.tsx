/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import { FlexBox, Text } from 'spectacle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './DevStep.scss';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface DevStepProps {
    icon: IconProp;
    desc: string;
};

class DevStep extends React.Component<DevStepProps> {
    render(): JSX.Element {
        return (
            <div className="dev-step">
                <FlexBox flexDirection="column" color="#eaeaea">
                    <FontAwesomeIcon className="icon" icon={this.props.icon}/>
                    <Text className="description">{ this.props.desc }</Text>
                </FlexBox>
            </div>
        )
    }
}

export default DevStep;