import React, {Component} from 'react';
import {Link} from "@reach/router";


class Questions extends Component {
    render() {
        const mapFunction = elm =>
            <li key={elm._id}>
                <Link to={"/question/"+elm._id}>{elm.title}</Link>
            </li>;

        let questions = this.props.data;
        let list = questions.map(mapFunction);

        
        return (
            <>
            <h2>Asked questions</h2>
                <ul>
                    {list}
                </ul>
               
                <Link to="/Ask-a-question"><div class="add-button"><p>Ask a question</p></div></Link>
            </>
        );
    }
}

export default Questions;