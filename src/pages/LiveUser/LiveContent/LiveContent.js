import styles from './LiveContent.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPause, faPlay, faVolumeHigh, faVolumeTimes } from '@fortawesome/free-solid-svg-icons';

import { AudioIcon, ImageInImageIcon, TheaterIcon, TurnVideoIcon, FullScreenIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react/headless';
import { useContext, useEffect, useRef, useState } from 'react';
import { Style } from '../LiveUser';
import ReactPlayer from 'react-player';
import { DataLive } from '~/layouts/FullScreen/Fullscreen';

const cx = classNames.bind(styles);

function LiveContent() {
    const { liveUser } = useContext(DataLive);
    const { hideChat } = useContext(Style);

    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(25);
    const [rotate, setRotate] = useState(0);

    const volumeRef = useRef();

    const rotateVideo = {
        transform: `rotate(${rotate}deg)`,
    };

    const handlePlayLive = () => {
        if (playing) {
            setPlaying(false);
        } else {
            setPlaying(true);
        }
    };
    const handleOpenVolume = () => {
        setVolume(20);
    };
    const handleChangeVolume = (e) => {
        setVolume(e.target.value);
    };
    const handleMute = () => {
        if (volume > 0) {
            setVolume(0);
        }
    };
    const handleRotate = () => {
        setRotate((prev) => prev - 90);
    };
    const handleFullScreen = () => {};
    useEffect(() => {}, []);
    return (
        <div className={cx('live-content')}>
            <div className={cx('live-tag')}>LIVE</div>
            <div className={cx('live-video', { 'hide-chat': hideChat })}>
                <ReactPlayer
                    className={cx('video')}
                    url={liveUser.url}
                    autoPlay
                    width="100%"
                    height="100%"
                    playing={playing}
                    volume={volume / 100}
                    style={rotateVideo}
                />
            </div>
            <div className={cx('video-player')}>
                <div>
                    <Tippy
                        offset={[0, 15]}
                        placement="top"
                        render={() => <div className={cx('sub-text')}>{playing ? 'Tạm dừng' : 'phát'}</div>}
                    >
                        <div className={cx('play')} onClick={handlePlayLive}>
                            <FontAwesomeIcon icon={playing ? faPause : faPlay} />
                        </div>
                    </Tippy>
                </div>
                {!(volume > 0) && (
                    <div className={cx('open-volume')} onClick={handleOpenVolume}>
                        <p>Nhấn để bỏ tắt tiếng</p>
                    </div>
                )}
                <div className={cx('tools')}>
                    <div>
                        <Tippy
                            interactive
                            offset={[0, 15]}
                            placement="top"
                            render={() => (
                                <div className={cx('audio-settings')}>
                                    <div className={cx('select')}>
                                        Ô tô(720p){' '}
                                        <span>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </span>
                                    </div>
                                    <div className={cx('select')}>Bản gốc</div>
                                    <div className={cx('select')}>720p60</div>
                                    <div className={cx('select')}>720p</div>
                                    <div className={cx('select')}>540p</div>
                                    <div className={cx('select')}>360p</div>
                                </div>
                            )}
                        >
                            <div className={cx('quality')}>
                                <AudioIcon />
                            </div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            offset={[0, 15]}
                            placement="top"
                            render={() => <div className={cx('sub-text')}>Chế độ rạp hát</div>}
                        >
                            <div className={cx('theater')}>
                                <TheaterIcon />
                            </div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            offset={[0, 15]}
                            placement="top"
                            render={() => <div className={cx('sub-text')}>Hướng màn hình</div>}
                        >
                            <div className={cx('rotate')} onClick={handleRotate}>
                                <TurnVideoIcon />
                            </div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            offset={[0, 15]}
                            placement="top"
                            render={() => <div className={cx('sub-text')}>Ảnh trong ảnh</div>}
                        >
                            <div className={cx('p-i-p')}>
                                <ImageInImageIcon />
                            </div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            offset={[0, 15]}
                            placement="top"
                            render={() => <div className={cx('sub-text')}>Toàn màn hình</div>}
                        >
                            <div className={cx('fullscreen')} onClick={handleFullScreen}>
                                <FullScreenIcon />
                            </div>
                        </Tippy>
                    </div>
                    <div className={cx('width-volume')}>
                        <Tippy
                            interactive
                            placement="top"
                            render={() => (
                                <div className={cx('div-volume')}>
                                    <input
                                        ref={volumeRef}
                                        type="range"
                                        min={0}
                                        max={100}
                                        value={volume}
                                        step={1}
                                        className={cx('change-volume')}
                                        onChange={handleChangeVolume}
                                    />
                                </div>
                            )}
                        >
                            <div className={cx('volume')} onClick={handleMute}>
                                <FontAwesomeIcon icon={volume > 0 ? faVolumeHigh : faVolumeTimes} />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveContent;
