import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { HashTagIcon, MusicIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Discover({ tags }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Khám phá</p>
            <div className={cx('tags')}>
                {!(tags.length === 0) ? (
                    tags.map((tag) => (
                        <Link key={tag.id} to={`/${tag.type}/${tag.title}`} className={cx('tag')}>
                            <span className={cx('icon')}>{tag.hashtag ? <HashTagIcon /> : <MusicIcon />}</span>
                            <span className={cx('title')}>{tag.title}</span>
                        </Link>
                    ))
                ) : (
                    <div className={cx('no-tags')}>
                        <div className={cx('box')}></div>
                        <div className={cx('box')}></div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Discover;
