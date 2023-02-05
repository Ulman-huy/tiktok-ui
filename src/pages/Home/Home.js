import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Button outline small className={cx('follow')}>
                Follow
            </Button>
            <Link to="/@nangofffical">
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/35ddcd348bf14d830c65c611a188d8a3~c5_100x100.jpeg?x-expires=1675785600&x-signature=3v1j5QqhSlrXjQcrUC7DJrBTHYk%3D"
                    alt=""
                />
            </Link>
            <div className={cx('container')}>
                <Link to="/@nangofffical" className={cx('user')}>
                    <h3 className={cx('nickname')}>nangofffical</h3>
                    <h4 className={cx('name')}>Nawngs</h4>
                </Link>
                <div className={cx('hashtag')}>
                    <span className={cx('text')}></span>
                    <Link to="#nang">#nang</Link>
                    <Link to="#nawngs">#nawngs</Link>
                    <Link to="#tuvan">#tuvan</Link>
                    <Link to="#fyp">#fyp</Link>
                    <Link to="#xuhuong">#xuhuong</Link>
                </div>
                <Link to="/music/ten-bai-hat-user" className={cx('song')}>
                    original sound - Nawngs
                </Link>
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

export default Home;
