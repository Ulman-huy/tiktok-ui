import styles from './LiveSuggest.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function SuggestItem() {
    return (
        <div className={cx('suggest-item-wrapper')}>
            <div className={cx('video')}>
                <video src="" />
                <div className={cx('info-video')}>
                    <div className={cx('user-watching')}>264 người xem</div>
                    <div className={cx('live-tag')}>LIVE</div>
                </div>
            </div>
            <div className={cx('description')}>
                <Image src="" alt=""  className={cx('avatar')}/>
                <div className={cx('div-wrapper')}>
                    <div className={cx('title')}>Chuyện tâm linh không thể đùa</div>
                    <div className={cx('name')}>Gấu Review</div>
                </div>
            </div>
        </div>
    );
}

export default SuggestItem;
