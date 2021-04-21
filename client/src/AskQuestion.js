import React, {Component} from 'react';
import {Link} from "@reach/router";

class AskQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit() {
        this.props.submit(this.state.title);
    }


    render() {
        return(
            <>
                <h2>Ask a question</h2>
                <input type="text" placeholder="Your question" name="title" onChange={event => this.onChange(event)}/>
                <br/>
                <Link to="/"><button class="add-button" onClick={_ => this.onSubmit()}><p>Add question</p></button></Link>
                <br/><br/><hr></hr>
                <Link to="/"><div class="add-button"><p>Go back</p> </div></Link>

            </>
        );
    }
}

export default AskQuestion;