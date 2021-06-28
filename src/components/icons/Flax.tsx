import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as ChialiteIcon } from './images/chialite.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={ChialiteIcon} viewBox="0 0 150 58" {...props} />;
}
