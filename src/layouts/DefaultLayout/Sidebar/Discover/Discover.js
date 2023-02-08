import styles from './Discover.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { HashTagIcon, MusicIcon } from '~/components/Icons';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Discover({ tags }) {
    const render = useDebounce(tags, 1500);
    const [renderTags, setRenderTags] = useState(render);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setRenderTags(render);
        setLoading(!loading)
    }, [render]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>Khám phá</p>
            <div className={cx('tags')}>
                {renderTags.map((tag) => (
                    <Link key={tag.id} to={`/${tag.type}/${tag.title}`} className={cx('tag')}>
                        <span className={cx('icon')}>{tag.hashtag ? <HashTagIcon /> : <MusicIcon />}</span>
                        <span className={cx('title')}>{tag.title}</span>
                    </Link>
                ))}
                {!loading && (
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
