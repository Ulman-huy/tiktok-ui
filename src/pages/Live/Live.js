import styles from './Live.module.scss';
import classNames from 'classnames/bind';
import LiveItem from './LiveItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('feed-tabs')}>
                <div className={cx('tabs')}>
                    <div className={cx('suggest', 'active')}></div>
                    <div className={cx('follow')}></div>
                </div>
                <div className={cx('sub-tabs')}>
                    <div className={cx('sub-suggest', 'active')}>Dành cho bạn</div>
                    <div className={cx('sub-follow')}>Đang Follow</div>
                </div>
            </div>
            <div className={cx('swiper')}>
                <div className={cx('up-btn')}>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
                <div className={cx('down-btn')}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('live-feed')}>
                    <LiveItem />
                    <LiveItem />
                    <LiveItem />
                </div>
            </div>
        </div>
    );
}

export default Live;
