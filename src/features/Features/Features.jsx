import React from 'react';
import './Features.scss';
import { TabsSection } from '../../components';

const Features = () => {
    return (
        <section className='features' id='features'>
            <div className='features__contener'>
                <h2>Features</h2>
                <p>
                    Our aim is to make it quick and easy for you
                    to access your favourite wehsites. Your
                    bookmarks syne between yor devices so
                    you can access them on the go.
                </p>

            </div>
            <TabsSection />
        </section>
    );
};

export default Features;