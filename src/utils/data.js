import facebook from '../assets/icon-facebook.svg';
import instagram from '../assets/icon-instagram.svg';
import pinterest from '../assets/icon-pinterest.svg';

export const socials = [
  { title: 'facebook', url: 'http://facebook.com/', logo: facebook },
  { title: 'pinterest', url: 'http://pinterest.com/', logo: pinterest },
  { title: 'instagram', url: 'http://instagram.com/', logo: instagram },
];

export const footer = {
  url: 'https://github.com/pronoia9',
  name: 'Jay Ansin',
  challenge: 'https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-',
};

export const getTargetDate = () => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 55 * 60 * 1000 + 41 * 1000);
  return futureDate;
};
