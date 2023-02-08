import React from "react";
import { GoLink } from "react-icons/go";

const Main = () => {
    return (
        <div className="w-full sm:w-2/3 pt-44">
            <div className="pl-0 md:pl-10 xl:pl-52 pr-0 sm:pr-2 md:pr-10">
                <div> {/* Tutorial: Intro to React */}   
                    <div className="text-5xl font-bold mb-14 pl-5">
                        <h1>Tutorial: Intro to React</h1>
                    </div>
                    <div className="p-section">
                        <p className="font-bold">Try the new React documentation.</p>
                        <p className="pb-5">The updated <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Tutorial</a> teaches modern React and includes live examples.</p>
                        <p>The new docs will soon replace this site, which will be archived. <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Provide feedback.</a></p>
                    </div>
                    <div className="mt-7 px-10">
                        <p className="pb-10">This tutorial doesn’t assume any existing React knowledge.</p>
                    </div>
                </div>
                <hr className="mb-3 mx-10"/>
                <div> {/* Before We Start the Tutorial */}
                    <div className="pt-5 mb-12">
                        <div className="flex text-3xl font-bold pb-5 pl-5">
                            <a href="" className="text-sm mt-4 mr-1 hover:visible"><GoLink /></a>
                            <h1>Before We Start the Tutorial</h1>
                        </div>
                        <div className="pl-10 mb-5">
                            <p>We will build a small game during this tutorial. <strong>You might be tempted to skip it because</strong></p>
                            <p><strong>you’re not building games — but give it a chance.</strong> The techniques you’ll learn in the tutorial</p>
                            <p>are fundamental to building any React app, and mastering it will give you a deep</p>
                            <p>understanding of React.</p>
                        </div>
                        <div className="p-section">
                            <p className="font-bold">Tip</p>
                            <p>This tutorial is designed for people who prefer to <strong>learn by doing</strong>. If you prefer learning</p>
                            <p>concepts from the ground up, check out our <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">step-by-step guide</a>. You might find this tutorial</p>
                            <p>and the guide complementary to each other.</p>
                        </div>
                        <div className="my-7 pl-10">
                            <p className="mb-5">The tutorial is divided into several sections:</p>
                            <ul className="list-disc pl-5 mb-5 space-y-2">
                                <li><a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Setup for the Tutorial</a> will give you a starting point to follow the tutorial.</li>
                                <li><a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Overview</a> will teach you the fundamentals of React: components, props, and state.</li>
                                <li><a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Completing the Game</a> will teach you the most common techniques in React development.</li>
                                <li><a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Adding Time Travel</a> will give you a deeper insight into the unique strengths of React.</li>
                            </ul>
                            <p>You don’t have to complete all of the sections at once to get the value out of this tutorial. Try</p>
                            <p>to get as far as you can — even if it’s one or two sections.</p>
                        </div>
                    </div>

                    <div className="pl-10"> {/*What Are We Building*/}
                        <div>
                            <h1>What Are We Building?</h1>
                        </div>
                        <div>
                            <p>In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.</p>
                        </div>
                        <div>
                            <p>You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or</p>
                            <p>if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you</p>
                            <p>understand React and its syntax.</p>
                        </div>
                        <div>
                            <p>We recommend that you check out the tic-tac-toe game before continuing with the tutorial.</p>
                            <p>One of the features that you’ll notice is that there is a numbered list to the right of the game’s</p>
                            <p>board. This list gives you a history of all of the moves that have occurred in the game, and it is</p>
                            <p>updated as the game progresses.</p>
                        </div>
                        <div>
                            <p>You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler</p>
                            <p>template in this tutorial. Our next step is to set you up so that you can start building the game.</p>
                        </div>
                    </div>

                    <div className="pl-10"> {/*Prerequisites*/}
                        <div>
                            <h1>Prerequisites</h1>
                        </div>
                        <div>
                            <p>We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able</p>
                            <p>to follow along even if you’re coming from a different programming language. We’ll also</p>
                            <p>assume that you’re familiar with programming concepts like functions, objects, arrays, and to a</p>
                            <p>lesser extent, classes.</p>
                        </div>
                        <div>
                            <p>If you need to review JavaScript, we recommend reading this guide. Note that we’re also using</p>
                            <p>some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using arrow</p>
                            <p>functions, classes, let, and const statements. You can use the Babel REPL to check what ES6</p>
                            <p>code compiles to.</p>
                        </div>
                    </div>
                </div>
                <hr className="mb-3 mx-10"/>
                <div> {/** Setup for the Tutorial */}
                    <div>

                    </div>
                    <div>{/** Option 1: Write Code in the Browser */}

                    </div>
                    <div> {/** Option 2: Local Development Environment */}

                    </div>
                    <div> {/** Help, I'm Stuck! */}

                    </div>
                </div>
                <hr className="mb-3 mx-10"/>
                
            </div>
        </div>
    )
}

export default Main;