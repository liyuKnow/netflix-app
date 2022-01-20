import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import ListItem from '../listItem/ListItem';
import './List.scss';

const List = () => {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();


    const handleSlide = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                {/* {isMoved && <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleSlide('left')} />} */}
                <ArrowBackIosOutlined
                    className='sliderArrow left'
                    onClick={() => handleSlide('left')}
                    style={{ display: !isMoved && 'none' }}
                />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleSlide('right')} />
            </div>
        </div>
    );
};

export default List;
