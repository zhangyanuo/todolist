import './App.css';
import React from 'react';
import { ConstructKit, Box, H1, TextInput, Button, Inline } from "@construct-kit/core";
import styled from 'styled-components'
import ListItems from './components/ListItems.js';

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

const AddButton = styled(Button)`
  flex:0;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, isEdit: true, name: '写代码', status: 0 },
        { id: 1, isEdit: true, name: '读书', status: 0 },
        { id: 2, isEdit: true, name: '洗衣服', status: 0 },
      ],
      inputText: '',
    }
  }

  completeTask = (index) => {
    let list = this.state.list;
    list[index].status = list[index].status === 0 ? 1 : 0;
    this.setState({
      list: list
    });
  }

  changeToSave = (index) => {
    let list = this.state.list;
    list[index].isEdit = false;
    this.setState({
      list: list
    });
  }

  changeToEdit = ((index) => {
    let list = this.state.list;
    list[index].isEdit = true;
    this.setState({
      list: list
    });
  })

  changeValue=((id,event)=>{
    let list = this.state.list;
    list.forEach((item)=>{
      if(item.id===id){
        item.name=event.target.value
      }
    })
    this.setState({
      list: list
    });
  })

  changeInputValue = ((e) => {
    this.setState({
      inputText: e.target.value
    });
  })

  delectItem = ((id) => {
    let list = this.state.list;
    list.splice(list.findIndex(items => items.id === id), 1);
    this.setState({
      list: list
    });
  })


  addItem = (() => {
    let list = this.state.list;
    let listItem = { id: list[list.length-1].id + 1, isEdit: true, name: this.state.inputText, status: 0 };
    list.push(listItem);
    this.setState({
      list: list,
      inputText:''
    });
  })


  selectAll = (() => {
    let list = this.state.list;
    list = list.map((items) => {
      items.status = 1
      return (items)

    })
    this.setState({
      list: list
    });
  })

  selectNone = (() => {
    let list = this.state.list;
    list = list.map((items) => {
      items.status = 0
      return (items)

    })
    this.setState({
      list: list
    });
  })

  reverseSelect = (() => {
    let list = this.state.list;
    list = list.map((items) => {
      items.status = items.status === 0 ? 1 : 0;
      return (items)

    })
    this.setState({
      list: list
    });
  })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ConstructKit>
            <Container>
              <Title>TO DO LIST</Title>
              <LineWrap>
                <ListItems data={this.state.list}
                  changeToSave={this.changeToSave.bind(this)}
                  completeTask={this.completeTask.bind(this)}
                  changeToEdit={this.changeToEdit.bind(this)}
                  changeValue={this.changeValue.bind(this)}
                  delectItem={this.delectItem.bind(this)}
                ></ListItems>
              </LineWrap>
              <LineWrap>
                <Inline inset="0" gap="large" justifyContent="space-between">
                  <TextInput
                    label=""
                    hideLabel
                    placeholder="What to do today?"
                    onChange={this.changeInputValue.bind(this)}
                    value={this.state.inputText}
                  />
                  <AddButton onClick={this.addItem.bind(this)} variant="tertiary" sizeVariant="medium">Add</AddButton>
                </Inline>
              </LineWrap>
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
                <Button variant="tertiary" sizeVariant="small" onClick={this.reverseSelect.bind(this)}>
                  submit
                </Button>
              </Inline>
            </Container>
          </ConstructKit>
        </header>
      </div>
    );
  }
}

export default App;
