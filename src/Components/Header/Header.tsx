"use client";
import Link from "next/link";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__name">
        <h1 className="header__name--title">O&apos; Penses&apos;y</h1>
        <p className="header__name--description">
          {" "}
          Le pense bête qui t&apos;y fait penser
        </p>
      </div>
      <div className="header__nav">
        <nav className="header__nav--menu">
          <ol className="header__nav--links">
            <li className="header__nav--link">
              <Link href="/">Accueil</Link>
            </li>
            <li className="header__nav--link">
              <Link href="/Task">Tâche</Link>
            </li>
            <li className="header__nav--link"> Liste de courses</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
