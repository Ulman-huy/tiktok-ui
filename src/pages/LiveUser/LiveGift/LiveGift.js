import styles from './LiveGift.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCoins } from '@fortawesome/free-solid-svg-icons';
import GiftItem from './GiftItem';
import Button from '~/components/Button';
import { useState } from 'react';
import { giftList } from '~/assets/images/gift';

const cx = classNames.bind(styles);

function LiveGift() {
    const [translateX, setTranslateX] = useState(0);
    const style = {
        transform: `translateX(${translateX}px)`,
    };
    const handlePrevGift = () => {
        setTranslateX((prev) => (prev === 0 ? prev : prev + 864));
    };
    const handleNextGift = () => {
        setTranslateX((prev) => (prev === -864 * 2 ? prev : prev - 864));
    };
    return (
        <div className={cx('live-gift')}>
            <div className={cx('gifts-container')}>
                <div className={cx('btn', 'btn-left')} onClick={handlePrevGift}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className={cx('div-gifts')}>
                    <div className={cx('gifts')} style={style}>
                        {giftList.map((gift, index) => (
                            <GiftItem key={index} giftImage={gift.image} giftName={gift.name} point={gift.point} />
                        ))}
                    </div>
                </div>
                <div className={cx('btn', 'btn-right')} onClick={handleNextGift}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
            <div className={cx('live-point')}>
                <div className={cx('text')}>Số dư điểm :</div>
                <div className={cx('point')}>
                    <span>0</span>
                    <FontAwesomeIcon icon={faCoins} />
                </div>
                <Button outline className={cx('receive')}>
                    Nhận xu
                </Button>
            </div>
        </div>
    );
}

export default LiveGift;
