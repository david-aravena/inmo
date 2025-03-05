"use client";

import Link from "next/link";

export default function Links({ styles, data }) {

  return (
    <div className={styles.linksSectionsContainer}>
      {data.map(({ href, text }) => (
        <Link key={href} href={href}>
          <button
            style={{
              padding: "1rem",
              background: href === "#" ? "#992264" : "none",
              color: "white",
              border: "none",
              flex: "1",
              cursor: "pointer",
            }}
          >
            {text}
          </button>
        </Link>
      ))}
    </div>
  );
}
