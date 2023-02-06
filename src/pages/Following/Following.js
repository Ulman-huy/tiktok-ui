import styles from './Following.module.scss';
import classNames from 'classnames/bind';
import VideoItem from '~/components/VideoItem';
import { info } from '../Home/info';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('wrapper')}>
            <VideoItem follow={false} info={info} />
            <VideoItem follow={false} info={info} />
            <VideoItem follow={false} info={info} />
            <VideoItem follow={false} info={info} />
        </div>
    );
}

export default Following;
