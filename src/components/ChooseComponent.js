

import React from 'react';
import { Button, Inline } from "@construct-kit/core";


class ChooseComponents extends React.Component {
    selectAll = (() => {
        this.props.selectAll();
    })
    selectNone = (() => {
        this.props.selectNone();
    })
    reverseSelect = (() => {
        this.props.reverseSelect();
    })
    submit=(()=>{
        this.props.submit();
    })
    render() {
        return (
            <Inline inset="0" gap="small" grow={false}>
                <Button variant="tertiary" sizeVariant="small" onClick={this.selectAll.bind(this)}>
                    全选
                </Button>
                <Button variant="tertiary" sizeVariant="small" onClick={this.selectNone.bind(this)}>
                    全不选
                </Button>
                <Button variant="tertiary" sizeVariant="small" onClick={this.reverseSelect.bind(this)}>
                    反选
                </Button>
                <Button variant="tertiary" sizeVariant="small" onClick={this.submit.bind(this)}>
                    submit
                </Button>
            </Inline>
        )
    }
}


export default ChooseComponents;
