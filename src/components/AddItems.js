import React, { useRef } from 'react'
import styled from 'styled-components'
import { Inline, TextInput, Button } from "@construct-kit/core";
const AddButton = styled(Button)`
  flex:0;
`

function AddItems(props) {
    const { addToDo, list } = props
    const inputRef = useRef();
    const addItem = () => {
        let ids = list[list.length - 1].id;
        ids++;
        const txt = inputRef.current.value
        addToDo({ id: ids, isEdit: true, name: txt, status: 0 },)
    }

    return (
        <Inline inset="0" gap="large" justifyContent="space-between">
            <TextInput
                ref={inputRef}
                label=""
                hideLabel
                placeholder="What to do today?"
            />
            <AddButton onClick={addItem} variant="tertiary" sizeVariant="medium">Add</AddButton>
        </Inline >
    )
}


export default AddItems;