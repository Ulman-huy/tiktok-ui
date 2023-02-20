import styles from './LiveSuggest.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Data } from '~/layouts/FullScreen/Fullscreen';
import ReactPlayer from 'react-player';
const cx = classNames.bind(styles);

function SuggestItem({ liveSuggest }) {
    const { setLiveUser } = useContext(Data);
    const handleSetLiveUrl = () => {
        setLiveUser(liveSuggest);
    };
    return (
        <div className={cx('suggest-item-wrapper')}>
            <div className={cx('video')}>
                <Link to={`/@${liveSuggest.nickname}/live`} className={cx('mask-video')} onClick={handleSetLiveUrl}>
                    <div className={cx('icon-play')}>
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <ReactPlayer url={liveSuggest.url} title={liveSuggest.bio} width="100%" height="100%" />
                </Link>
                <div className={cx('info-video')}>
                    <div className={cx('user-watching')}>{`${liveSuggest.user_watch_live_count} người xem`}</div>
                    <div className={cx('live-tag')}>LIVE</div>
                </div>
            </div>
            <Link to={`/@${liveSuggest.nickname}`} className={cx('description')}>
                <div className={cx('div-avatar')}>
                    <Image src={liveSuggest.avatar} alt="" className={cx('avatar')} />
                </div>
                <div className={cx('div-wrapper')}>
                    <div className={cx('title')}>{liveSuggest.bio}</div>
                    <div className={cx('name')}>{liveSuggest.full_name}</div>
                </div>
            </Link>
        </div>
    );
}

export default SuggestItem;
