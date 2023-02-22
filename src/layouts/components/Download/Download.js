import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { ComputerIcon, MoveTopIcon, PhoneIcon } from '~/components/Icons';
import styles from './Download.module.scss';

const cx = classNames.bind(styles);

function Download() {
    const [download, setDownload] = useState(false);
    const [hide, setHide] = useState(false);
    const [QR, setQR] = useState(false);
    const [showGoToTop, setShowGoToTop] = useState(false);

    const handleChoseDownload = () => {
        setDownload(true);
    };
    const handleCloseDownload = () => {
        setDownload(false);
    };

    const handleShowQR = () => {
        setHide(true);
        setTimeout(() => {
            setQR(true);
            setDownload(false);
        }, 300);
    };
    const handleCloseQR = () => {
        setQR(false);
        setTimeout(() => {
            setHide(false);
        }, 300);
    };
    const handleMoveTop = () => {
        console.log(window);
    };
    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            {hide && (
                <div
                    className={cx('QR-download', {
                        ['show']: !QR,
                    })}
                    tabIndex="-1"
                >
                    <section
                        className={cx('QR-container', {
                            ['show']: !QR,
                        })}
                    >
                        <div className={cx('heading')}>
                            <p className={cx('title')}>Tải ứng dụng TikTok</p>
                            <FontAwesomeIcon icon={faXmark} onClick={handleCloseQR} />
                        </div>
                        <div className={cx('QR-code')}>
                            <p className={cx('text')}>Hãy quét mã QR này để tải TikTok về máy</p>
                            <img
                                className={cx('QR-image')}
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                                alt=""
                            />
                        </div>
                        <div className={cx('store-app')}>
                            <p className={cx('text')}>Tải về từ cửa hàng ứng dụng</p>
                            <div className={cx('store')}>
                                <a href="">
                                    <img
                                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                        alt=""
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                        alt=""
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                        alt=""
                                    />
                                </a>
                                <a href="">
                                    <img
                                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            <div
                className={cx('download-container', {
                    gotoTop: showGoToTop,
                })}
            >
                <div className={cx('download-btn')}>
                    <Button
                        small
                        outline
                        className={cx('download', {
                            show: !download,
                        })}
                        onClick={handleChoseDownload}
                    >
                        Tải ứng dụng
                    </Button>
                    <div
                        className={cx('download-for', {
                            show: download,
                        })}
                    >
                        <div className={cx('pc-phone')}>
                            <div className={cx('btn')}>
                                <ComputerIcon />
                                <span>Tải TikTok dành cho máy tính để bàn</span>
                            </div>
                            <div className={cx('line')}></div>
                            <div className={cx('btn')} onClick={handleShowQR}>
                                <PhoneIcon />
                                <span>Tải ứng dụng TikTok</span>
                            </div>
                        </div>
                        <div className={cx('close')} onClick={handleCloseDownload}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </div>
                <div className={cx('move-top')} onClick={handleMoveTop}>
                    <MoveTopIcon />
                </div>
            </div>
        </>
    );
}

export default Download;
