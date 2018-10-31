import React from 'react'
import Layout from './layout'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { MDXProvider } from '@mdx-js/tag'


const PreComponent = ({ className, ...props }) =>
  props.children.props.props &&
  props.children.props.props.className ===
    "language-.jsx" ? (
    <LiveProvider
      mountStylesheet={false}
      code={props.children.props.children}
    >
      <LiveEditor tabIndex="-1" />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  ) : (
    <pre {...props} className="pre-static" />
  );

export default class MDXLayout extends React.Component {
  render() {
    return (
        <Layout>
            <MDXProvider components={{ pre: PreComponent }}>
                {this.props.children}
            </MDXProvider>
        </Layout>
    )
  }
}