import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './App.css';
import axios, { post } from 'axios';

const styles = {
  dropzone: {
    padding: '200px',
    alignText: 'center'
  }
}

class App extends Component {
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
      console.log(response);
    });
  }

  render() {
    return (
      <div style={styles.dropzone}>
        <Dropzone
          onDrop={this.onDrop}
        > Drag receipt here </Dropzone>
      </div>
    );
  }
}

export default App;
