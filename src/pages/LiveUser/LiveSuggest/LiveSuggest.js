import styles from './LiveSuggest.module.scss';
import classNames from 'classnames/bind';
import SuggestItem from './SuggestItem';

const cx = classNames.bind(styles);

function LiveSuggest() {
    return (
        <div className={cx('live-suggest')}>
            <div className={cx('suggest-title')}>
                <h2>Video LIVE được đề xuất</h2>
            </div>
            <div className={cx('suggest-list')}>
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
            </div>
        </div>
    );
}

export default LiveSuggest;
