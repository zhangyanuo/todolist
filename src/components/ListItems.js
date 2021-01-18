
import React from 'react'
import styled from 'styled-components'
import { Checkbox, Inline, Stack, TextInput } from "@construct-kit/core";

  const CheckboxContainer = styled.div`
  border-bottom:1px solid #eee;
  display:flex;
  justify-content:space-between;
`
class ListItems extends React.Component {

  completeTask = (index) => {
    this.props.completeTask(index);
  }

  changeToSave = (index) => {
    this.props.changeToSave(index);
  }

  changeToEdit = (index) => {
    this.props.changeToEdit(index);
  }

  changeValue = ((id,e)=>{
    this.props.changeValue(id,e);
  })

  delectItem = ((id) => {
    this.props.delectItem(id);
  })

  render() {

    return (
      this.props.data.map((items, index) => {
        return (
          <Stack inset="0.33rem" gap="small" key={items.id}>
            <CheckboxContainer>
              {items.isEdit ?
                (<Checkbox label={items.name} checked={items.status === 1} onChange={this.completeTask.bind(this, index)} />) :
                (<TextInput label="" hideLabel value={items.name} onChange={this.changeValue.bind(this,items.id)}></TextInput>)
              }

              {/* {edit} */}
              <Inline inset="0" gap="small" grow={false}>
                {items.isEdit ?
                  (<button onClick={this.changeToSave.bind(this, index)}>edit</button>) :
                  (<button onClick={this.changeToEdit.bind(this, index)}>save</button>)
                }
                <button onClick={this.delectItem.bind(this, items.id)}>delete</button>
              </Inline>
            </CheckboxContainer>
          </Stack>
        )

      })
    )
  }

}


export default ListItems;