import styled from 'styled-components';
import { ReactComponent as Error } from '../../images/icons/input_error.svg';
import { ReactComponent as Ok } from '../../images/icons/input_ok.svg';

export const ErrorIconStyled = styled(Error)`
    position: absolute;
    top: 86px;
    left: 82%;

    @media screen and (${(p) => p.theme.media.tablet}) {
    top: 118px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    top: 114px;
}
`;

export const OkIconStyled = styled(Ok)`
    position: absolute;
    top: 86px;
    left: 82%;

    @media screen and (${(p) => p.theme.media.tablet}) {
    top: 118px;
}

    @media screen and (${(p) => p.theme.media.desktop}) {
    top: 114px;
}
`;