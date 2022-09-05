import React, { ReactNode, useContext } from 'react';
import cs from 'classnames';

import './index.less'
import { ConfigContext } from '../ConfigProvider';

interface ButtonProps {
    type?: 'highlight' | 'default',
    text?: string,
    children?: ReactNode,
    disabled?: boolean,
    icon?: ReactNode,
    className?: string,
    style?: object,
    orderType?: number,
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default (props: ButtonProps) => {
    const { type, text, children, disabled, icon, className, style, onClick, orderType } = props

    // const prefix = 'heima-ui'
    const { prefix } = useContext(ConfigContext)

    const btnPrefix = prefix + '-btn'
    const classes = cs(
        btnPrefix,
        {
            [`${btnPrefix}-highlight`]: type === 'highlight',
            [`${btnPrefix}-disabled`]: disabled
        },
        className
    )

    const getTextByOrderType = () => {
        if (orderType === 1) {
            return '已完成'
        }
        if (orderType === 2) {
            return '已超时'
        }
        return '未完成'
    }

    return (
        <div
            className={classes}
            style={style}
            onClick={(e) => {
                if (disabled) return
                onClick && onClick(e)
            }}
        >
            {icon}
            {/* {getTextByOrderType()} */}
            {text}
            {children}
        </div>
    )
};
