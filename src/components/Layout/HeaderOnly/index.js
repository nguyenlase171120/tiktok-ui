import React from 'react';
import Header from '../DefaultLayout/Header';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />

            <div className="content">{children}</div>
        </div>
    );
};

export default HeaderOnly;
