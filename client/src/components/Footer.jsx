import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer container */}
      <div className="fixed bottom-0 w-full mt-10 flex flex-col items-center">
        {/* back to top button */}
        {/* <button className="border border-slate-800 p-2 my-3 w-fit">
          Back to top
        </button> */}
        {/* footer */}
        <div className="footer w-full h-10 bg-slate-900">
          <div className="w-full text-center mt-2">
            <p className="capitalize text-gray-200 cursor-pointer">
              ✨ Made with ❤️ by Ayush Sharma ✨
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
