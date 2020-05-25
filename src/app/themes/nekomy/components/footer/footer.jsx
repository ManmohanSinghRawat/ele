import React, { Component } from 'react';
import Helpers from '../../../../core/common/helpers';
import Icon from '../../../../core/common/lib/icon/icon';
import Logo from '../../../../../../static/svg/rocket.svg';

class Footer extends Component {

  componentDidMount() {
    Helpers.getAppVersion('.app-version');
  }

  render() {
    return (
      <section className="footer">
        <span>AllAboutSpaceFlight Platform <span className="app-version" />
          <Icon glyph={Logo} />
          2019 - 2020. Licensed under MSIT.
        </span>
      </section>
    );
  }
}

export default Footer;
