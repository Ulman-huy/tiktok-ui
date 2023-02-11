import styles from './Live.module.scss';
import classNames from 'classnames/bind';
import LiveItem from './LiveItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faL } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Live() {
    const [translateY, setTranslateY] = useState(0);
    const [isLast, setIsLast] = useState(false);
    const [category, setCategory] = useState(true);

    const liveRef = useRef(null);

    const style = { transform: `translate3d(0px, ${translateY}px, 0px)` };

    const handlePreviousLive = () => {
        setTranslateY((prev) => (prev === 0 ? prev + 0 : prev + 638));
        if (translateY !== -(liveRef.current.children.length - 2) * 638) setIsLast(false);
    };
    const handleNextLive = () => {
        setTranslateY((prev) => (prev === -(liveRef.current.children.length - 1) * 638 ? prev - 0 : prev - 638));
        if (translateY === -(liveRef.current.children.length - 2) * 638) setIsLast(true);
    };
    const handleChangeCategorySuggest = () => {
        setCategory(true);
    };
    const handleChangeCategoryFollow = () => {
        setCategory(false);
    };
    // Handle scroll up/ down
    const handleScrollWheel = (e) => {};
    useEffect(() => {
        liveRef.current.addEventListener('mousewheel', (e) => handleScrollWheel(e));

        return liveRef.current.addEventListener('mousewheel', handleScrollWheel);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('feed-tabs')}>
                <div className={cx('tabs')}>
                    <div className={cx('suggest', { active: category })}></div>
                    <div className={cx('follow', { active: !category })}></div>
                </div>
                <div className={cx('sub-tabs')}>
                    <div className={cx('sub-suggest', { active: category })} onClick={handleChangeCategorySuggest}>
                        Dành cho bạn
                    </div>
                    <div className={cx('sub-follow', { active: !category })} onClick={handleChangeCategoryFollow}>
                        Đang Follow
                    </div>
                </div>
            </div>
            <div className={cx('swiper')}>
                <div onClick={handlePreviousLive} className={cx('up-btn', { first: translateY === 0 })}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
                <div onClick={handleNextLive} className={cx('down-btn', { last: isLast })}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('live-feed')} ref={liveRef} style={style}>
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                </div>
            </div>
        </div>
    );
}

export default Live;
