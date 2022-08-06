import React from 'react';
import CountdownCard from './CountdownCard';
import './FlipClock.scss';
import './Countdown.scss';

// class component
class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get countdown from end date - current time
    const time = +this.props.date - +new Date();
    // set time units
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    // on day chanage, update days and shuffle state
    if (days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({ days, daysShuffle });
    }
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({ hours, hoursShuffle });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({ minutes, minutesShuffle });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({ seconds, secondsShuffle });
    }
  }

  render() {
    // state object destructuring
    const { days, hours, minutes, seconds, daysShuffle, hoursShuffle, minutesShuffle, secondsShuffle } = this.state;

    return (
      <div className={'flipClock'}>
        <CountdownCard unit={'days'} digit={days} shuffle={daysShuffle} />
        <CountdownCard unit={'hours'} digit={hours} shuffle={hoursShuffle} />
        <CountdownCard unit={'minutes'} digit={minutes} shuffle={minutesShuffle} />
        <CountdownCard unit={'seconds'} digit={seconds} shuffle={secondsShuffle} />
      </div>
    );
  }
}

export default Countdown;