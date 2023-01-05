import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ 
    to, 
    href, 
    text = false, 
    primary = false, 
    outline = false, 
    small = false, 
    large = false, 
    disable = false, 
    rounded = false, 
    children, 
    className,
    leftIcon,
    rightIcon,
    onClick, 
    passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }
// Remove event listener when is disable
    if(disable) {
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if(to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded    
    });

    return (
        <Comp className={classes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;