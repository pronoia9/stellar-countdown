export const rem = (px) => `${px / 16}rem`;

export const getTargetDate = () => {
  const currentDate = new Date();
  const storedDateKey = 'stellar_countdown-targetDate';
  const storedDate = localStorage.getItem(storedDateKey);
  const defaultDate = new Date(currentDate.getTime() + 8 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 55 * 60 * 1000 + 41 * 1000);
  // Add default date to local storage if theres none or if the existing date is exipired
  if (!storedDate || currentDate > new Date(storedDate)) localStorage.setItem(storedDateKey, defaultDate);
  return new Date(localStorage.getItem(storedDateKey));
};

export const calculateDays = (targetDate) => Math.floor((+targetDate - +new Date()) / (1000 * 60 * 60 * 24));
export const calculateHours = (targetDate) => Math.floor(((+targetDate - +new Date()) / (1000 * 60 * 60)) % 24);
export const calculateMinutes = (targetDate) => Math.floor(((+targetDate - +new Date()) / 1000 / 60) % 60);
export const calculateSeconds = (targetDate) => Math.floor(((+targetDate - +new Date()) / 1000) % 60);

export const calculateCountdown = (targetDate, state) => {
  const days = formatTime(calculateDays(targetDate)),
    hours = formatTime(calculateHours(targetDate)),
    minutes = formatTime(calculateMinutes(targetDate)),
    seconds = formatTime(calculateSeconds(targetDate)),
    shuffle = { days: false, hours: false, minutes: false, seconds: false };

  if (state) {
    shuffle.days = days !== state.count.days ? !state.shuffle.days : state.shuffle.days;
    shuffle.hours = hours !== state.count.hours ? !state.shuffle.hours : state.shuffle.hours;
    shuffle.minutes = minutes !== state.count.minutes ? !state.shuffle.minutes : state.shuffle.minutes;
    shuffle.seconds = seconds !== state.count.seconds ? !state.shuffle.seconds : state.shuffle.seconds;
  }

  return { count: { days, hours, minutes, seconds }, shuffle };
};

const formatTime = (value) => value.toString().padStart(2, '0');
