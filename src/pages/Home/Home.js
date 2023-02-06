import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import VideoItem from '~/components/VideoItem';
import { info } from './info';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <VideoItem info={info} />
            <VideoItem info={info} />
        </div>
    );
}

export default Home;
