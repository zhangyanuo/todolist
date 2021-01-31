import './App.css';
import React from 'react';
import { useState } from 'react'
import { ConstructKit, Box, H1 } from "@construct-kit/core";
import styled from 'styled-components'
import ListWrap from './components/ListWrap';
import AddItems from './components/AddItems';
import ChooseComponents from './components/ChooseComponent'

const Container = styled(Box)`
  padding: 1rem;
  background-color:#eee;
  width:50%;
`

const Title = styled(H1)`
  font-weight:bold
`

const LineWrap = styled(Box)`
  margin-bottom:1.5rem;
`

function App() {
  const [list, setList] = useState([
    { id: 0, isEdit: true, name: '写代码', status: 0 },
    { id: 1, isEdit: true, name: '读书', status: 0 },
    { id: 2, isEdit: true, name: '洗衣服', status: 0 },
  ]);

  const addToDo = (item) => {
    let olditems = [...list]
    olditems.push(item)
    setList(olditems)
  }
  const finished = (id) => {
    let olditems = [...list];
    olditems = olditems.map((item) => {
      if (item.id === id) {
        item.status = item.status === 0 ? 1 : 0;
      }
      return item
    })
    setList(olditems);
  }

  const delectItem = (id) => {
    let olditems = [...list];
    olditems = olditems.filter((item) => {
      return item.id !== id;
    })
    setList(olditems);
  }

  const changeToSave = (id) => {

    let olditems = [...list];
    olditems = olditems.map((item) => {
      if (item.id === id) {
        item.isEdit = false;
      }
      return item
    })
    setList(olditems);
  }

  const changeToEdit = (id, txt) => {
    let olditems = [...list];
    olditems = olditems.map((item) => {
      if (item.id === id) {
        item.isEdit = true;
        item.name = txt;
      }
      return item
    })
    setList(olditems);
  }

  const selectAll = (() => {
    let olditems = [...list];
    olditems = olditems.map((items) => {
      items.status = 1;
      return (items);
    })
    setList(olditems);
  })

  const selectNone = (() => {
    let olditems = [...list];
    olditems = olditems.map((items) => {
      items.status = 0;
      return (items);
    })
    setList(olditems);
  })

  const reverseSelect = (() => {
    let olditems = [...list];
    olditems = olditems.map((items) => {
      items.status = items.status === 0 ? 1 : 0;
      return (items);
    })
    setList(olditems);

  })

  const submit = (() => {
    let olditems = [...list];
    olditems = olditems.filter((item) => {
      return item.status === 1;
    })
    
    console.log(olditems)
   fetch("http://localhost:8000/")
        .then(res => res.text())
        .then(res => {
          console.log(res)
        });
  })

  return (<div className="App">
    <header className="App-header">
      <ConstructKit>
        <Container>
          <Title>TO DO LIST</Title>
          <LineWrap>
            <ListWrap list={list}
              finished={finished}
              delectItem={delectItem}
              changeToSave={changeToSave}
              changeToEdit={changeToEdit}
            ></ListWrap>
          </LineWrap>
          <LineWrap>
            <AddItems
              list={list}
              addToDo={addToDo}>
            </AddItems>
          </LineWrap>
          <ChooseComponents
            selectAll={selectAll}
            selectNone={selectNone}
            reverseSelect={reverseSelect}
            submit={submit}
          ></ChooseComponents>
        </Container>
      </ConstructKit>
    </header>
  </div>)
}

export default App;
