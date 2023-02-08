import { faPlay, faPause, faVolumeUp, faVolumeTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { useElementOnScreen } from '~/hooks';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import video from '~/assets/video/video1.mp4';
import styles from './VideoItem.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import { MusicIcon } from '../Icons';
import Action from './Action';

const cx = classNames.bind(styles);
const state = ['Follow', 'Đang Follow'];

function VideoItem({ info, follow = true }) {
    const [following, setFollowing] = useState({ isFollow: false, text: state[0] });
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(50);

    const videoRef = useRef();
    const volumeRef = useRef();

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };
    const isVisible = useElementOnScreen(options, videoRef);

    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview info={info} bio={true} />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    const handleFollow = () => {
        setFollowing((prev) => {
            if (prev.isFollow) {
                prev.isFollow = false;
                return { isFollow: false, text: state[0] };
            } else {
                prev.isFollow = true;
                return { isFollow: true, text: state[1] };
            }
        });
    };
    // Handle Player/ Pause video
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
    return (
        <div className={cx('wrapper')}>
            {follow && (
                <Button outline small className={cx('follow', { followed: following.isFollow })} onClick={handleFollow}>
                    {following.text}
                </Button>
            )}
            <header className={cx('header')}>
                <Tippy interactive offset={[0, -28]} delay={[800, 0]} placement="bottom-start" render={renderPreview}>
                    <Link to="/@nangofffical">
                        <Image
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/35ddcd348bf14d830c65c611a188d8a3~c5_100x100.jpeg?x-expires=1675785600&x-signature=3v1j5QqhSlrXjQcrUC7DJrBTHYk%3D"
                            alt="avatar"
                        />
                    </Link>
                </Tippy>
                <div className={cx('user-info')}>
                    <Tippy
                        interactive
                        offset={[-68, 36]}
                        delay={[800, 0]}
                        placement="bottom-start"
                        render={renderPreview}
                    >
                        <Link to="/@nangofffical" className={cx('user')}>
                            <h3 className={cx('nickname')}>nangofffical</h3>
                            <h4 className={cx('name')}>Nawngs</h4>
                        </Link>
                    </Tippy>
                    <div className={cx('hashtag')}>
                        <span className={cx('text')}></span>
                        <Link to="#nang">#nang</Link>
                        <Link to="#nawngs">#nawngs</Link>
                        <Link to="#tuvan">#tuvan</Link>
                        <Link to="#fyp">#fyp</Link>
                        <Link to="#xuhuong">#xuhuong</Link>
                    </div>
                    <Link to="/music/ten-bai-hat-user" className={cx('song')}>
                        <div>
                            <MusicIcon />
                            <p>original sound - Nawngs</p>
                        </div>
                    </Link>
                </div>
            </header>
            <div className={cx('container')}>
                <div className={cx('container-video')}>
                    <div className={cx('div-video')}>
                        <div className={cx('absolute')}>
                            <img src={''} className={cx('img-model')} />
                            <div className={cx('wrapper-video')}>
                                <Link to="/">
                                    <video ref={videoRef} className={cx('video')} src={video} loop muted />
                                </Link>
                                <div className={cx('report')}>
                                    <span>
                                        <FontAwesomeIcon icon={faFlag} />
                                    </span>
                                    <span>Báo cáo</span>
                                </div>
                                <div className={cx('player')} onClick={handlePlay}>
                                    {playing ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
                                </div>{' '}
                                <div className={cx('control-volume')}>
                                    <FontAwesomeIcon icon={volume > 0 ? faVolumeUp : faVolumeTimes} />
                                    <div className={cx('div-volume')}>
                                        <input
                                            ref={volumeRef}
                                            min={0}
                                            max={100}
                                            value={volume}
                                            step={1}
                                            type="range"
                                            className={cx('volume')}
                                            onChange={handleChangeVolume}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Action />
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
