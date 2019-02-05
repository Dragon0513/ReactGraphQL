import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/Sell">
      <a>Sell</a>
    </Link>

    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;
