import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRotateRight, faUser, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

import styles from './LiveItem.module.scss';
import video from '~/assets/video/video1.mp4';

const cx = classNames.bind(styles);

function LiveItem() {
    const [isPlaying, setIsPlaying] = useState(true);

    const videoRef = useRef(null);

    return (
        <div className={cx('wrapper')} style={{ height: '614px', marginBottom: '24px' }}>
            <div className={cx('container')}>
                <div className={cx('click-watch')}>
                    <div className={cx('text')}>
                        <div className={cx('line')}></div>
                        <div className={cx('animation')}>
                            <div className={cx('div-box')}>
                                <div className={cx('box', 'box-1')}></div>
                                <div className={cx('box', 'box-2')}></div>
                                <div className={cx('box', 'box-3')}></div>
                            </div>
                            <p>Nhấn để xem LIVE</p>
                        </div>
                        <div className={cx('line')}></div>
                    </div>
                </div>
                <div className={cx('div-video')}>
                    <video ref={videoRef} src={video} className={cx('video')} />
                </div>
                <div className={cx('info')}>
                    <div className={cx('div-info')}>
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
                            <Tippy
                                offset={[-14, 10]}
                                placement="top-start"
                                render={() => <div className={cx('sub-text')}>phát</div>}
                            >
                                <div className={cx('play')}>
                                    <FontAwesomeIcon icon={faPlay} />
                                    <FontAwesomeIcon icon={faPause} />
                                </div>
                            </Tippy>
                            <Tippy
                                offset={[-14, 10]}
                                placement="top-start"
                                render={() => <div className={cx('sub-text')}>Thử lại</div>}
                            >
                                <div className={cx('pause')}>
                                    <FontAwesomeIcon icon={faRotateRight} />
                                </div>
                            </Tippy>
                        </div>
                        <div className={cx('auto-play_volume')}>
                            <Tippy
                                offset={[-28, 10]}
                                placement="top-start"
                                render={() => (
                                    <div className={cx('sub-text')}>Bạn sẽ tự động xem phiên LIVE này sau 20 giây</div>
                                )}
                            >
                                <div className={cx('auto')}>
                                    Tự động phát:<span className={cx('off')}>Tắt</span>
                                </div>
                            </Tippy>
                            <div className={cx('volume')}>
                                <FontAwesomeIcon icon={faVolumeHigh} />
                                <div className={cx('div-volume')}>
                                    <input type="range" min={0} max={100} step={1} className={cx('change-volume')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveItem;
