import React from 'react'

import {
    Container,
    Title, 
    Wrapper,
    Image,
    ProjectTitle,
    DescWrapper,
    ProjectDesc,
    IconWrapper,
    Icon
} from './styles/Projects'

export default function Projects({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}

// Projects.X = function ProjectsX ({children, ...restProps}) {
//     return (<X {...restProps}>{children}</X>)
// }

Projects.Title = function ProjectsTitle ({children, ...restProps}) {
    return (<Title {...restProps}>{children}</Title>)
}

Projects.Wrapper = function ProjectsWrapper ({children, ...restProps}) {
    return (<Wrapper {...restProps}>{children}</Wrapper>)
}

Projects.Image = function ProjectsImage ({...restProps}) {
    return (<Image {...restProps} />)
}

Projects.ProjectTitle = function ProjectsProjectTitle ({children, ...restProps}) {
    return (<ProjectTitle {...restProps}>{children}</ProjectTitle>)
}

Projects.DescWrapper = function ProjectsDescWrapper ({children, ...restProps}) {
    return (<DescWrapper {...restProps}>{children}</DescWrapper>)
}

Projects.ProjectDesc = function ProjectsProjectDesc ({children, ...restProps}) {
    return (<ProjectDesc {...restProps}>{children}</ProjectDesc>)
}

Projects.IconWrapper = function ProjectsIconWrapper ({children, ...restProps}) {
    return (<IconWrapper {...restProps}>{children}</IconWrapper>)
}

Projects.Icon = function ProjectsIcon ({children, ...restProps}) {
    return (<Icon {...restProps}>{children}</Icon>)
}
