import React, { useState } from 'react';
import './TabsSection.scss';
import imgTab1 from '../../assets/images/illustration-features-tab-1.svg';
import imgTab2 from '../../assets/images/illustration-features-tab-2.svg';
import imgTab3 from '../../assets/images/illustration-features-tab-3.svg';
import LinkButton from '../LinkButton/LinkButton';

const tabs = [
  {
    id: 1,
    title: 'Simple Bookmarking',
    contentTitle: 'Bookmark in one click',
    contentText: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    image: imgTab1,
  },
  {
    id: 2,
    title: 'Speedy Searching',
    contentTitle: 'Intelligent search',
    contentText: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    image: imgTab2,
  },
  {
    id: 3,
    title: 'Easy Sharing',
    contentTitle: 'Share your bookmarks',
    contentText: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    image: imgTab3,
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__nav">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`tabs__nav__button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabs__content">
        <div className="tabs__content__image">
          <div className='tabs__content__image__bgObject'></div>
          <img src={tabs[activeTab].image} alt="Feature Illustration" />
        </div>
        <div className="tabs__content__text">
          <h3>{tabs[activeTab].contentTitle}</h3>
          <p>{tabs[activeTab].contentText}</p>
          <div className="tabs__content__text__btn">
            <LinkButton>More Info</LinkButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TabsSection;
