import React from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const UseDarkSideHook = () => {
  const usage = `
  import React from "react";
  import useDarkSide from "use-dark-side";
  
  function YourComponent() {
    const [colorTheme, setTheme] = useDarkSide();
  
    // Your component logic here
  
    return (
      <div className={colorTheme === "dark" ? "dark-theme" : "light-theme"}>
        {/* Your component UI here */}
      </div>
    );
  }`;

  return (
    <div className="dark:text-white mb-10">
      <Link
        to={"/blog"}
        className="scale-100 hover:scale-105 transition duration-300 font-semibold inline-flex items-center gap-2 mb-3"
      >
        <FaRegArrowAltCircleLeft />
        <h1>Back</h1>
      </Link>
      <div className="mt-2">
        <div className="border-b flex flex-col lg:flex-row">
          <div className="mb-3">
            <h1 className="text-3xl font-bold mb-5">
              React Custom Hooks: useDarkSide
            </h1>
            <div>
              <p>
                Published on{" "}
                <span className="font-semibold">November 29, 2023</span>
              </p>
            </div>
          </div>
        </div>
        <h1 className="mt-2 text-xl font-bold">Introduction 🎯</h1>
        <p className="mt-2">
          <code className="code">useDarkSide</code> is a React hook designed to
          simplify the management of dark and light themes in your React
          applications. It uses local storage to persist the user's theme
          preference, making it convenient for your application to remember the
          user's chosen theme even after a page reload.
        </p>
        <h1 className="mt-2 text-xl font-bold">Installation</h1>
        <p>Using NPM: </p>
        <code className="code language-bash">
          npm install --save use-dark-side
        </code>
        <p>Using Yarn: </p>
        <code className="code language-bash">yarn add use-dark-side</code>
        <h1 className="mt-2 text-xl font-bold">Usage</h1>
        <p>Import the hook in your React component: </p>
        <div className="mt-2 flex flex-col">
        <SyntaxHighlighter language="javascript" style={docco}>
      {usage}
    </SyntaxHighlighter>

        </div>
      </div>
    </div>
  );
};

export default UseDarkSideHook;
