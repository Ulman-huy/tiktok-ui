import styles from './LiveItem.module.scss';
import classNames from 'classnames/bind';
import video from '~/assets/video/video1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faUser, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LiveItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('click-watch')}>
                    <div className={cx('text')}>
                        <p>Nhấn để xem LIVE</p>
                    </div>
                </div>
                <div className={cx('div-video')}>
                    <video src={video} className={cx('video')} />
                </div>
                <div className={cx('info')}>
                    <div className={cx('live-tag')}>LIVE</div>
                    <div className={cx('user')}>
                        <div className={cx('nickname')}>@sale_shop68</div>
                        <div className={cx('user-watch')}>
                            <FontAwesomeIcon icon={faUser} />
                            <span className={cx('count')}>123</span>
                        </div>
                    </div>
                    <div className={cx('description')}>bấm vào giỏ hàng để chốt đơn</div>
                </div>
                <div className={cx('container-player')}>
                    <div className={cx('tooltip')}>
                        <div className={cx('play')}>
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                        <div className={cx('pause')}>
                            <FontAwesomeIcon icon={faPause} />
                        </div>
                    </div>
                    <div className={cx('auto-play_volume')}>
                        <div className={cx('auto')}>
                            Tự động phát: <span className={cx('off')}>Tắt</span>
                        </div>
                        <div className={cx('volume')}>
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveItem;
