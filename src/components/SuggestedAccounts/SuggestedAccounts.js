import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import AccountLoading from './AccountLoading';
import { useDebounce } from '~/hooks';
import {  useEffect, useState } from 'react';


const cx = classNames.bind(styles);

function SuggestedAccounts({ label, bottomBtn, tippy = false, data, item = 5, live = false, profile = false }) {
    const [renderData, setRenderData] = useState({
        data: data.slice(0, item),
        isShow: true,
        text: bottomBtn,
    });
    const [loading, setLoading] = useState(false);
    const render = useDebounce(data, 1500);

    const handleShowMoreUser = () => {
        setRenderData((prev) => {
            if (prev.isShow) return { data: data, isShow: false, text: 'Ẩn bớt' };
            else return { data: render.slice(0, item), isShow: true, text: bottomBtn };
        });
    };
    useEffect(() => {
        setRenderData({ data: render.slice(0, item), isShow: true, text: bottomBtn });
        setLoading(!loading);
    }, [render]);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('list')}>
                {loading && <AccountLoading />}
                {renderData.data.map((info, index) => (
                    <AccountItem key={index} tippy={tippy} info={info} live={live} profile={profile} />
                ))}
            </div>
            {!loading && (
                <p className={cx('more-btn')} onClick={handleShowMoreUser}>
                    {renderData.text}
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
