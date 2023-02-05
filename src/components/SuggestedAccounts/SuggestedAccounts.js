import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import AccountLoading from './AccountLoading';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, bottomBtn, tippy, data }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list')}>
                {!(data.length === 0) ? (
                    data.map((info, index) => <AccountItem key={index} tippy={tippy} info={info} />)
                ) : (
                    <AccountLoading />
                )}
            </div>
            {!(data.length === 0) && <p className={cx('more-btn')}>{bottomBtn}</p>}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
