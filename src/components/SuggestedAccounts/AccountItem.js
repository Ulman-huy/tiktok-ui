import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ tippy, info }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview info={info} />
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <Link to={`/@${`${info.nickname}`}`}>
            {tippy && (
                <Tippy interactive offset={[-8, 0]} delay={[800, 0]} placement="bottom-start" render={renderPreview}>
                    <div className={cx('account-item')}>
                        <img className={cx('avatar')} src={info.avatar} alt={info.full_name} />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{info.nickname}</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                            </p>
                            <p className={cx('name')}>{info.full_name}</p>
                        </div>
                    </div>
                </Tippy>
            )}
            {!tippy && (
                <div>
                    <div className={cx('account-item')}>
                        <img className={cx('avatar')} src={info.avatar} alt={info.full_name} />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{info.nickname}</strong>
                                {info.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                            </p>
                            <p className={cx('name')}>{info.full_name}</p>
                        </div>
                    </div>
                </div>
            )}
        </Link>
    );
}

AccountItem.propTypes = {
    tippy: PropTypes.bool,
    info: PropTypes.object,
};

export default AccountItem;