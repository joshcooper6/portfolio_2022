import React from 'react'

import { Container } from './styles/Viewer'

export default function Viewer({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}