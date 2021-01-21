import React from 'react'
import ListItems from './ListItems'
function listWrap(props) {
    const { list, delectItem, finished,changeToSave,changeToEdit } = props;
    return (
        list.map((items) => {
            return (
                <ListItems
                    key={items.id}
                    list={items}
                    delectItem={delectItem}
                    changeToSave={changeToSave}
                    changeToEdit={changeToEdit}
                    finished={finished}></ListItems>
            )

        })
    )
}


export default listWrap;