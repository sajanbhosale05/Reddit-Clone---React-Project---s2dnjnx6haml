import React from "react";

const Header = () => {
  return (
    <div className="bg-white mb-3">
      <div className="container mx-auto">
        <div className="flex w-960 mx-auto">
          <div className="w-2/3 py-2">
            <div className="inline-flex items-center mr-6">
              <div className="text-xxs text-grey font-semibold mr-4">VIEW</div>
              <div>
                <button>
                  <svg
                    className="h-5 fill-current text-blue"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="inherit"
                      d="M1.75,9.375 L1.75,1.75 L18.25,1.75 L18.25,9.375 L1.75,9.375 Z M1.75,18.25 L1.75,10.625 L18.25,10.625 L18.25,18.25 L1.75,18.25 Z"
                    ></path>
                  </svg>
                </button>
                <button>
                  <svg
                    className="h-5 fill-current text-blue opacity-25"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="inherit"
                      d="M1.75,6.60294118 L1.75,1.75 L18.25,1.75 L18.25,6.60294118 L1.75,6.60294118 Z M1.75,12.4264706 L1.75,7.57352941 L18.25,7.57352941 L18.25,12.4264706 L1.75,12.4264706 Z M1.75,18.25 L1.75,13.3970588 L18.25,13.3970588 L18.25,18.25 L1.75,18.25 Z"
                    ></path>
                  </svg>
                </button>
                <button>
                  <svg
                    className="h-5 fill-current text-blue opacity-25"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="inherit"
                      d="M1.75,4.95149254 L1.75,1.75 L18.25,1.75 L18.25,4.95149254 L1.75,4.95149254 Z M1.75,9.38432836 L1.75,6.18283582 L18.25,6.18283582 L18.25,9.38432836 L1.75,9.38432836 Z M1.75,18.25 L1.75,15.0485075 L18.25,15.0485075 L18.25,18.25 L1.75,18.25 Z M1.75,13.8171642 L1.75,10.6156716 L18.25,10.6156716 L18.25,13.8171642 L1.75,13.8171642 Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="inline-flex items-center">
              <div className="text-xxs text-grey font-semibold mr-4">SORT</div>
              <div className="inline-flex items-center">
                <button className="inline-flex items-center">
                  <svg
                    className="h-4 fill-current text-blue"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Hot</title>
                    <path d="M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"></path>
                  </svg>
                  <span className="text-blue text-xs font-semibold ml-1 mr-2">
                    HOT
                  </span>
                  <svg
                    className="h-4 fill-current text-blue"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        fill="inherit"
                        d="M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button className="inline-flex items-center ml-3">
                  <span className="text-blue text-xs font-semibold ml-1 mr-2">
                    EVERYWHERE
                  </span>
                  <svg
                    className="h-4 fill-current text-blue"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        fill="inherit"
                        d="M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/3">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
