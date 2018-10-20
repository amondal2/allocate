import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';
import { post } from 'axios';

const styles = {
  dropzone: {
    padding: '200px',
    alignText: 'center'
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
  }
  fileUpload = (file) => {
    const url = 'http://localhost:5000/';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }
    return  post(url, formData,config)
  }

  onDrop = ([file]) => {
    this.fileUpload(file).then(response => {
      const items = response.data.split('\n');
      this.setState({
        items,
      });
    });
  }

  render() {
    if (this.state.items.length === 0) {
      return (
        <div style={styles.dropzone}>
          <Dropzone
            onDrop={this.onDrop}
          > Drag receipt here </Dropzone>
        </div>
      );
    }
    const itemsList = this.state.items.map(
      item => (<h1 key={item}> {item} </h1>)
    );
    return itemsList;
  }
}

export default App;
