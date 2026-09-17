import Link from "next/link";

export default function TOC() {
  return (
    <>
      <h4>Bear Smith</h4>
      <ul>
        <li>
          <Link id="wd-home-link" href="/labs">
            Home
          </Link>
        </li>
        <li>
          <Link id="wd-lab1-link" href="/labs/lab1">
            Lab 1
          </Link>
        </li>
        <li>
          <Link id="wd-lab2-link" href="/labs/lab2">
            Lab 2
          </Link>
        </li>
        <li>
          <Link id="wd-lab3-link" href="/labs/lab3">
            Lab 3
          </Link>
        </li>
        <li>
          <Link id="wd-lab4-link" href="/labs/lab4">
            Lab 4
          </Link>
        </li>
        <li>
          <Link id="wd-lab5-link" href="/labs/lab5">
            Lab 5
          </Link>
        </li>
        <li>
          <Link id="wd-kambaz-link" href="/">
            Kambaz
          </Link>
        </li>
        <li>
          <a id="wd-github-link" href="https://github.com/bearsmithnu/webdev-client">
            GitHub
          </a>
        </li>
      </ul>
    </>
  );
}
