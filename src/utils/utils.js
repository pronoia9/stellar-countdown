export const rem = (px) => `${px / 16}rem`;

export const getTargetDate = () => {
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 55 * 60 * 1000 + 41 * 1000);
  return futureDate;
};

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
