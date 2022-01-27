export default function About() {
  if (typeof document !== 'undefined') {
      // Some code that only runs in the client
      // @ts-ignore
      this.is.undefined // let's throw an error during render
  }

  return (
    <div>
      <h1>About</h1>
      Welcome to the About page that contains a client-side-only error.
    </div>
  );
}
