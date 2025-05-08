import React from 'react';
import './Extension.scss';
import img1 from '../../assets/images/logo-chrome.svg';
import img2 from '../../assets/images/logo-firefox.svg';
import img3 from '../../assets/images/logo-opera.svg';
import LinkButton from '../LinkButton/LinkButton';
import dots from "../../assets/images/bg-dots.svg";

const data = [
  {
    id: 1,
    title: 'Chrome',
    version: '62',
    image: img1,
  },
  {
    id: 2,
    title: 'Firefox',
    version: '55',
    image: img2,
  },
  {
    id: 3,
    title: 'Opera',
    version: '46',
    image: img3,
  },
];

const Extension = () => {
  return (
    <div className='extension'>
      {data.map((item) => (
        <div className="extension__container" key={item.id}>
          <img src={item.image} alt={"imge" + item.title} />
          <h3>Add to {item.title}</h3>
          <p>Minimum version {item.version}</p>
          <img src={dots} alt='dots' className='extension__container__line'/>
          <LinkButton> Add & Install Extension</LinkButton>
        </div>
      ))}
    </div>
  );
};

export default Extension;