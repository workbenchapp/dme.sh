import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};
const listStyles = {
  listStyleType: "none",
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Crypto Workbench",
  url: "https://cryptoworkbench.io/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as const,
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: "Solana Name service",
    url: "/names/",
    description: "Lets see what Solana Domains we have, and how they work.",
    //color: "#E95800",
  },
  {
    text: "Crypto Workbench",
    url: "https://cryptoworkbench.io/",
    description: "We're working on decentralised compute.",
    //color: "#8954A8",
  },
];

// markup
const DMeshIndex = () => {
  return (
    <main style={pageStyles}>
      <title>DMe.sh Home Page</title>
      <h1 style={headingStyles}>DMe.sh</h1>
      <p style={paragraphStyles}>
        Playground for Solana DAPP experiments - Gotta start somewhere
      </p>
      <ul style={listStyles}>
        {links.map((link) => (
          <li
            key={link.url}
            style={{ ...listItemStyles, color: link.color || "white" }}
          >
            <span>
              <a style={linkStyle} href={`${link.url}`}>
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default DMeshIndex;
