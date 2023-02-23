import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import Image from '~/components/Image';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faShare, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import VideoItem from './VideoItem';
import { useContext } from 'react';
import { DataDefault } from '~/layouts/DefaultLayout/DefaultLayout';

const cx = classNames.bind(styles);
function Profile() {
    const { profile } = useContext(DataDefault);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('div-info')}>
                    <Image src={profile.avatar} className={cx('avatar')} />
                    <div className={cx('div-name')}>
                        <div>
                            <h2 className={cx('nickname')}>
                                {profile.nickname}{' '}
                                {profile.tick && (
                                    <span>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                    </span>
                                )}
                            </h2>
                            <h3 className={cx('name')}>{profile.full_name}</h3>
                        </div>
                        <Button primary className={cx('btn-follow')}>
                            Follow
                        </Button>
                    </div>
                </div>
                <div className={cx('btn')}>
                    <div className={cx('btn-share')}>
                        <FontAwesomeIcon icon={faShare} />
                    </div>
                    <div className={cx('btn-more')}>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                </div>
            </div>
            <div className={cx('count')}>
                <div className={cx('following-count')}>
                    <span>23</span>
                    <p>Đang Follow</p>
                </div>
                <div className={cx('follower-count')}>
                    <span>8.6M</span>
                    <p>Follower</p>
                </div>
                <div className={cx('like-count')}>
                    <span>681.7M</span>
                    <p>Like</p>
                </div>
            </div>
            <div className={cx('bio')}>{profile.bio || ''}</div>
            <div className={cx('video-container')}>
                <div className={cx('select')}>
                    <div className={cx({ active: true })}>Video</div>
                    <div className={cx('text')}>Đã thích</div>
                    <div className={cx('line')}></div>
                </div>
                <div className={cx('video-content')}>
                    <div className={cx('div-video-content')}>
                        <VideoItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
