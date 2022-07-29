import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Test from "../components/Test";
import YouTube from "../components/YouTube";

const components = { Test, YouTube };

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <h1>MDX Test</h1>
      <p>hi</p>
      <div>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `
  Some **mdx** text, with a component

  <Test/>

  <YouTube id='dsCfi0yRr1w' />
  `;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
