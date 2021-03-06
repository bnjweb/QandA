import React, {Component} from 'react';
import {Link} from "@reach/router";
import PostAnswer from "./PostAnswer";

class Question extends Component {
    upVote(aId, question) {
        let answer = question.answers.find(a => a._id === aId);
        let vote = answer.vote + 1;
        console.log(aId, "Downvoted", answer, vote);
        this.props.putVote(question._id, answer, vote)
    }

    downVote(aId, question) {
        let answer = question.answers.find(a => a._id === aId);
        let vote = answer.vote - 1;
        console.log(aId, "Downvoted", answer, vote);
        this.props.putVote(question._id, answer, vote)
    }

    addAnswer(text, question) {
        const newAnswer = {
            text: text,
            vote: 0
        };
        this.props.postAnswer(question._id, newAnswer);
    }


    render() {
        const question = this.props.getQuestion(this.props.id);

        let content = <p>Loading.... </p>;

        if(question) {
            const mapFunction = (answer, index) =>
                <li key={index}>
                    {answer.text}
                    <div class="voting">
                    <button onClick={() => this.upVote(answer._id, question)} style={{}}>▲</button>
                    <span style={{}}>{answer.vote}</span>
                    <button onClick={() => this.downVote(answer._id, question)}>▼</button></div>
                </li>;
            let answersList = question.answers.map(mapFunction);
            content = (
                <>
                    <h2>{question.title}</h2>
                    <h3>Answers:</h3>
                
                    <ul>
                        {answersList}
                    </ul>
                
                    <PostAnswer path="/" submit={(answer) => this.addAnswer(answer, question)}></PostAnswer>
                    <br/><br/><hr></hr>


                    <Link to="/"><div class="add-button"><p>Back to questions</p></div></Link>
                </>
            )
        }

        return content;
{}
    }
}

export default Question;