import { useRef, useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRotateRight, faUser, faVolumeHigh, faVolumeTimes } from '@fortawesome/free-solid-svg-icons';
import { useElementOnScreen } from '~/hooks';

import styles from './LiveItem.module.scss';
import video from '~/assets/video/video1.mp4';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LiveItem() {
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [autoNext, setAutoNext] = useState(true);
    const [count, setCount] = useState(20);

    const videoRef = useRef();
    const volumeRef = useRef();

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisible = useElementOnScreen(options, videoRef);

    const handlePlay = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(!playing);
        } else {
            videoRef.current.play();
            setPlaying(!playing);
        }
    };
    // Handle change volume
    const handleChangeVolume = (e) => {
        videoRef.current.volume = e.target.value / 100;
        setVolume(e.target.value);
    };
    const handleReset = () => {
        // Call api this video
    };
    const handleAutoNext = () => {
        setAutoNext((prev) => (prev ? false : true));
    };
    // handle next video
    useEffect(() => {
        if (isVisible) {
            if (!playing) {
                videoRef.current.play();
                setPlaying(true);
            }
        } else {
            if (playing) {
                videoRef.current.pause();
                setPlaying(false);
            }
        }
    }, [isVisible]);

    // useEffect(() => {
    //     if (autoNext) {
    //         setTimeout(() => {
    //             setCount((prev) => prev - 1);
    //         }, 1000);
    //         if (count === 0) {
    //         }
    //     }
    // }, [count]);
    let nickname = 'huyy';
    return (
        <div className={cx('wrapper')} style={{ height: '614px', marginBottom: '24px' }}>
            <div className={cx('container')}>
                <div className={cx('click-watch')}>
                    <Link to={`/@${nickname}/live`} className={cx('text')}>
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
                    </Link>
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
                                render={() => (
                                    <div className={cx('sub-text', { paused: !playing })}>
                                        {playing ? 'phát' : 'Tạm dừng'}
                                    </div>
                                )}
                            >
                                <div className={cx('play')} onClick={handlePlay}>
                                    {playing && <FontAwesomeIcon icon={faPlay} />}
                                    {!playing && <FontAwesomeIcon icon={faPause} />}
                                </div>
                            </Tippy>
                            <Tippy
                                offset={[-14, 10]}
                                placement="top-start"
                                render={() => <div className={cx('sub-text')}>Thử lại</div>}
                            >
                                <div className={cx('pause')} onClick={handleReset}>
                                    <FontAwesomeIcon icon={faRotateRight} />
                                </div>
                            </Tippy>
                        </div>
                        <div className={cx('auto-play_volume')}>
                            <Tippy
                                offset={[-28, 10]}
                                placement="top-start"
                                render={() => (
                                    <div className={cx('sub-text')}>
                                        Bạn sẽ tự động xem phiên LIVE này sau {count} giây
                                    </div>
                                )}
                            >
                                <div className={cx('auto')} onClick={handleAutoNext}>
                                    Tự động phát:
                                    <span className={cx({ off: !autoNext })}>{autoNext ? ' Bật' : ' Tắt'}</span>
                                </div>
                            </Tippy>
                            <div className={cx('volume')}>
                                <FontAwesomeIcon icon={volume === 0 ? faVolumeTimes : faVolumeHigh} />
                                <div className={cx('div-volume')}>
                                    <input
                                        ref={volumeRef}
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={volume}
                                        step={1}
                                        onChange={handleChangeVolume}
                                        className={cx('change-volume')}
                                    />
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
