import Image from '~/components/Image';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './VideoItem.module.scss';
import { MusicIcon } from '../Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestedAccounts/AccountPreview';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

const cx = classNames.bind(styles);
const state = ['Follow', 'Đang Follow'];

function VideoItem({ info, follow = true }) {
    const [following, setFollowing] = useState({ isFollow: false, text: state[0] });

    const handleFollow = () => {
        setFollowing((prev) => {
            if (prev.isFollow) {
                prev.isFollow = false;
                return { isFollow: true, text: state[1] };
            }
            if (!prev.isFollow) {
                prev.isFollow = true;
                return { isFollow: false, text: state[0] };
            }
        });
    };

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
                            <img src="" className={cx('img-model')} />
                            <div className={cx('wrapper-video')}>
                                <video className={cx('video')}> this is video</video>
                            </div>
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('like-action')}>
                            <Button className={cx('like-icon')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                            <div className={cx('count')}>123</div>
                        </div>
                        <div className={cx('comment-action')}>
                            <Button className={cx('comment-icon')}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </Button>
                            <div className={cx('count')}>123k</div>
                        </div>
                        <div className={cx('share-action')}>
                            <Button className={cx('share-icon')}>
                                <FontAwesomeIcon icon={faShare} />
                            </Button>
                            <div className={cx('count')}>123</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
