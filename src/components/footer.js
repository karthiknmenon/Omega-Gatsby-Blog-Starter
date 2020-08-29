import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-200">
            <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
            <p className="text-black">
                Created by{` `}
                <a
                className="font-bold no-underline"
                href="https://karthikmenon.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                Karthik Menon
                </a>
            </p>

            <p>
                <a
                className="font-bold text-black no-underline"
                href="https://github.com/mojojojo20"
                target="_blank"
                rel="noopener noreferrer"
                >
                GitHub
                </a>
            </p>
            </nav>
      </footer>
    )
}

export default Footer;