import styles from './LiveUser.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleRight,
    faCoins,
    faEllipsis,
    faFaceDizzy,
    faPaperPlane,
    faPlay,
    faShare,
    faUser,
    faVolumeTimes,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import {
    AudioIcon,
    ImageInImageIcon,
    TheaterIcon,
    TurnVideoIcon,
    FullScreenIcon,
    RightArrowIcon,
} from '~/components/Icons';
import video from '~/assets/video/video.mp4';
import Tippy from '@tippyjs/react/headless';
import NotificationChat from './NotificationChat';
import UserChat from './UserChat';

const cx = classNames.bind(styles);

function LiveUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('live-container')}>
                    <div className={cx('live-header')}>
                        <div className={cx('live-info')}>
                            <div>
                                <Tippy render={() => <div>User</div>}>
                                <div className={cx('div-tippy')}>
                                    <Image src="" alt="" className={cx('avatar')} />
                                    <div className={cx('info')}>
                                        <span className={cx('nickname')}>thuthao.923</span>
                                        <span className={cx('name')}>Thu Thảo</span>
                                    </div>
                                </div>
                                </Tippy>
                            </div>
                            <div className={cx('text')}>
                                <p>LeGo săn quà</p>
                                <span className={cx('watch-user')}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <span className={cx('count-user')}>10</span>
                                </span>
                            </div>
                        </div>
                        <div className={cx('live-tools')}>
                            <div className={cx('share')}>
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>
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
                </div>
                <div className={cx('chat-room')}>
                    <div className={cx('chat-container')}>
                        <div className={cx('chat-header')}>
                            <div className={cx('close-chat')}>
                                <RightArrowIcon />
                            </div>
                            <div className={cx('title')}>
                                <p>Trò chuyện LIVE</p>
                            </div>
                        </div>
                        <div className={cx('top-live')}>
                            <div className={cx('title')}>
                                <p>Người xem hàng đầu</p>
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </div>
                            <div className={cx('top-user')}>
                                <div className={cx('top-1')}>
                                    <p className={cx('one')}>1</p>
                                    <div className={cx('user')}>
                                        <Image className={cx('user-image-t1')} src="" />
                                        <div className={cx('name')}>Thế giới LeGo</div>
                                        <div className={cx('coins')}>
                                            <FontAwesomeIcon icon={faCoins} />
                                            <p>0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('top-2-3')}>
                                    <div className={cx('user-2')}>
                                        <p className={cx('two')}>2</p>
                                        <div className={cx('user')}>
                                            <Image className={cx('user-image-t1')} src="" />
                                            <div className={cx('info')}>
                                                <div className={cx('name')}>Thế giới LeGo</div>
                                                <div className={cx('coins')}>
                                                    <FontAwesomeIcon icon={faCoins} />
                                                    <p>0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('user-3')}>
                                        <p className={cx('two')}>3</p>
                                        <div className={cx('user')}>
                                            <Image className={cx('user-image-t1')} src="" />
                                            <div className={cx('info')}>
                                                <div className={cx('name')}>Thế giới LeGo</div>
                                                <div className={cx('coins')}>
                                                    <FontAwesomeIcon icon={faCoins} />
                                                    <p>0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('chat-live')}>
                            <div className={cx('chat-container')}>
                                <div className={cx('chat-content')}>
                                    <UserChat src={""} name="bon ^^" txt={"Halooo!"}/>
                                    <NotificationChat name={'user129132'} txt="đã tham gia"/>
                                </div>
                                <div className={cx('chat-input')}>
                                    <div className={cx('div-chat')}>
                                        <input className={cx('input')} placeholder="Thêm bình luận..." />
                                        <div className={cx('chat-emoji')}>
                                            <FontAwesomeIcon icon={faFaceDizzy} />
                                        </div>
                                    </div>
                                    <div className={cx('send')}>
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LiveUser;
