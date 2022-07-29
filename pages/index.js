import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import ImageComponent from "../components/ImageComponent";
import YouTube from "../components/YouTube";

const components = { ImageComponent, YouTube };

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <h1>Next.js and MDX</h1>
      <div>
        <MDXRemote {...source} components={components} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = `
  Some **mdx** text, with an image component:

  <ImageComponent/>

  ## Some video tutorials:

  ### Building A Blog With MDX 
  <YouTube id='dsCfi0yRr1w' />

  ### Easily create a blog with Next.js, MDX, SSG and Syntax Highlighting
  <YouTube id='J_0SBJMxmcw' />

  NextJS Blog With next-mdx-remote
  <YouTube id='Zr_2qJ3V92o' />
  `;
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
