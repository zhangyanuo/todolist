
import React, { useRef } from 'react'
import styled from 'styled-components'
import { Checkbox, Inline, Stack, TextInput } from "@construct-kit/core";

const CheckboxContainer = styled.div`
  border-bottom:1px solid #eee;
  display:flex;
  justify-content:space-between;
`

function ListItems(props) {
  const { list: { id, name, isEdit, status }, delectItem, finished, changeToSave, changeToEdit } = props;
  const inputRef = useRef();
  const changeStatus = () => {
    finished(id);
  }
  const deleted = () => {
    delectItem(id);
  }

  const editDisplay = () => {
    changeToSave(id);
  }

  const saveDisplay = () => {
    const txt = inputRef.current.value;
    changeToEdit(id,txt);
  }

 

  return (
    <Stack inset="0.33rem" gap="small" key={id}>
      <CheckboxContainer>
        {isEdit ?
          (<Checkbox label={name} checked={status} onChange={changeStatus} />) :
          (<TextInput ref={inputRef} label="" hideLabel defaultValue={name} ></TextInput>)
        }
        <Inline inset="0" gap="small" grow={false}>
          {isEdit ?
            (<button onClick={editDisplay} >edit</button>) :
            (<button onClick={saveDisplay}>save</button>)
          }
          <button onClick={deleted}>delete</button>
        </Inline>

      </CheckboxContainer>
    </Stack>
  )


}


// class ListItems extends React.Component {

//   completeTask = (index) => {
//     this.props.completeTask(index);
//   }

//   changeToSave = (index) => {
//     this.props.changeToSave(index);
//   }

//   changeToEdit = (index) => {
//     this.props.changeToEdit(index);
//   }

//   changeValue = ((id,e)=>{
//     this.props.changeValue(id,e);
//   })

//   delectItem = ((id) => {
//     this.props.delectItem(id);
//   })

//   render() {


//   }

// }


export default ListItems;