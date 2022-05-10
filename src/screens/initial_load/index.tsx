import React from 'react';
import * as R from 'ramda';
import { useRecoilValue } from 'recoil';
import { LinearProgress } from '@material-ui/core';
import { chainConfig } from '@configs';
import { readTheme } from '@recoil/settings';
import { useStyles } from './styles';

const InitialLoad = () => {
  const theme = useRecoilValue(readTheme);
  const classes = useStyles();

  const logoUrl = R.pathOr(chainConfig.logo.default, ['logo', theme], chainConfig);

  return (
    <div className={classes.root}>
      <div>
        <img src={logoUrl} className={classes.logo} alt="logo" />
        <LinearProgress className={classes.divider} />
        <img src="/images/chadscan-logo.svg" alt="Chadscan" className={classes.chadscan} />
      </div>
    </div>
  );
};

export default InitialLoad;
