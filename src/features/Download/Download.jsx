import React from 'react';
import './Download.scss';
import { Extension } from '../../components';

const Download = () => {
    return (
        <div className='download'>
            <div className='download__contener'>
                <h2>Download the extension</h2>
                <p>
                    We've got more browsers in the pipeline.
                    Please do let us know if you've got a
                    favourite you'd like us to prioritize.
                </p>
            </div>
            <Extension />
        </div>
    );
};

export default Download;