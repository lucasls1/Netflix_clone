import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgMackbook from '../images/tab-macbook.png';
import {generateMedia} from 'styled-media-query';

// 54:00 minutos


function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem' }}>Watch TV Shows and movies anytime, anywhere - personalized for you.</span>
                    <Button className="btn">try it now</Button>
                </div>
                {/* Tab  Bottom Content */}
                <div className="tab-bottom-content">
                    {/* Tv Image Container */}
                    <div>
                        <img src={ImgTv} alt="" style={{ width: '18.75rem' }} />
                        <h3>watch on your TV</h3>
                        <p> Smart TVs,  playStation, xbox, chromecast, Apple TV, Blu-ray players and
                        more. </p>
                    </div>
                    {/* Tablet Image Container */}
                    <div>
                        <img src={ImgTablet} alt="" style={{
                            width: '18.75rem',
                            paddingTop: '0.625rem'
                        }} />
                        <h3>watch instantly or download for later</h3>
                        <p>Available on phone and tablet, wherever you go.</p>
                    </div>
                    {/* Macbook Image Container */}
                    <div>
                        <img src={ImgMackbook} alt="" style={{
                            width: '18.75rem',
                            paddingTop: '0.625rem',
                            paddingBottom: '0.625rem'
                        }} />
                        <h3>Use any computer</h3>
                        <p>Watch rigth on Netflix.com. </p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

export default TabContentTwo;

// Media 
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '960px'
})

//Main Tab Content Container

const TabContainer = styled.div`
background: var(--main-deep-dark);

.tab-content{
    margin: 0 15%;
}


//Tab Top Content
.tab-top-content{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan('smDesktop')`
    grid-template-columns: repeat(2, 1fr);
    `}
    ${customMedia.lessThan('tablet')`
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 1.5rem;
    `}
}

span{
    grid-column: 1 / 8;
    ${customMedia.lessThan('tablet')`
    grid-column: 1 / -1;
    font-size: 1.5rem; 
    `}
}


.btn{
    margin: 0 1.25rem 1.25rem;
    grid-column:10 /12;
    ${customMedia.lessThan('tablet')`
    grid-column: 1/ -1;
    margin-left: 30%;
    margin-right: 30%;
    `}
}

// Tab Bottom Content
.tab-bottom-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
   grid-template-columns: 1fr;
    `}
}

img{
    width: 100%;
}

h3{
    margin:0.5rem 0;
}

p{
    color: var(--main-grey);
}
`;