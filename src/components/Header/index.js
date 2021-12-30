import React from 'react'

import {
    Container,
    Signature,
    MarqueeWrap
} from './styles/Header'

export default function Header({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}

Header.Signature = function HeaderSignature({children, ...restProps}) {
    return (<Signature {...restProps}>{children}</Signature>)
}

Header.MarqueeWrap = function HeaderMarqueeWrap({children, ...restProps}) {
    return (<MarqueeWrap {...restProps}>{children}</MarqueeWrap>)
}