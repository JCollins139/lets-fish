import React, { Component } from 'react';
import BodyField from '../components/BodyField';
import SeasonField from '../components/SeasonField';
import RatingField from '../components/RatingField';

class ReviewFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewBody: '',
      reviewSeason: '',
      reviewRating: ''
    }
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSeasonChange = this.handleSeasonChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleBodyChange(event) {
    let newBody = event.target.value
    this.setState({reviewBody: newBody})
  }

  handleSeasonChange(event) {
    let newSeason = event.target.value
    this.setState({reviewSeason: newSeason})
  }

  handleRatingChange(event) {
    let newRating = event.target.value
    this.setState({reviewRating: newRating})
  }

  handleSubmit(event) {
    event.preventDefault()
    let statefullBody = this.state.reviewBody
    let statefullSeason = this.state.reviewSeason
    let statefullRating = this.state.reviewRating

    let payLoad = {
      body: statefullBody,
      season: statefullSeason,
      rating: statefullRating
    }
    this.props.addNewReview(payLoad)
    this.handleClearForm(event)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      reviewBody: '',
      reviewSeason: '',
      reviewRating: ''
    });
  }

  render() {
    return(
      <div className="review-container">
        <form onSubmit={this.handleSubmit} className="new-review-form callout">
          <BodyField
            content={this.state.reviewBody}
            label="Review: "
            name="review-body"
            handleChange={this.handleBodyChange}
          />

          <SeasonField
            content={this.state.reviewSeason}
            label="Season: "
            name="review-season"
            handleChange={this.handleSeasonChange}
          />

          <RatingField
            content={this.state.reviewRating}
            label="Rating: "
            name="review-rating"
            handleChange={this.handleRatingChange}
          />

          <div className="button-group">
            <button onClick={this.handleClearForm} className= "clear-button">Clear</button>
            <input className= "button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer;
