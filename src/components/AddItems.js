import React from 'react'
import styled from 'styled-components'
import { Inline, TextInput, Button } from "@construct-kit/core";
const AddButton = styled(Button)`
  flex:0;
`
class AddItems extends React.Component {

    changeInputValue = ((e) => {
        this.props.changeInputValue(e);
    })
    addItem = (() => {
        this.props.addItem();
    })

    render() {
        return (
            <Inline inset="0" gap="large" justifyContent="space-between">
                <TextInput
                    label=""
                    hideLabel
                    placeholder="What to do today?"
                    value={this.props.inputText}
                    onChange={this.changeInputValue.bind(this)}
                />
                <AddButton onClick={this.addItem.bind(this)} variant="tertiary" sizeVariant="medium">Add</AddButton>
            </Inline >
        )
    }
}


export default AddItems;