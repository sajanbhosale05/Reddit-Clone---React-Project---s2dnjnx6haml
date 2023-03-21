import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../mock_styles/Header";
import "./Home.css";

const Home = () => {
  const userData = useSelector((state) => state.user.value);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState("");

  const createPost = () => {
    if (userData.isLoggedIn === true) {
      if (post.trim().length !== 0) {
        const postValue = {
          id: posts.length + 1,
          likes: 0,
          dislikes: 0,
          description: post,
        };
        setPosts([postValue, ...posts]);
        setPost("");
      }
    } else {
      alert("Please Log In");
    }
  };

  const upVote = (e) => {
    e.likes += 1;
    const postValues = posts.map((postVal) => {
      if (postVal.id !== e.id) return postVal;
      else return e;
    });
    setPosts(postValues);
  };
  const downVote = (e) => {
    e.dislikes += 1;
    const postValues = posts.map((postVal) => {
      if (postVal.id !== e.id) return postVal;
      else return e;
    });
    setPosts(postValues);
  };

  return (
    <div className="flex bg-blue-lightest flex flex-col font-sans min-h-screen">
      <div className="mt-12">
        <Header />
        <div className="container mx-auto">
          <div className="flex w-960 mx-auto">
            <div className="w-2/3">
              <div className="py-2">
                {posts.length > 0
                  ? posts.map((data) => (
                      <div
                        key={data.id}
                        className="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer mb-2.5"
                      >
                        <div className="w-1/12 flex flex-col text-center pt-2">
                          <button
                            className="text-xs"
                            onClick={() => upVote(data)}
                          >
                            <svg
                              className="w-5 fill-current text-grey"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
                            </svg>
                          </button>
                          <span className="text-xs font-semibold my-1">
                            {data.likes}
                          </span>
                          <span className="text-xs font-semibold my-1">
                            {data.dislikes}
                          </span>
                          <button
                            className="text-xs"
                            onClick={() => downVote(data)}
                          >
                            <svg
                              className="w-5 fill-current text-grey"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
                            </svg>
                          </button>
                        </div>
                        <div className="w-11/12 pt-2">
                          <div className="flex items-center text-xs mb-2">
                            <a className="font-semibold no-underline hover:underline text-black flex items-center">
                              <img
                                className="rounded-full border h-5 w-5"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f39e14ff-6a49-42a1-af77-8c3745471dd5/d95p5jh-7ae95b13-2979-47e1-a206-aa6ff9ee158e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzOWUxNGZmLTZhNDktNDJhMS1hZjc3LThjMzc0NTQ3MWRkNVwvZDk1cDVqaC03YWU5NWIxMy0yOTc5LTQ3ZTEtYTIwNi1hYTZmZjllZTE1OGUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2Qc1AXXHbJyXFbugn29apuGrlYFwDV9a6c1QD-2mNMY"
                              />
                              <span className="ml-2">{userData.name}</span>
                            </a>
                            <span className="text-grey-light mx-1 text-xxs">
                              •
                            </span>
                            <span className="text-grey">Posted by</span>
                            <a className="text-grey mx-1 no-underline hover:underline">
                              User
                            </a>
                            <span className="text-grey">Few Minutes Ago</span>
                          </div>
                          <div>
                            <h2 className="text-lg font-medium mb-1">
                              {data.description}
                            </h2>
                          </div>
                          <div className="inline-flex items-center my-1">
                            <div className="flex hover:bg-grey-lighter p-1">
                              <svg
                                className="w-4 fill-current text-grey"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z" />
                              </svg>
                              <span className="ml-2 text-xs font-semibold text-grey">
                                0 Comments
                              </span>
                            </div>
                            <div className="flex hover:bg-grey-lighter p-1 ml-2">
                              <svg
                                className="w-4 fill-current text-grey"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                              </svg>
                              <span className="ml-2 text-xs font-semibold text-grey">
                                Share
                              </span>
                            </div>
                            <div className="flex hover:bg-grey-lighter p-1 ml-2">
                              <svg
                                className="w-4 fill-current text-grey"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z" />
                              </svg>
                              <span className="ml-2 text-xs font-semibold text-grey">
                                Save
                              </span>
                            </div>
                            <div className="flex hover:bg-grey-lighter p-1 ml-2 rotate-90">
                              <svg
                                className="w-4 fill-current text-grey"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}

                <div className="flex border border-grey-light-alt hover:border-grey rounded bg-white cursor-pointer">
                  <div className="w-1/12 flex flex-col text-center pt-2">
                    <button className="text-xs">
                      <svg
                        className="w-5 fill-current text-grey"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
                      </svg>
                    </button>
                    <span className="text-xs font-semibold my-1">90k</span>
                    <span className="text-xs font-semibold my-1">0</span>
                    <button className="text-xs">
                      <svg
                        className="w-5 fill-current text-grey"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-11/12 pt-2">
                    <div className="flex items-center text-xs mb-2">
                      <a className="font-semibold no-underline hover:underline text-black flex items-center">
                        <img
                          className="rounded-full border h-5 w-5"
                          src="https://media.tenor.com/SnMhyH-fUSIAAAAC/dragon-ball-goku.gif"
                        />
                        <span className="ml-2">Sajan (Admin)</span>
                      </a>
                      <span className="text-grey-light mx-1 text-xxs"></span>
                      <span className="text-grey">Posted by</span>
                      <a className="text-grey mx-1 no-underline hover:underline">
                        Admin
                      </a>
                      <span className="text-grey">Just Few Moments ago</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-medium mb-1">
                        Hey there..!!.
                        <br />
                        <p className="bg-yellow ">
                          This is my first project.This is a Reddit Clone Built
                          Using React, Redux, Redux Toolkit And Tailwind CSS.
                        </p>
                        <br />
                        Please login with following credentials to get started:
                        <br />
                        Username: sajanbhosale05@gmail.com Password: Sajan@123
                        to
                      </h2>
                    </div>
                    <div className="inline-flex items-center my-1">
                      <div className="flex hover:bg-grey-lighter p-1">
                        <svg
                          className="w-4 fill-current text-grey"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z" />
                        </svg>
                        <span className="ml-2 text-xs font-semibold text-grey">
                          100k Comments
                        </span>
                      </div>
                      <div className="flex hover:bg-grey-lighter p-1 ml-2">
                        <svg
                          className="w-4 fill-current text-grey"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                        </svg>
                        <span className="ml-2 text-xs font-semibold text-grey">
                          Share
                        </span>
                      </div>
                      <div className="flex hover:bg-grey-lighter p-1 ml-2">
                        <svg
                          className="w-4 fill-current text-grey"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z" />
                        </svg>
                        <span className="ml-2 text-xs font-semibold text-grey">
                          Save
                        </span>
                      </div>
                      <div className="flex hover:bg-grey-lighter p-1 ml-2 rotate-90">
                        <svg
                          className="w-4 fill-current text-grey"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/3 ml-5">
              <div className="py-2">
                <div className="rounded bg-white mb-4">
                  <div className="p-3">
                    <div
                      className="h-8 -m-3 bg-no-repeat bg-100%"
                      style={{
                        backgroundImage:
                          "url('https://www.redditstatic.com/desktop2x/img/id-cards/banner@2x.png')",
                      }}
                    ></div>
                    <div>
                      <div className="inline-flex items-center">
                        <img
                          src="https://styles.redditmedia.com/t5_2rn7f/styles/communityIcon_a5j4fs64q9i31.png"
                          className="h-16"
                        />
                        <span className="text-lg ml-4 mt-6"></span>
                      </div>
                      <p className="font-normal mb-3 text-sm leading-normal">
                        <input
                          value={post}
                          placeholder="Enter Post Text"
                          onChange={(e) => {
                            setPost(e.target.value);
                          }}
                          className="border border-black rounded-md p-2.5 w-full"
                          type="text"
                        />
                      </p>
                      <button
                        className="bg-blue-dark text-sm text-white font-semibold rounded px-4 py-2 w-full"
                        onClick={createPost}
                      >
                        CREATE NEW POST
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded bg-white mb-4">
                  <div className="p-2">
                    <div className="flex items-center">
                      <svg
                        className="h-6 w-6 mr-4 text-orange fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Reddit Premium</title>
                        <path d="M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"></path>
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-black-alt mb-1">
                          Reddit Premium
                        </span>
                        <span className="text-xxs font-normal">
                          Ads-free browsing
                        </span>
                      </div>
                      <div className="flex ml-auto">
                        <button className="bg-orange text-xs text-white font-semibold rounded px-4 py-2 ml-auto">
                          GET PREMIUM
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded bg-white mb-4">
                  <div className="p-3 text-xxs font-semibold w-full">
                    TRENDING
                  </div>
                  <div className="pb-4">
                    <div className="px-3 py-2">
                      <div className="flex">
                        <img
                          className="h-8 w-8 border rounded-full mr-2"
                          src="https://i.pinimg.com/originals/ef/09/36/ef0936558e58d6bebf73fee2ae895fe3.gif"
                        />
                        <div className="flex flex-col font-medium">
                          <a className="text-xs text-black-alt no-underline leading-tight">
                            IT-UPDATES
                          </a>
                          <span className="text-xxs">100k subscribers</span>
                        </div>
                        <div className="flex ml-auto">
                          <button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="flex">
                        <img
                          className="h-8 w-8 border rounded-full mr-2"
                          src="https://static01.nyt.com/images/2020/01/01/business/01Techfix-print/01Techfix-print-superJumbo.gif"
                        />
                        <div className="flex flex-col font-medium">
                          <a className="text-xs text-black-alt no-underline leading-tight">
                            TECH-UPDATES
                          </a>
                          <span className="text-xxs">90.12k subscribers</span>
                        </div>
                        <div className="flex ml-auto">
                          <button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="flex">
                        <img
                          className="h-8 w-8 border rounded-full mr-2"
                          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd1c9a80364113.5cdec491b07d9.gif"
                        />
                        <div className="flex flex-col font-medium">
                          <a className="text-xs text-black-alt no-underline leading-tight">
                            REDDIT-CLONE
                          </a>
                          <span className="text-xxs">50k subscribers</span>
                        </div>
                        <div className="flex ml-auto">
                          <button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="flex">
                        <img
                          className="h-8 w-8 border rounded-full mr-2"
                          src="https://media.tenor.com/4KZg4-fdRcIAAAAC/disotiv-fire.gif"
                        />
                        <div className="flex flex-col font-medium">
                          <a className="text-xs text-black-alt no-underline leading-tight">
                            HOT-TOPICS
                          </a>
                          <span className="text-xxs">10.5k subscribers</span>
                        </div>
                        <div className="flex ml-auto">
                          <button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <div className="flex">
                        <img
                          className="h-8 w-8 border rounded-full mr-2"
                          src="https://68.media.tumblr.com/2fa00a76519501d164983a2dbb20580a/tumblr_o0jajudpoX1s9wolfo4_r1_540.gif"
                        />
                        <div className="flex flex-col font-medium">
                          <a className="text-xs text-black-alt no-underline leading-tight">
                            BOLLYWOOD-DAILY
                          </a>
                          <span className="text-xxs">1k subscribers</span>
                        </div>
                        <div className="flex ml-auto">
                          <button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">
                            SUBSCRIBE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded bg-white mb-4">
                  <div className="p-3">
                    <div className="flex justify-between">
                      <div>
                        <a className="block text-black no-underline text-xs font-medium">
                          About
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Careers
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Press
                        </a>
                      </div>
                      <div>
                        <a className="block text-black no-underline text-xs font-medium">
                          Advertise
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Blog
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Help
                        </a>
                      </div>
                      <div>
                        <a className="block text-black no-underline text-xs font-medium">
                          The Reddit App
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Reddit Coins
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Reddit Premium
                        </a>
                        <a className="block text-black no-underline text-xs font-medium">
                          Reddit Gifts
                        </a>
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <p className="text-xs text-black leading-tight font-medium">
                        <a className="text-black no-underline">
                          Content Policy
                        </a>{" "}
                        |{" "}
                        <a className="text-black no-underline">
                          Privacy Policy
                        </a>
                      </p>
                      <p className="text-xs text-black leading-tight font-medium">
                        <a className="text-black no-underline">
                          User Agreement
                        </a>{" "}
                        | <a className="text-black no-underline">Mod Policy</a>
                      </p>
                      <p className="text-xs text-black leading-tight font-medium">
                        © 2023 Reddit, Inc. All rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
