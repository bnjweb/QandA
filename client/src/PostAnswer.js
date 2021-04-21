import React, {Component} from 'react';
import {Link} from "@reach/router";

class PostAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: ""
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit() {
        this.props.submit(this.state.answer);
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Your answer" name="answer" onChange={event => this.onChange(event)}/>
                <br/>
                <button class="add-button" onClick={_ => this.onSubmit()}><p>Add Answer</p></button>
                <br/>
            </>
        );
    }
}

export default PostAnswer;