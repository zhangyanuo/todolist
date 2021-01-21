

import React from 'react';
import { Button, Inline } from "@construct-kit/core";


function ChooseComponents(props) {
    const { selectAll, selectNone, reverseSelect, submit } = props;
    return (
        <Inline inset="0" gap="small" grow={false}>
            <Button variant="tertiary" sizeVariant="small" onClick={selectAll}>
                全选
                </Button>
            <Button variant="tertiary" sizeVariant="small" onClick={selectNone}>
                全不选
                </Button>
            <Button variant="tertiary" sizeVariant="small" onClick={reverseSelect}>
                反选
                </Button>
            <Button variant="tertiary" sizeVariant="small" onClick={submit}>
                submit
                </Button>
        </Inline>
    )
}



export default ChooseComponents;
