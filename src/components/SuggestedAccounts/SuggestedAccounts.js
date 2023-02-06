import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import AccountLoading from './AccountLoading';
import { useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, bottomBtn, tippy, data, item }) {
    const _data = data;
    const hideData = data.slice(0, item);
    const [renderData, setRenderData] = useState({ data: hideData, isShow: true });
    const handleShowMoreUser = () => {
        setRenderData((prev) => {
            if (prev.isShow) return { data: _data, isShow: false };
            else return { data: hideData, isShow: true };
        });
    };
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list')}>
                {!(renderData.data.length === 0) ? (
                    renderData.data.map((info, index) => <AccountItem key={index} tippy={tippy} info={info} />)
                ) : (
                    <AccountLoading />
                )}
            </div>
            {!(renderData.data.length === 0) && (
                <p className={cx('more-btn')} onClick={handleShowMoreUser}>
                    {(renderData && 'Ẩn bớt') || bottomBtn}
                </p>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    item: PropTypes.number,
};

export default SuggestedAccounts;
