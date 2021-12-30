import React from 'react'

import {
    Container,
    Signature
} from './styles/Footer'

export default function Footer({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}

Footer.Signature = function FooterSignature({children, ...restProps}) {
    return (<Signature {...restProps}>{children}</Signature>)
}