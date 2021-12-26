import glob from 'fast-glob';

export default function Character(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

export function getStaticPaths() {}
export function getStaticProps() {}
