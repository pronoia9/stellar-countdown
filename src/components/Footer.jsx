import { footer } from '../data/data';

export default function Footer() {
  const { url, name, challenge } = footer;

  return (
    <div class='attribution'>
      Challenge by
      <a href={challenge} target='_blank'>
        Frontend Mentor
      </a>
      . Coded by <a href={url}>{name}</a>.
    </div>
  );
}
