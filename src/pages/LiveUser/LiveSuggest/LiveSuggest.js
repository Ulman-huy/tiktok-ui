import styles from './LiveSuggest.module.scss';
import classNames from 'classnames/bind';
import SuggestItem from './SuggestItem';
import { useContext } from 'react';
import { Data } from '~/layouts/FullScreen/Fullscreen';

const cx = classNames.bind(styles);

function LiveSuggest() {
    const { data, liveUser } = useContext(Data);
    const newData = data.filter((item) => item !== liveUser);
    return (
        <div className={cx('live-suggest')}>
            <div className={cx('suggest-title')}>
                <h2>Video LIVE được đề xuất</h2>
            </div>
            <div className={cx('suggest-list')}>
                {newData.map((liveSuggest) => (
                    <SuggestItem key={liveSuggest.id} liveSuggest={liveSuggest} />
                ))}
            </div>
        </div>
    );
}

export default LiveSuggest;
