import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <div className={cx('video-item')}>
            <div className={cx('video-player')}>
                <video />
            </div>
            <div className={cx('caption')}>
                <p title="">jas ajshd asjdhasj daskjdh  asjdhasj daskj</p>
            </div>
        </div>
    );
}

export default VideoItem;
