import React, {PropTypes, Component} from 'react';
import scrollTo from 'scroll-to';
import Layout from '../layout/Layout.js';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';



class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    scrollTo(0, this.refs.skills.offsetTop, {
      ease: 'outQuad',
      duration: 700
    });
  }

  render() {
    return (
      <Layout>
        <Intro scrollDown={this.handleClick.bind(this)} title="Alessandro Rosa" subtitle="frontend developer" text={this.props.html}/>
        <div ref="skills"><Skills skills={this.props.skills}/></div>
        <Experiences careers={this.props.careers} educations={this.props.educations}/>
        <Projects projects={this.props.projects}/>
        <Contacts contacts={this.props.contacts}/>
      </Layout>
    )
  }
};

Homepage.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  skills: PropTypes.object.isRequired,
  careers: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired
};

export default Homepage;
