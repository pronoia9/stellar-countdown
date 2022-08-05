import './Social.scss';

export default function Social() {
  return (
    <div className='social'>
      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
        <i class='fa-brands fa-square-facebook'></i>
      </a>
      <a href='http://www.pinterest.com/' target='_blank' rel='noreferrer'>
        <i class='fa-brands fa-pinterest'></i>
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
        <i class='fa-brands fa-instagram'></i>
      </a>
    </div>
  );
}