/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import Header from './Header';
import Footer from './Footer';
import s from './Layout.css';

class Layout extends React.Component {

  render() {
    return (
      <div ref="root" className={s.root}>
        <main {...this.props}/>
        <Footer/>
      </div>
    );
  }
}

export default Layout;
