8 Section Overview
9 Why Do Front-End Frameworks Exist
10 React vs. Vanilla JavaScript
11 What is React
12 Setting Up Our Development Environment
13 Pure React
14 A Quick Look at React’s Official Documentation
15 Setting Up a New React Project The Options
16 Setting Up a Project With Create-React-App

[Optional] Review of Essential JavaScript for React
17 Section Overview
18 Destructuring Objects and Arrays
19 RestSpread Operator
20 Template Literals
21 Ternaries Instead of ifelse Statements
22 Arrow Functions
23 Short-Circuiting And Logical Operators &&, ,
24 Optional Chaining
25 The Array map Method
26 The Array filter Method
27 The Array reduce Method
28 The Array sort Method
29 Working With Immutable Arrays
30 Asynchronous JavaScript Promises
31 Asynchronous JavaScript AsyncAwait

Working With Components, Props, and JSX
32 Section Overview
33 Rendering the Root Component and Strict Mode
34 Before We Start Coding Debugging
35 Components as Building Blocks
36 Creating And Reusing a Component
37 What is JSX
38 Creating More Components
39 JavaScript Logic in Components
40 Separation of Concerns
41 Styling React Applications
42 Passing and Receiving Props
43 Props, Immutability, and One-Way Data Flow
44 CHALLENGE #1 Profile Card (v1)
45 The Rules of JSX
46 Rendering Lists
47 Conditional Rendering With &&
48 Conditional Rendering With Ternaries
49 Conditional Rendering With Multiple Returns
50 Extracting JSX Into a New Component
51 Destructuring Props
52 React Fragments
53 Setting Classes and Text Conditionally
54 Section Summary
55 CHALLENGE #2 Profile Card (v2)

State, Events, and Forms Interactive Components
56 Section Overview
57 Let’s Build a Steps Component
58 Handling Events the React Way
59 What is State in React
60 Creating a State Variable With useState
61 Don’t Set State Manually!
62 The Mechanics of State
63 Adding Another Piece of State
64 React Developer Tools
65 Updating State Based on Current State
66 More Thoughts About State + State Guidelines
67 A Vanilla JavaScript Implementation
68 CHALLENGE #1 Date Counter (v1)
69 Starting a New Project The Far Away Travel List
70 Building the Layout
71 Rendering the Items List
72 Building a Form and Handling Submissions
73 Controlled Elements
74 State vs. Props
75 EXERCISE #1 Flashcards
76 CHALLENGE #2 Date Counter (v2)

Thinking In React State Management
77 Section Overview
78 What is Thinking in React
79 Fundamentals of State Management
80 Thinking About State and Lifting State Up
81 Reviewing Lifting Up State
82 Deleting an Item More Child-to-Parent Communication!
83 Updating an Item Complex Immutable Data Operation
84 Derived State
85 Calculating Statistics as Derived State
86 Sorting Items
87 Clearing the List
88 Moving Components Into Separate Files
89 EXERCISE #1 Accordion Component (v1)
90 The children Prop Making a Reusable Button
91 More Reusability With the children Prop
92 EXERCISE #2 Accordion Component (v2)
93 CHALLENGE #1 Tip Calculator

[Optional] Practice Project Eat-‘N-Split
94 Section Overview
95 Project Setup
96 Building the Static App List of Friends
97 Building the Static App Forms
98 Displaying the New Friend Form
99 Adding a New Friend
100 Selecting a Friend
101 Creating Controlled Elements
102 Splitting a Bill

PART 2 INTERMEDIATE REACT [2 PROJECTS]
103 Introduction to Part 2
104 Useful Resources for Part 2

Thinking in React Components, Composition, and Reusability
105 Section Overview
106 Setting Up the usePopcorn Project
107 How to Split a UI Into Components
108 Splitting Components in Practice
109 Component Categories
110 Prop Drilling
111 Component Composition
112 Fixing Prop Drilling With Composition (And Building a Layout)
113 Using Composition to Make a Reusable Box
114 Passing Elements as Props (Alternative to children)
115 Building a Reusable Star Rating Component
116 Creating the Stars
117 Handling Hover Events
118 Props as a Component API
119 Improving Reusability With Props
120 PropTypes
121 CHALLENGE #1 Text Expander Component

How React Works Behind the Scenes
122 Section Overview
123 Project Setup and Walkthrough
124 Components, Instances, and Elements
125 Instances and Elements in Practice
126 How Rendering Works Overview
127 How Rendering Works The Render Phase
128 How Rendering Works The Commit Phase
129 How Diffing Works
130 Diffing Rules in Practice
131 The Key Prop
132 Resetting State With the Key Prop
133 Using the Key Prop to Fix Our Eat-‘N-Split App
134 Rules for Render Logic Pure Components
135 State Update Batching
136 State Update Batching in Practice
137 How Events Work in React
138 Libraries vs. Frameworks & The React Ecosystem
139 Section Summary Practical Takeaways

Effects and Data Fetching
140 Section Overview
141 The Component Lifecycle
142 How NOT to Fetch Data in React
143 useEffect to the Rescue
144 A First Look at Effects
145 Using an async Function
146 Adding a Loading State
147 Handling Errors
148 The useEffect Dependency Array
149 Synchronizing Queries With Movie Data
150 Selecting a Movie
151 Loading Movie Details
152 Adding a Watched Movie
153 Adding a New Effect Changing Page Title
154 The useEffect Cleanup Function
155 Cleaning Up the Title
156 Cleaning Up Data Fetching
157 One More Effect Listening to a Keypress
158 CHALLENGE #1 Currency Converter

Custom Hooks, Refs, and More State
159 Section Overview
160 React Hooks and Their Rules
161 The Rules of Hooks in Practice
162 More Details of useState
163 Initializing State With a Callback (Lazy Initial State)
164 useState Summary
165 How NOT to Select DOM Elements in React
166 Introducing Another Hook useRef
167 Refs to Select DOM Elements
168 Refs to Persist Data Between Renders
169 What are Custom Hooks When to Create One
170 Creating our First Custom Hook useMovies
171 Creating useLocalStorageState
172 Creating useKey
173 CHALLENGE #1 useGeolocate

[Optional] React Before Hooks Class-Based React
174 Section Overview
175 Our First Class Component
176 Working With Event Handlers
177 Class Components vs. Function Components
178 Starting the Classy Weather App
179 Fetching Weather Data
180 Displaying the Weather
181 Removing Boilerplate Code With Class Fields
182 Child to Parent Communication
183 Lifecycle Methods

PART 3 ADVANCED REACT + REDUX [4 PROJECTS]
184 Introduction to Part 3
185 Useful Resources for Part 3

The Advanced useReducer Hook
186 Section Overview
187 Yet Another Hook useReducer
188 Managing Related Pieces of State
189 Managing State With useReducer
190 The React Quiz App
191 Loading Questions from a Fake API
192 Handling Loading, Error, and Ready Status
193 Starting a New Quiz
194 Displaying Questions
195 Handling New Answers
196 Moving to the Next Question
197 Displaying Progress
198 Finishing a Quiz
199 Restarting a Quiz
200 Setting Up a Timer With useEffect
201 Section Summary useState vs. useReducer
202 CHALLENGE #1 Creating a Bank Account With useReducer

React Router Building Single-Page Applications (SPA)
203 Section Overview
204 Creating Our First App With Vite WorldWise
205 Routing and Single-Page Applications (SPAs)
206 Implementing Main Pages and Routes
207 Linking Between Routes With Link and NavLink
208 Styling Options For React Applications
209 Using CSS Modules
210 Building the Pages
211 Building the App Layout
212 Nested Routes and Index Route
213 Implementing the Cities List
214 Implementing the Countries List
215 Storing State in the URL
216 Dynamic Routes With URL Parameters
217 Reading and Setting a Query String
218 Programmatic Navigation with useNavigate
219 Programmatic Navigation with Navigate

Advanced State Management The Context API
220 Section Overview
221 CHALLENGE #1 Understand The Atomic Blog App
222 What is the Context API
223 Creating and Providing a Context
224 Consuming the Context
225 Advanced Pattern A Custom Provider and Hook
226 Thinking In React Advanced State Management
227 Back to WorldWise Creating a CitiesContext
228 Consuming the CitiesContext
229 Finishing the City View
230 Including a Map With the Leaflet Library
231 Displaying City Markers on Map
232 Interacting With the Map
233 Setting Map Position With Geolocation
234 Fetching City Data in the Form
235 Creating a New City
236 Deleting a City
237 Advanced State Management System Context + useReducer
238 Adding Fake Authentication Setting Up Context
239 Adding Fake Authentication Implementing Login
240 Adding Fake Authentication Protecting a Route
241 CHALLENGE #2 Refactoring React Quiz to Context API

Performance Optimization and Advanced useEffect
242 Section Overview
243 Performance Optimization and Wasted Renders
244 The Profiler Developer Tool
245 A Surprising Optimization Trick With children
246 Understanding memo
247 memo in Practice
248 Understanding useMemo and useCallback
249 useMemo in Practice
250 useCallback in Practice
251 Optimizing Context Re-Renders
252 Back to The WorldWise App
253 Optimizing Bundle Size With Code Splitting
254 Don’t Optimize Prematurely!
255 useEffect Rules and Best Practices
256 CHALLENGE #1 Fix Performance Issues in Workout Timer
257 Setting State Based on Other State Updates
258 Using Helper Functions In Effects
259 Closures in Effects

Redux and Modern Redux Toolkit (With Thunks)
260 Section Overview
261 Introduction to Redux
262 Creating a Reducer Bank Account
263 Creating a Redux Store
264 Working With Action Creators
265 Adding More State Customer
266 Professional Redux File Structure State Slices
267 Back to React! Connecting our Redux App With React
268 Dispatching Actions from Our React App
269 The Legacy Way of Connecting Components to Redux
270 Redux Middleware and Thunks
271 Making an API Call With Redux Thunks
272 The Redux DevTools
273 What is Redux Toolkit (RTK)
274 Creating the Store With RTK
275 Creating the Account Slice
276 Back to Thunks
277 Creating the Customer Slice
278 Redux vs. Context API

PART 4 PROFESSIONAL REACT DEVELOPMENT [2 PROJECTS]
279 Introduction to Part 4
280 Useful Resources for Part 4

React Router With Data Loading (v6.4+)
281 Section Overview
282 Setting Up a New Project Fast React Pizza Co
283 Application Planning
284 Setting Up a Professional File Structure
285 A New Way Of Implementing Routes
286 Building the App Layout
287 Fetching Data With React Router Loaders Pizza Menu
288 Displaying a Loading Indicator
289 Handling Errors With Error Elements
290 Fetching Orders
291 Writing Data With React Router Actions
292 Error Handling in Form Actions

[Optional] Tailwind CSS Crash Course Styling the App
293 Section Overview
294 What is Tailwind CSS
295 Setting Up Tailwind CSS
296 Working With Color
297 Styling Text
298 The Box Model Spacing, Borders, and Display
299 Responsive Design
300 Using Flexbox
301 Using CSS Grid
302 Styling Buttons Element States and Transitions
303 Styling Form Elements
304 Reusing Styles With @apply
305 Reusing Styles With React Components
306 Absolute Positioning, z-index, and More
307 Configuring Tailwind Custom Font Family
308 Styling the Menu
309 Styling the Cart
310 Styling the Order Form
311 Styling the Order Overview

Adding Redux and Advanced React Router
312 Section Overview
313 Modeling the User State With Redux Toolkit
314 Reading and Updating the User State
315 Modeling the Cart State
316 Adding Menu Items to the Cart
317 Building the Cart Overview With Redux Selectors
318 Building the Cart Page
319 Deleting Cart Items
320 Updating Cart Quantities
321 Using the Cart for New Orders
322 Redux Thunks With createAsyncThunk
323 Integrating Geolocation
324 Fetching Data Without Navigation useFetcher
325 Updating Data Without Navigation

Setting Up Our Biggest Project + Styled Components
326 Section Overview
327 Application Planning
328 Setting Up the Project The Wild Oasis
329 Introduction to Styled Components
330 Global Styles With Styled Components
331 Styled Component Props and the css Function
332 Building More Reusable Styled Components
333 Setting Up Pages and Routes
334 Building the App Layout
335 Building the Sidebar and Main Navigation

Supabase Crash Course Building a Back-End!
336 Section Overview
337 What is Supabase
338 Creating a New Database
339 Modeling Application State
340 Creating Tables
341 Relationships Between Tables
342 Adding Security Policies (RLS)
343 Connecting Supabase With Our React App
344 Setting Up Storage Buckets

React Query Managing Remote State
345 Section Overview
346 What is React Query
347 Setting Up React Query
348 Make Sure to Use React Query v4!
349 Fetching Cabin Data
350 Mutations Deleting a Cabin
351 Displaying Toasts (Notifications)
352 Introducing Another Library React Hook Form
353 Creating a New Cabin
354 Handling Form Errors
355 Uploading Images to Supabase
356 Editing a Cabin
357 Abstracting React Query Into Custom Hooks
358 Duplicating Cabins
359 Fetching Applications Settings
360 Updating Application Settings

Advanced React Patterns
361 Section Overview
362 An Overview of Reusability in React
363 Setting Up an Example
364 The Render Props Pattern
365 A Look at Higher-Order Components (HOC)
366 The Compound Component Pattern
367 Building a Modal Window Using a React Portal
368 Converting the Modal to a Compound Component
369 Detecting a Click Outside the Modal
370 Confirming Cabin Deletions
371 Building a Reusable Table
372 Applying the Render Props Pattern
373 Building a Reusable Context Menu

[Optional] Implementing More Features Authentication, Dark Mode, Dashboard, etc
374 Section Overview
375 Client-Side Filtering Filtering Cabins
376 Client-Side Sorting Sorting Cabins
377 Building the Bookings Table
378 Uploading Sample Data
379 API-Side Filtering Filtering Bookings
380 API-Side Sorting Sorting Bookings
381 Building a Reusable Pagination Component
382 API-Side Pagination Paginating Bookings
383 Prefetching With React Query
384 Building the Single Booking Page
385 Checking In a Booking
386 Adding Optional Breakfast
387 Checking Out a Booking (+ Fixing a Small Bug)
388 Deleting a Booking
389 Authentication User Login With Supabase
390 Authorization Protecting Routes
391 User Logout
392 Fixing an Important Bug
393 Building the Sign Up Form
394 User Sign Up
395 Authorization on Supabase Protecting Database (RLS)
396 Building The App Header
397 Updating User Data and Password
398 Implementing Dark Mode With CSS Variables
399 Building the Dashboard Layout
400 Computing Recent Bookings and Stays
401 Displaying Statistics
402 Displaying a Line Chart With the Recharts Library
403 Displaying a Pie Chart
404 Displaying Stays for Current Day
405 Error Boundaries
406 Final Touches + Fixing Bugs

Deployment With Netlify and Vercel
407 Section Overview
408 Deploying to Netlify
409 Setting Up a Git and GitHub Repository
410 Deploying to Vercel

PART 5 FULL-STACK REACT WITH NEXT.JS [1 PROJECT]
411 Introduction to Part 5
412 Useful Resources for Part 5

Overview of Next.js With the App Router
413 Section Overview
414 Download Fresh Starter Files + Slides!
415 An Overview of Server-Side Rendering (SSR)
416 Experiment Manual SSR With React DOM + Node.js
417 The Missing Piece Hydration
418 Implementing Hydration
419 What is Next.js
420 Setting Up a Next.js Project
421 Frequent Next.js Updates + Documentation
422 Defining Routes and Pages
423 Navigating Between Pages
424 Creating a Layout
425 What are React Server Components (RSC – Part 1)
426 Fetching Data in a Page
427 Adding Interactivity With Client Components
428 Displaying a Loading Indicator
429 How RSC Works Behind the Scenes (RSC – Part 2)
430 RSC vs. SSR How are They Related (RSC – Part 3)

Starting to Build the Wild Oasis Website
431 Section Overview
432 Project Planning The Wild Oasis Customer Website
433 Project Organization
434 Styling With Tailwind CSS
435 Adding Page Metadata and Favicon
436 Loading and Optimizing Fonts
437 Improving the Navigation and Root Layout
438 Optimizing Images With Next.js Image Component
439 Building the Home Page
440 Building the About Page With Responsive Images
441 Adding Nested Routes and Pages
442 Adding a Nested Layout

Data Fetching, Caching, and Rendering
443 Section Overview
444 Setting Up Supabase
445 Fetching and Displaying Cabin List
446 Streaming Route Segments With loading.js File
447 What is React Suspense
448 Streaming UI With Suspense Cabin List
449 Dynamic Route Segments Building the Cabin Page
450 Generating Dynamic Metadata
451 Error Handling Setting Up Error Boundaries
452 Error Handling Not Found Errors
453 Different Types of SSR Static vs. Dynamic Rendering
454 Analyzing Rendering in Our App
455 Making Dynamic Pages Static With generateStaticParams
456 Static Site Generation (SSG)
457 Partial Pre-Rendering
458 How Next.js Caches Data
459 Experimenting With Caching and ISR
460 CHALLENGE #1 Fetching the Number of Cabins

Client and Server Interactions
461 Section Overview
462 Blurring the Boundary Between Server and Client (RSC – Part 4)
463 Client Components in Server Components
464 Highlighting Current Side Navigation Link
465 Sharing State Between Client and Server The URL
466 Advanced Server Components in Client Components
467 Data Fetching Strategies for the Reservation Section
468 Using the Context API for State Management
469 Creating an API Endpoint With Route Handlers

Authentication With NextAuth (Auth.js)
470 Section Overview
471 Setting Up NextAuth
472 Getting the User Session
473 What is Middleware in Next.js
474 Protecting Routes With NextAuth Middleware
475 Building a Custom Sign In Page
476 Building a Custom Sign Out Button
477 Creating a New Guest on First Sign In

Mutations With Server Actions + Modern React Hooks
478 Section Overview
479 What are Server Actions
480 Updating the Profile Using a Server Action
481 Manual Cache Revalidation
482 Displaying a Loading Indicator The useFormStatus Hook
483 Building the Guest’s Reservations Page
484 Deleting a Reservation
485 Another Loading Indicator The useTransition Hook
486 CHALLENGE #1 Updating a Reservation
487 Removing Reservations Immediately The useOptimistic Hook
488 Back to the Cabin Page Finishing the Date Selector
489 Creating a New Reservation

Deployment With Vercel
490 Section Overview
491 Setting Up the GitHub Repository
492 Deploying to Vercel
493 Updating Environment Variables and OAuth Credentials

[OPTIONAL] Legacy Next.js The Pages Router
494 Section Overview
495 Setting Up Another Project
496 Routes, Pages, and Navigation
497 Dynamic Routes
498 Creating a Layout With a Custom _App
499 Creating Pages
500 Defining Page Title and Favicon
501 Fetching Data With getStaticProps (SSG)
502 Fetching Data With getServerSideProps (SSR)
503 API Routes
504 Handling Form Submissions

The End!
505 Where to Go from Here