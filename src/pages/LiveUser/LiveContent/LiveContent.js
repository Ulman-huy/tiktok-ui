import styles from './LiveContent.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faVolumeTimes } from '@fortawesome/free-solid-svg-icons';

import { AudioIcon, ImageInImageIcon, TheaterIcon, TurnVideoIcon, FullScreenIcon } from '~/components/Icons';
import video from '~/assets/video/video.mp4';

const cx = classNames.bind(styles);

function LiveContent() {
    return (
        <div className={cx('live-content')}>
            <div className={cx('live-tag')}>LIVE</div>
            <div className={cx('live-video')}>
                <video className={cx('video')} src={video} />
            </div>
            <div className={cx('video-player')}>
                <div className={cx('play')}>
                    <FontAwesomeIcon icon={faPlay} />
                </div>
                <div className={cx('open-volume')}>
                    <p>Nhấn để bỏ tắt tiếng</p> 
                </div>
                <div className={cx('tools')}>
                    <div className={cx('quality')}>
                        <AudioIcon />
                    </div>
                    <div className={cx('theater')}>
                        <TheaterIcon />
                    </div>
                    <div className={cx('rotate')}>
                        <TurnVideoIcon />
                    </div>
                    <div className={cx('p-i-p')}>
                        <ImageInImageIcon />
                    </div>
                    <div className={cx('fullscreen')}>
                        <FullScreenIcon />
                    </div>
                    <div className={cx('volume')}>
                        <FontAwesomeIcon icon={faVolumeTimes} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveContent;
