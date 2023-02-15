import React from "react";
import { GoLink } from "react-icons/go";
import code1 from "../assets/code1.png";
import code2 from "../assets/code2.png";
import code3 from "../assets/code3.png";
import code4 from "../assets/code4.png";
import tictac1 from "../assets/tictac-empty.png";
import tictac2 from "../assets/tictac-numbers.png";
import code5 from "../assets/code5.png";
import code6 from "../assets/code6.png";
import code7 from "../assets/code7.png";
import devtools from "../assets/devtools.png";

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
                        <div className="font-bold text-2xl mb-5">
                            <h1>What Are We Building?</h1>
                        </div>
                        <div>
                            <p>In this tutorial, we’ll show how to build an interactive tic-tac-toe game with React.</p>
                        </div>
                        <div className="my-8">
                            <p>You can see what we’ll be building here: <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black font-bold">Final Result</a>. If the code doesn’t make sense to you, or</p>
                            <p>if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you</p>
                            <p>understand React and its syntax.</p>
                        </div>
                        <div>
                            <p>We recommend that you check out the tic-tac-toe game before continuing with the tutorial.</p>
                            <p>One of the features that you’ll notice is that there is a numbered list to the right of the game’s</p>
                            <p>board. This list gives you a history of all of the moves that have occurred in the game, and it is</p>
                            <p>updated as the game progresses.</p>
                        </div>
                        <div className="my-8">
                            <p>You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler</p>
                            <p>template in this tutorial. Our next step is to set you up so that you can start building the game.</p>
                        </div>
                    </div>

                    <div className="pl-10"> {/*Prerequisites*/}
                        <div className="my-5 text-2xl font-bold">
                            <h1>Prerequisites</h1>
                        </div>
                        <div>
                            <p>We’ll assume that you have some familiarity with HTML and JavaScript, but you should be able</p>
                            <p>to follow along even if you’re coming from a different programming language. We’ll also</p>
                            <p>assume that you’re familiar with programming concepts like functions, objects, arrays, and to a</p>
                            <p>lesser extent, classes.</p>
                        </div>
                        <div className="mt-8 mb-10">
                            <p>If you need to review JavaScript, we recommend reading <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">this guide</a>. Note that we’re also using</p>
                            <p>some features from ES6 — a recent version of JavaScript. In this tutorial, we’re using <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">arrow</a></p>
                            <p><a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">functions</a>, <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">classes</a>, <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">let</a>, and <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">const</a> statements. You can use the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Babel REPL</a> to check what ES6</p>
                            <p>code compiles to.</p>
                        </div>
                    </div>
                </div>
                <hr className="mx-10"/>
                <div className="pl-10"> {/** Setup for the Tutorial */}
                    <div>
                        <div className="font-bold text-3xl my-8">
                            <h1>Setup for the Tutorial</h1>
                        </div>
                        <div className="mb-10">
                            <p>There are two ways to complete this tutorial: you can either write the code in your browser, or</p>
                            <p>you can set up a local development environment on your computer.</p>
                        </div>    
                    </div>
                    <div>{/** Option 1: Write Code in the Browser */}
                        <div className="mb-5 font-bold text-2xl">
                            <h1>Setup Option 1: Write Code in the Browser</h1>
                        </div>
                        <div>
                            <p>This is the quickest way to get started!</p>
                        </div>
                        <div className="my-8">
                            <p>First, open this <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black font-bold">Starter Code</a> in a new tab. The new tab should display an empty tic-tac-toe</p>
                            <p>game board and React code. We will be editing the React code in this tutorial.</p>
                        </div>
                        <div className="mb-10">
                            <p>You can now skip the second setup option, and go to the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Overview</a> section to get an overview</p>
                            <p>of React.</p>
                        </div>
                    </div>
                    <div> {/** Option 2: Local Development Environment */}
                        <div>
                            <h1 className="font-bold text-2xl mb-5">Setup Option 2: Local Development Environment</h1>
                            <p className="mb-5">This is completely optional and not required for this tutorial!</p>
                            <p className="mb-8 font-bold">Optional: Instructions for following along locally using your preferred text editor</p>
                        </div>
                    </div>
                    <div> {/** Help, I'm Stuck! */}
                        <div className="font-bold text-2xl mb-4">
                            <p>Help, I’m Stuck!</p>
                        </div>
                        <div>
                            <p>If you get stuck, check out the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">community support resources</a>. In particular, <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Reactiflux Chat</a> is a</p>
                            <p>great way to get help quickly. If you don’t receive an answer, or if you remain stuck, please file</p>
                            <p>an issue, and we’ll help you out.</p>
                        </div>
                    </div>
                </div>
                <hr className="my-10 mx-10" />
                <div> {/** Overview */}
                    <div className="pl-10">
                        <h1 className="font-bold text-3xl mb-6">Overview</h1>
                        <p className="mb-10">Now that you’re set up, let’s get an overview of React!</p>
                    </div>
                    <div>{/** What Is React? */}
                        <div className="font-bold text-2xl pb-5 pl-10">
                            <p>What Is React?</p>
                        </div>
                        <div className="mb-7 pl-10">
                            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets</p>
                            <p>you compose complex UIs from small and isolated pieces of code called “components”.</p>
                        </div>
                        <div className="mb-5 pl-10">
                            <p>React has a few different kinds of components, but we’ll start with <span className="bg-[#FFF7D0]">React.Component</span></p>
                            <p>subclasses:</p>
                        </div>
                        <div>
                            <img src={code1} alt="" />  
                        </div>
                        <div className="pl-10 mt-7">
                            <p>We’ll get to the funny XML-like tags soon. We use components to tell React what we want to</p>
                            <p>see on the screen. When our data changes, React will efficiently update and re-render our</p>
                            <p>components.</p>
                        </div>
                        <div className="pl-10 my-8">
                            <p>Here, ShoppingList is a <strong>React component class</strong>, or <strong>React component type</strong>. A component</p>
                            <p>takes in parameters, called <span className="bg-[#FFF7D0]">props</span> (short for “properties”), and returns a hierarchy of views to</p>
                            <p>display via the <span className="bg-[#FFF7D0]">render</span> method.</p>
                        </div>
                        <div className="pl-10 mb-7">
                            <p>The <span className="bg-[#FFF7D0]">render</span> method returns a description of what you want to see on the screen. React takes</p>
                            <p>the description and displays the result. In particular, <span className="bg-[#FFF7D0]">render</span> returns a <strong>React element</strong>, which is</p>
                            <p>a lightweight description of what to render. Most React developers use a special syntax called</p>
                            <p>“JSX” which makes these structures easier to write. The <code className="bg-[#FFF7D0]">{"<div />"}</code> syntax is transformed at build</p>
                            <p>time to <span className="bg-[#FFF7D0]">React.createElement('div')</span>. The example above is equivalent to:</p>
                        </div>
                        <div>
                            <img src={code2} alt="" />
                        </div>
                        <div className="pl-10 pt-5">
                            <p> <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">See full expanded version.</a></p>
                        </div>
                        <div className="pl-10 py-7">
                            <p>If you’re curious, <code className="bg-[#FFF7D0]">{"createElement()"}</code> is described in more detail in the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">API reference</a>, but we</p>
                            <p>won’t be using it in this tutorial. Instead, we will keep using JSX.</p>
                        </div>
                        <div className="pl-10 pb-7">
                            <p>JSX comes with the full power of JavaScript. You can put any JavaScript expressions within</p>
                            <p>braces inside JSX. Each React element is a JavaScript object that you can store in a variable or</p>
                            <p>pass around in your program.</p>
                        </div>
                        <div className="pl-10">
                            <p>The <code className="bg-[#FFF7D0]">{"ShoppingList"}</code> component above only renders built-in DOM components like <code className="bg-[#FFF7D0]">{"<div />"}</code></p>
                            <p>and <code className="bg-[#FFF7D0]">{"<li />"}</code>. But you can compose and render custom React components too. For example, we</p>
                            <p>can now refer to the whole shopping list by writing <code className="bg-[#FFF7D0]">{"<ShoppingList />"}</code>. Each React component</p>
                            <p>is encapsulated and can operate independently; this allows you to build complex UIs from</p>
                            <p>simple components.</p>
                        </div>
                    </div>

                    <div> {/** Inspecting the Starter Code */}
                        <div className="pl-10 font-bold text-2xl mt-10 mb-5">
                            <h1>Inspecting the Starter Code</h1>
                        </div>
                        <div className="pl-10">
                            <p>If you’re going to work on the tutorial <strong>in your browser,</strong> open this code in a new tab: <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black font-bold">Starter Code</a>.</p>
                            <p>If you’re going to work on the tutorial <strong>locally</strong>, instead open <code className="bg-[#FFF7D0]">{"src/index.js"}</code> in your</p>
                            <p>project folder (you have already touched this file during the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">setup)</a>.</p>
                        </div>
                        <div className="pl-10 my-8">
                            <p>This Starter Code is the base of what we’re building. We’ve provided the CSS styling so that you</p>
                            <p>only need to focus on learning React and programming the tic-tac-toe game.</p>
                        </div>
                        <p className="pl-10">By inspecting the code, you’ll notice that we have three React components:</p>
                        <div className="pl-10 py-5">
                            <ul className="list-disc space-y-2 pl-5">
                                <li>Square</li>
                                <li>Board</li>
                                <li>Game</li>
                            </ul>
                        </div>
                        <div className="pl-10 mb-8">
                            <p>The Square component renders a single <code className="bg-[#FFF7D0]">{"<button>"}</code> and the Board renders 9 squares. The Game</p>
                            <p>component renders a board with placeholder values which we’ll modify later. There are</p>
                            <p>currently no interactive components.</p>
                        </div>
                    </div>

                    <div> {/** Passing Data Through Props */}
                        <p className="font-bold text-2xl pl-10 pb-5">Passing Data Through Props</p>
                        <div className="pl-10">
                            <p>To get our feet wet, let’s try passing some data from our Board component to our Square</p>
                            <p>component.</p>
                        </div>
                        <div className="pl-10 py-10">
                            <p>We strongly recommend typing code by hand as you’re working through the tutorial and not</p>
                            <p>using copy/paste. This will help you develop muscle memory and a stronger understanding.</p>
                        </div>
                        <p className="pl-10 pb-5">In Board’s <span className="bg-[#FFF7D0]">renderSquare</span> method, change the code to pass a prop called <span className="bg-[#FFF7D0]">value</span> to the Square:</p>
                        <div>
                            <img src={code3} alt="" />
                        </div>
                        <div className="py-5 pl-10">
                            <p>Change Square’s <code className="bg-[#FFF7D0]">{"render"}</code> method to show that value by replacing <code className="bg-[#FFF7D0]">{"{/* TODO */}"}</code> with</p>
                            <p><code className="bg-[#FFF7D0]">{"{this.props.value}:"}</code></p>
                        </div>
                        <div className="mb-10">
                            <img src={code4} alt="" />
                        </div>
                        <div>
                            <p className="pl-10 pb-5">Before:</p>
                            <img src={tictac1} alt="" className="pl-60 h-[250px]" />
                            <p className="pl-10 py-10">After: You should see a number in each square in the rendered output.</p>
                            <img src={tictac2} alt="" className="pl-60 h-[250px]" />
                        </div>
                        <div className="pl-10 pt-10 pb-8">
                            <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black font-bold">
                            View the full code at this point
                            </a>    
                        </div>
                        <div className="pl-10 pb-10">
                            <p>Congratulations! You’ve just “passed a prop” from a parent Board component to a child Square</p>
                            <p>component. Passing props is how information flows in React apps, from parents to children.</p>
                        </div>
                    </div>

                    <div> {/** Making an Interactive Component */}
                        <h1 className="font-bold pl-10 text-2xl">Making an Interactive Component</h1>
                        <div className="pl-10 py-6">
                            <p>Let’s fill the Square component with an “X” when we click it. First, change the button tag that is</p>
                            <p>returned from the Square component’s <code className="bg-[#FFF7D0]">{"render()"}</code> function to this:</p>
                        </div>
                        <div className="pb-7">
                            <img src={code5} alt="" />
                        </div>
                        <p className="pb-5 pl-10">If you click on a Square now, you should see ‘click’ in your browser’s devtools console.</p>
                        <div className="bg-[#FFF7D0] pl-8 pr-4 border-l-8 border-l-[#FFE564]">
                            <p className="pt-5 font-bold">Note</p>
                            <p>To save typing and avoid the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">confusing behavior of this</a>, we will use the <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">arrow function syntax</a></p>
                            <p>for event handlers here and further below:</p>
                            <img className="py-5" src={code6} alt="" />
                            <p>Notice how with <code className=" bg-yellow-200">{"onClick={() => console.log('click')}"}</code>, we’re passing a function as the</p>
                            <p><code className="bg-yellow-200">{"onClick"}</code> prop. React will only call this function after a click. Forgetting <code className="bg-yellow-200">{"() =>"}</code> and writing</p>
                            <p><code className="bg-yellow-200">{"onClick={console.log('click')}"}</code> is a common mistake, and would fire every time the</p>
                            <p className="pb-5">component re-renders.</p>
                        </div>
                        <div className="pt-7 pb-8 pl-10">
                            <p>As a next step, we want the Square component to “remember” that it got clicked, and fill it with</p>
                            <p>an “X” mark. To “remember” things, components use <strong>state</strong>.</p>
                        </div>
                        <div className="pl-10">
                            <p>React components can have state by setting <code className="bg-[#FFF7D0]">{"this.state"}</code> in their constructors. <code className="bg-[#FFF7D0]">{"this.state"}</code></p>
                            <p>should be considered as private to a React component that it’s defined in. Let’s store the</p>
                            <p>current value of the Square in <code className="bg-[#FFF7D0]">{"this.state"}</code>, and change it when the Square is clicked.</p>
                            <p className="mt-8 mb-5">First, we’ll add a constructor to the class to initialize the state:</p>
                        </div>
                        <div>
                            <img src={code7} alt="" />
                        </div>
                        <div className="bg-[#FFF7D0] pt-5 pb-5 pl-8 border-l-8 border-l-[#FFE564] mt-7">
                            <p className="font-bold">Note</p>
                            <p>In <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">JavaScript classes</a>, you need to always call super when defining the constructor of a</p>
                            <p>subclass. All React component classes that have a constructor should start with a</p>
                            <p>super(props) call.</p>
                        </div>
                        <div className="pl-10 my-7">
                            <p>Now we’ll change the Square’s render method to display the current state’s value when</p>
                            <p>clicked:</p>
                        </div>
                        <div className="pl-10">
                            <ul className="list-disc pl-5 space-y-2 mb-7">
                                <li>Replace this.props.value with this.state.value inside the <code>{"<button>"}</code> tag.</li>
                                <li>Replace the <code>{"onClick={...}"}</code> event handler with <code>{"onClick={() => this.setState({value: 'X'})}"}</code>.</li>
                                <li>Put the className and onClick props on separate lines for better readability.</li>
                            </ul>
                            <div className="mb-5">
                                <p>After these changes, the <code>{"<button>"}</code> tag that is returned by the Square’s render method looks</p>
                                <p>like this:</p>
                            </div>
                            <div>
                                <img src="" alt="/" />
                            </div>
                            <div className="mt-5">
                                <p>By calling <code className="bg-[#FFF7D0]">{"this.setState"}</code> from an <code className="bg-[#FFF7D0]">{"onClick"}</code> handler in the Square’s <code className="bg-[#FFF7D0]">{"render"}</code> method, we tell</p>
                                <p>React to re-render that Square whenever its <code className="bg-[#FFF7D0]">{"<button>"}</code> is clicked. After the update, the Square’s</p>
                                <p> <code className="bg-[#FFF7D0]">{"this.state.value"}</code> will be <code className="bg-[#FFF7D0]">{"'X'"}</code> , so we’ll see the <code className="bg-[#FFF7D0]">{"X"}</code> on the game board. If you click on any</p>
                                <p>Square, an <code className="bg-[#FFF7D0]">{"X"}</code> should show up.</p>
                            </div>
                            <div className="py-5">
                                <p>When you call <code className="bg-[#FFF7D0]">{"setState"}</code> in a component, React automatically updates the child components</p>
                                <p>inside of it too.</p>
                            </div>
                            <p><a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black font-bold">View the full code at this point</a></p>                    
                        </div>
                    </div>

                    <div className="pl-10"> {/** Developer Tools */}
                        <h1 className="mt-10 mb-5 font-bold text-2xl">Developer Tools</h1>
                        <div>
                            <p>The React Devtools extension for <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Chrome</a> and <a href="" className="bg-cyan-50 pb-0.5 hover:bg-cyan-100 border-b-[1px] border-b-gray-400 hover:border-b-black">Firefox</a> lets you inspect a React component tree</p>
                            <p>with your browser’s developer tools.</p>
                            <img className="pl-40" src={devtools} alt="" />
                            <p className="mt-5">The React DevTools let you check the props and the state of your React components.</p>
                        </div>
                        <div className="my-8">
                            <p>After installing React DevTools, you can right-click on any element on the page, click “Inspect”</p>
                            <p>to open the developer tools, and the React tabs (“⚛️ Components” and “⚛️ Profiler”) will</p>
                            <p>appear as the last tabs to the right. Use “⚛️ Components” to inspect the component tree.</p>
                        </div>
                        <h1 className="font-bold mb-5">However, note there are a few extra steps to get it working with CodePen:</h1>
                        <div className="">
                            <ul className=" list-decimal pl-5 space-y-2">
                                <li>Log in or register and confirm your email (required to prevent spam).</li>
                                <li>Click the “Fork” button.</li>
                                <li>Click “Change View” and then choose “Debug mode”.</li>
                                <li>In the new tab that opens, the devtools should now have a React tab.</li>
                            </ul>
                        </div>
                    </div>          
                </div>
                
                <hr className="mb-3 mx-10 mt-10"/>
                
                <div> {/** Completing the Game */}
                    <div>
                        <div className="pl-10 pt-8 mb-8">
                            <h1 className="font-bold text-3xl">Completing the Game</h1>
                        </div>
                        <div className="pl-10">
                            <p>We now have the basic building blocks for our tic-tac-toe game. To have a complete game, we</p>
                            <p>now need to alternate placing “X”s and “O”s on the board, and we need a way to determine a</p>
                            <p>winner.</p>
                        </div>
                    </div>
                    <div>{/** Lifting State Up */}
                        <h1 className="pl-10 font-bold text-2xl mt-10 mb-5">Lifting State Up</h1>
                        <div className="pl-10">
                            <p>Currently, each Square component maintains the game’s state. To check for a winner, we’ll</p>
                            <p>maintain the value of each of the 9 squares in one location.</p>
                        </div>
                        <div>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        <div>
                            <code>{" class Game extends React.Component { "}</code>
                            <pre>
                                <code>
                                
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div> {/** Why Immutability Is Important */}

                    </div>
                    <div> {/** Function Components */}

                    </div>
                    <div> {/** Taking Turns */}
                    
                    </div>
                    <div> {/** Declaring a Winner */}
                    
                    </div>
                </div>
                <hr className="my-10 mx-10"/>
                <div> {/** Adding Time Travel */}
                    <div>

                    </div>
                    <div>{/** Storing a History of Moves */}

                    </div>
                    <div> {/** Lifting State Up, Again */}

                    </div>
                    <div> {/** Showing the Past Moves */}

                    </div>
                    <div> {/** Picking a Key */}
                    
                    </div>
                    <div> {/** Implementing Time Travel */}
                    
                    </div>
                    <div> {/** Wrapping Up */}
                    
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main;