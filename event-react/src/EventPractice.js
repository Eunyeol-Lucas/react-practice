import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        message: '',
        name: ''
    }

    render() {
        return (
          <div>
            <h1>이벤트 연습</h1>
            <input
              type="text"
              name="message"
              placeholder="아무거나"
              //   value={this.state.message}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({
                  message: e.target.value,
                });
              }}
            />
            <input
              type="text"
              name="name"
              placeholder="이름"
              //   value={this.state.name}
              onChange={(e) => {
                console.log(e.target.value);
                this.setState({
                  name: e.target.value,
                });
              }}
            />
            <p>{this.state.message}</p>
            <p>{this.state.name}</p>
          </div>
        );
    }
}

export default EventPractice;