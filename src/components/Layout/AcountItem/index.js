import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ae2101aa041114d4fd5fa3cd44097eb7~c5_100x100.jpeg?x-expires=1673024400&x-signature=F8woIxUEpqUG9HpOFQLBhMC3L3g%3D" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>NguyenA</p>
            </div>
        </div>
    );
}

export default AccountItem;