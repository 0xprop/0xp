import Link from 'next/link';
import Nav from './nav';

export default function Header() {
  return (
    <header>
      <h1>My Site</h1>
      <Nav />
    </header>
  );
}