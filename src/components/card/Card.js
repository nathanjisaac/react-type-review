import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.onGuessChange = this.onGuessChange.bind(this);
  }

  onGuessChange(e) {
    this.props.onGuessChange({
      id: this.props.id,
      answer: e.target.value
    });
  }

  get classes() {
    if (!this.props.sumitted) {
      return "card";
    }

    if (this.props.correct) {
      return "card card--success";
    } else {
      return "card card--failure";
    }
  }

  render() {
    return (
      <div className={this.classes}>
        <img src={this.props.imageUrl} alt="Type to guess" />
        <input
          name="type-guess"
          type="text"
          value={this.props.guess}
          onChange={this.onGuessChange}
        />
      </div>
    );
  }
}

export default Card;
