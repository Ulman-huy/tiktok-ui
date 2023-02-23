import { useRef, useState, useEffect, useContext } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRotateRight, faUser, faVolumeHigh, faVolumeTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './LiveItem.module.scss';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { DataLive } from '~/layouts/FullScreen/Fullscreen';

const cx = classNames.bind(styles);

function LiveItem({ live }) {
    const { setLiveUser } = useContext(DataLive);

    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(25);
    const [autoNext, setAutoNext] = useState(true);
    const [count, setCount] = useState(20);

    const videoRef = useRef();
    const volumeRef = useRef();

    const handlePlay = () => {
        if (playing) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    };
    // Handle change volume
    const handleChangeVolume = (e) => {
        setVolume(e.target.value);
    };
    const handleReset = () => {
        // Call api this video
    };
    const handleAutoNext = () => {
        setAutoNext((prev) => (prev ? false : true));
    };
    const handleSetUrl = () => {
        setLiveUser(live);
    };
    return (
        <div className={cx('wrapper')} style={{ height: '614px', marginBottom: '24px' }}>
            <div className={cx('container')}>
                <div className={cx('click-watch')}>
                    <Link to={`/@${live.nickname}/live`} className={cx('text')} onClick={handleSetUrl}>
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
                    <ReactPlayer
                        url={live.url}
                        width={'100%'}
                        height={'100%'}
                        playing={playing}
                        volume={volume / 100}
                        ref={videoRef}
                    />
                </div>
                <div className={cx('info')}>
                    <div className={cx('div-info')}>
                        <div className={cx('live-tag')}>LIVE</div>
                        <div className={cx('user')}>
                            <div className={cx('nickname')}>{live.nickname}</div>
                            <div className={cx('user-watch')}>
                                <FontAwesomeIcon icon={faUser} />
                                <span className={cx('count')}>{live.user_watch_live_count}</span>
                            </div>
                        </div>
                        <div className={cx('description')}>{live.bio}</div>
                    </div>
                    <div className={cx('container-player')}>
                        <div className={cx('tooltip')}>
                            <Tippy
                                offset={[0, 10]}
                                placement="top"
                                render={() => <div className={cx('sub-text')}>{playing ? 'Tạm dừng' : 'phát'}</div>}
                            >
                                <div className={cx('play')} onClick={handlePlay}>
                                    {!playing && <FontAwesomeIcon icon={faPlay} />}
                                    {playing && <FontAwesomeIcon icon={faPause} />}
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
