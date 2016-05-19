/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import home from './home';
// import blog from './blog';
// import error from './error';

const routes = {

  path: '/',

  children: [
    home,
    // blog,
    // error,
  ],

};

export default routes;