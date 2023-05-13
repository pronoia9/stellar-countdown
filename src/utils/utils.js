export const rem = (px) => `${px / 16}rem`;

export const calculateDays = (targetDate) => Math.floor((+targetDate - +new Date()) / (1000 * 60 * 60 * 24));
export const calculateHours = (targetDate) => Math.floor(((+targetDate - +new Date()) / (1000 * 60 * 60)) % 24);
export const calculateMinutes = (targetDate) => Math.floor(((+targetDate - +new Date()) / 1000 / 60) % 60);
export const calculateSeconds = (targetDate) => Math.floor(((+targetDate - +new Date()) / 1000) % 60);

export const calculateCountdown = (targetDate) => ({
  days: calculateDays(targetDate),
  hours: calculateHours(targetDate),
  minutes: calculateMinutes(targetDate),
  seconds: calculateSeconds(targetDate),
});

export const updateCountdown = (targetDate, type) => {
  switch (type) {
    case 'days':
      return calculateDays(targetDate);
    case 'hours':
      return calculateHours(targetDate);
    case 'minutes':
      return calculateMinutes(targetDate);
    case 'seconds':
      return calculateSeconds(targetDate);
    default:
      break;
  }
};
