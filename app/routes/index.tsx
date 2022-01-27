import {Link} from '@remix-run/react'

export default function Index() {
  return (
    <div>
      <h1>Welcome</h1>
      Go to <Link to="/about">About</Link> and then refresh the page.
    </div>
  );
}
