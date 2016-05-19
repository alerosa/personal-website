/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 *
 * Copyright © 2015-2016 Konstantin Tarkus (@koistya)
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {Homepage} from '../../components';

export default {

  path: '/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const page = require('./page.md');
          const skills = require('./skills.md');
          const careers = require('./careers.md');
          const educations = require('./educations.md');
          const projects = require('./projects.md');
          const contacts = require('./contacts.md');
          const content = Object.assign(skills, careers, educations, projects, contacts, page);

          resolve({
            title: content.title,
            component: Homepage,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  }
};
