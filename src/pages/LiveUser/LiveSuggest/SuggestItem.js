import styles from './LiveSuggest.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function SuggestItem() {
    return (
        <div className={cx('suggest-item-wrapper')}>
            <div className={cx('video')}>
                <Link to="/@some-user/live" className={cx('mask-video')}>
                    <FontAwesomeIcon icon={faPlay} />
                </Link>
                <video src="" title={'Chuyện tâm linh không thể đùa'} />
                <div className={cx('info-video')}>
                    <div className={cx('user-watching')}>264 người xem</div>
                    <div className={cx('live-tag')}>LIVE</div>
                </div>
            </div>
            <Link to="/@profile-user" className={cx('description')}>
                <Image src="" alt="" className={cx('avatar')} />
                <div className={cx('div-wrapper')}>
                    <div className={cx('title')}>Chuyện tâm linh không thể đùa</div>
                    <div className={cx('name')}>Gấu Review</div>
                </div>
            </Link>
        </div>
    );
}

export default SuggestItem;
