/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Utils from '../../utils'
import style from './index.module.less'

export const aboutPropTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    wayfair: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    nugdc: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    hof: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    skillIcons: PropTypes.object.isRequired,
    toolIcons: PropTypes.object.isRequired,
  }),
}

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
    let { profilePhoto, wayfair, nugdc, hof } = this.props.data
    return (
      <Layout>
        <SEO
          title="About"
          description="A brief summary of this blog"
          path="about"
        />
        <div className={style.container}>
          <div className={style.circularPortrait}>
            <Img
              fluid={profilePhoto.childImageSharp.fluid}
              className="rounded-circle"
            />
          </div>
          <div className={style.content}>
            <h1>Hey, I'm Will!</h1>
            <p>
              I recently graduated from Northeastern University in Boston, Massachusetts
              with a bachelor's degree in Computer Science and Game Development.
              I previously spent a year at Wayfair as a data center engineering co-op, where I gained
              a lot of great experience in Python scripting, DevOps, and Agile sprints. 
            </p>
            <p>
              In my time at Northeastern, I was very involved with the games program.
              I served on the executive board of the game development club for 2 years, helping
              coordinate meetings and arrange talks from prominent guest speakers. 
              I also helped organize and run the 2020 Boston Global Game Jam at Northeastern,
              which was one of the largest GGJ sites in North America. In 2021, I worked with 
              Brandon Sichling, the Northeastern game design department coordinator,
              on their game Habit of Force, which I helped prepare for
              showcases at Tokyo Indies and the Boston Festival of Indie Games.
            </p>
            <div className={style.container}>
              <div className={style.companyLogo}>
                <Img
                  fluid={wayfair.childImageSharp.fluid}
                />
              </div>
              <div className={style.companyLogo}>
                <Img
                  fluid={nugdc.childImageSharp.fluid}
                />
              </div>
              <div className={style.companyLogo}>
                <Img
                  fluid={hof.childImageSharp.fluid}
                />
              </div>
            </div>
            <p>
              When it comes to game design, I'm most interested in building captivating worlds
              and developing compelling stories and characters. This is particularly apparent in
              my love for JRPGs like Persona, Xenoblade, and 13 Sentinels: Aegis Rim.
              I also enjoy getting lost in a game of Tetris, especially in the VR masterpiece
              that is Tetris Effect.
            </p>
            <p>
              My other hobbies include relaxing with my dogs, watching the NBA, and streaming 
              with my friends on Twitch. I also started learning Japanese recently, and I've been
              known to play the clarinet at times. 
            </p>
          </div>
        </div>
      </Layout >
    )
  }
}

export const imageListPropTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
        childImageSharp: PropTypes.shape({
          fixed: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
}

class ImageList extends React.Component {
  static propTypes = imageListPropTypes

  render = () => (
    <div className={style.iconsContainer}>
      {this.props.edges
        .sort((edgeA, edgeB) =>
          edgeA.node.name.toLowerCase() > edgeB.node.name.toLowerCase() ? 1 : -1
        )
        .map(({ node: { name, childImageSharp } }) => (
          <div className={style.iconWrapper} key={name}>
            <Img
              fixed={childImageSharp.fixed}
              alt={name + ' logo'}
              title={name}
            />
            <label>
              {iconsNameMap[name] ? iconsNameMap[name] : Utils.capitalize(name)}
            </label>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    wayfair: file(name: { eq: "wayfair" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    nugdc: file(name: { eq: "nugdc" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    hof: file(name: { eq: "hof" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    flagIt: file(name: { eq: "flag-it" }) {
      childImageSharp {
        fixed(width: 50) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    skillIcons: allFile(filter: { dir: { regex: "/about/skills$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
    toolIcons: allFile(filter: { dir: { regex: "/about/tools$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
// Use to set specific icons names
export const iconsNameMap = {
  css: 'CSS',
  html: 'HTML',
  jquery: 'JQuery',
  nodejs: 'Node.js',
  vuejs: 'Vue.js',
  gruntjs: 'Grunt.js',
}

export default About
