import './App.css';
import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react'
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
  const [list, setList] = useState([]);


  const addToDo = (item) => {
    axios.post(
      'http://localhost:8000/addItems', item
    ).then((res) => {
      if (res.data.responseText === "添加成功！") {
        fetchData();
      }
    });


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
    axios.post(
      'http://localhost:8000/delItems', {id:id}
    ).then((res) => {
      console.log(res)
      if (res.data.responseText === "删除成功！") {
      
        fetchData();
      }
    });
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
    let params={
      id:id,
      name:txt
    }
    axios.post(
      'http://localhost:8000/saveItems', params
    ).then((res) => {
      if (res.data.responseText === "修改成功！") {
        fetchData();
      }
    });
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
    // olditems = olditems.filter((item) => {
    //   return item.status === 1;
    // })
    // console.log(olditems)
    
    axios.post(
      'http://localhost:8000/saveStatus', olditems
    ).then((res) => {
      if (res.data.responseText === "修改成功！") {
        fetchData();
      }
    });
  })


  const fetchData = async () => {
    const result = await axios(
      'http://localhost:8000/getList',
    );
    console.log(result)
    setList(result.data);

  };
  useEffect(() => {
   
    fetchData();

  }, [])


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
