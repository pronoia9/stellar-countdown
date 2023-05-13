import { footer } from '../utils/data';

export default function Footer() {
  const { url, name, challenge } = footer;

  return (
    <div className='attribution'>
      Challenge by
      <a href={challenge} target='_blank'>
        Frontend Mentor
      </a>
      . Coded by <a href={url}>{name}</a>.
    </div>
  );
}
