## React.node microservices
Full course

Build, deploy, and scale an E-Commerce app using Microservices built with Node, React, Docker and Kubernetes

Event-Based Architecture? Covered! Server side rendering with React? Yep. Scalable, production-ready code? Its here!

Microservices are the number one solution for building and scaling out apps that are intended to grow. Just one little issue: there are few resources online that delve into the most complex and nasty issues around them! I built this course to fix that. This course tackles every major issues around microservices head on. From challenges with data replication to confusing unordered event streams, every major challenge of building microservices is covered.

Beyond focusing on the basics of microservices, this course is a perfect introduction to the world of full-stack development. You will work all the way from the frontend, assembling a React app using Hooks, to the backend, including database design and deployment strategies. Every step along the way is covered in tremendous detail, with ample diagrams to ensure every step is crystal clear.

Many other resources show only the easiest, simplest apps written with microservices. This course does the opposite: we focus on the most challenging aspects of microservices, challenges that you will likely encounter every single day. You will see these difficulties first hand, then solve them with easy-to-understand strategies.

How This Course Works

This course doesn’t focus on using an off-the-shelf microservices framework. Many exist, but they hide the inner workings and challenges of microservices away from you. Instead, we will be using a minimal number of libraries, and write as much custom code as possible. This will expose you to challenging problems and clever solutions when handling subjects like async events!

What Technology You’ll Use

Because we are building a full stack application, we will use a variety of technologies. On the frontend, we’ll use React and Next JS to present content to users. Each service is created using Node and Express. Data for each service is held in either a Mongo database or Redis. The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster. Finally, almost all of the code in this course is written with Typescript.

This is a scary list of technologies! Not familiar with some of these? No problem! The course is built assuming that you only know the basics of Javascript and Express. No other knowledge is needed – you will learn everything you need to know.

What You’ll Be Able to Do

By the time you complete this course, you will be able to:

Architect a multi-service application
Determine whether your app is a good fit for a microservices approach
Understand and solve the challenges in async, event-based communication between services
Use Docker and Kubernetes to deploy a multi-service app to any cloud provider
Organize and enhance the reusability of code in large projects
What You’ll Learn

An absolute incredible number of topics are covered in this course. Here is a partial list of what you’ll do:

Practice patterns to create scalable microservices for a variety of app domains
Build a Server-Side-Rendered React app using Hooks and Next JS
Write a custom implementation of an event bus
Optionally, run a development environment through a cloud provider
Guarantee consistently structured responses from your different API’s
See best practices in communication between different services
Configure and scale your services using Kubernetes Deployments
Document and enforce structure constraints on events shared across microservices
Limit access to your APIs using JWT-based authentication
And much more!
This is the course I wish I had when I was learning microservices. A course that focuses on the hardest parts, gives clear explanations, and discusses the pros and cons of different design options. Sign up today and join me in mastering microservices!

Table of Contents
Fundamental Ideas Around Microservices
1 How to Get Help
2 What Is a Microservice
3 Data in Microservices
4 Big Problems with Data
5 Sync Communication Between Services
6 Event-Based Communication
7 A Crazy Way of Storing Data
8 Pros and Cons of Async Communication
9 Course Resources
10 Join Our Community!

A Mini-Microservices App
11 App Overview
12 Project Setup
13 Posts Service Creation
14 Testing the Posts Service
15 Implementing a Comments Service
16 Quick Comments Test
17 React Project Setup
18 Building Post Submission
19 Handling CORS Errors
20 Fetching and Rendering Posts
21 Creating Comments
22 Displaying Comments
23 Request Minimization Strategies
24 An Async Solution
25 Common Questions Around Async Events
26 Event Bus Overview
27 A Basic Event Bus Implementation
28 Emitting Events
29 Emitting Comment Creation Events
30 Receiving Events
31 Creating the Data Query Service
32 Parsing Incoming Events
33 Using the Query Service
34 Adding a Simple Feature
35 Issues with Comment Filtering
36 A Second Approach
37 How to Handle Resource Updates
38 Creating the Moderation Service
39 Adding Comment Moderation
40 Handling Moderation
41 Updating Comment Content
42 A Quick Test
43 Rendering Comments by Status
44 Dealing with Missing Events
45 Implementing Event Sync
46 Event Syncing in Action
47 Completed React App
48 Important Note about Node v15 and Unhandled Promise Rejections
49 Note on the React App
50 Reminder about Node v15 and Error Catching
51 Required Node v15+ Update for Query Service
52 Suggestion Regarding a Default Export Warning

Running Services with Docker
53 Deployment Issues
54 Why Docker
55 Why Kubernetes
56 Don’t Know Docker Watch This
57 Dockerizing the Posts Service
58 Review Some Basic Commands
59 Dockering Other Services
60 Note About Docker Build Output and Buildkit

Orchestrating Collections of Services with Kubernetes
61 Installing Kubernetes
62 A Kubernetes Tour
63 Important Kubernetes Terminology
64 Notes on Config Files
65 Creating a Pod
66 Understanding a Pod Spec
67 Common Kubectl Commands
68 A Time-Saving Alias
69 Introducing Deployments
70 Creating a Deployment
71 Common Commands Around Deployments
72 Updating Deployments
73 Preferred Method for Updating Deployments
74 Networking With Services
75 Creating a NodePort Service
76 Accessing NodePort Services
77 Setting Up Cluster IP Services
78 Building a Deployment for the Event Bus
79 Adding ClusterIP Services
80 How to Communicate Between Services
81 Updating Service Addresses
82 Verifying Communication
83 Adding Query, Moderation and Comments
84 Testing Communication
85 Load Balancer Services
86 Load Balancers and Ingress
87 Installing Ingress-Nginx
88 Writing Ingress Config Files
89 Hosts File Tweak
90 Deploying the React App
91 Unique Route Paths
92 Final Route Config
93 Introducing Skaffold
94 Skaffold Setup
95 First Time Skaffold Startup
96 A Few Notes on Skaffold
97 ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors
98 Important Note About Port 80
99 IMPORTANT Note for Minikube and MicroK8s Users
100 Important Note to Add Environment Variable
101 Ingress v1 API Required Update
102 Update on Ingress Nginx Mandatory Commands

Architecture of Multi-Service Apps
103 Big Ticket Items
104 App Overview
105 Resource Types
106 Service Types
107 Events and Architecture Design
108 Auth Service Setup
109 Auth K8s Setup
110 Adding Skaffold
111 Ingress-Nginx Setup
112 Hosts File and Security Warning
113 Ingress v1 API Required Update
114 Note on Code Reloading
115 Note on Typescript

Leveraging a Cloud Environment for Development
116 Note on Remote Development
117 Remote Dev with Skaffold
118 Google Cloud Initial Setup
119 Kubernetes Cluster Creation
120 Kubectl Contexts
121 Initializing the GCloud SDK
122 Installing the GCloud Context
123 Updating the Skaffold Config
124 More Skaffold Updates
125 Creating a Load Balancer
126 Final Config and Test
127 Free Google Cloud Credits

Response Normalization Strategies
128 Creating Route Handlers
129 Scaffolding Routes
130 Adding Validation
131 Handling Validation Errors
132 Surprising Complexity Around Errors
133 Other Sources of Errors
134 Solution for Error Handling
135 Building an Error Handling Middleware
136 Communicating More Info to the Error Handler
137 Encoding More Information In an Error
138 Subclassing for Custom Errors
139 Determining Error Type
140 Converting Errors to Responses
141 Moving Logic Into Errors
142 Verifying Our Custom Errors
143 Final Error Related Code
144 How to Define New Custom Errors
145 Uh Oh… Async Error Handling
146 Postman HTTPS Issues

Database Management and Modeling
147 Creating Databases in Kubernetes
148 Connecting to MongoDB
149 Understanding the Signup Flow
150 Getting TypeScript and Mongoose to Cooperate
151 Creating the User Model
152 Type Checking User Properties
153 Adding Static Properties to a Model
154 Defining Extra Document Properties
155 What’s That Angle Bracket For
156 User Creation
157 Proper Error Handling
158 Reminder on Password Hashing
159 Adding Password Hashing
160 Comparing Hashed Password
161 Mongoose Pre-Save Hooks
162 Note on Password Hashing

Authentication Strategies and Options
163 Fundamental Authentication Strategies
164 Huge Issues with Authentication Strategies
165 So Which Option
166 Solving Issues with Option #2
167 Reminder on Cookies vs JWT’s
168 Microservices Auth Requirements
169 Issues with JWT’s and Server Side Rendering
170 Cookies and Encryption
171 Adding Session Support
172 Generating a JWT
173 JWT Signing Keys
174 Securely Storing Secrets with Kubernetes
175 Creating and Accessing Secrets
176 Accessing Env Variables in a Pod
177 Common Response Properties
178 Formatting JSON Properties
179 The Signin Flow
180 Common Request Validation Middleware
181 Sign In Logic
182 Quick Sign In Test
183 Current User Handler
184 Returning the Current User
185 Signing Out
186 Creating a Current User Middleware
187 Augmenting Type Definitions
188 Requiring Auth for Route Access

Testing Isolated Microservices
189 Scope of Testing
190 Testing Goals
191 Testing Architecture
192 Index to App Refactor
193 A Few Dependencies
194 Test Environment Setup
195 Our First Test
196 An Important Note
197 Testing Invalid Input
198 Requiring Unique Emails
199 Changing Node Env During Tests
200 Tests Around Sign In Functionality
201 Testing Sign Out
202 Issues with Cookies During Testing
203 Easy Auth Solution
204 Auth Helper Function
205 Testing Non-Authed Requests
206 globalThis has no index signature TS Error

Integrating a Server-Side-Rendered React App
207 Starting the React App
208 Reminder on Server Side Rendering
209 Basics of Next JS
210 Building a Next Image
211 Running Next in Kubernetes
212 Note on File Change Detection
213 Adding Global CSS
214 Adding a Sign Up Form
215 Handling Email and Password Inputs
216 Successful Account Signup
217 Handling Validation Errors
218 The useRequest Hook
219 Using the useRequest Hook
220 An onSuccess Callback
221 Overview on Server Side Rendering
222 Fetching Data During SSR
223 Why the Error
224 Two Possible Solutions
225 Cross Namespace Service Communication
226 When is GetInitialProps Called
227 On the Server or the Browser
228 Specifying the Host
229 Passing Through the Cookies
230 A Reusable API Client
231 Content on the Landing Page
232 The Sign In Form
233 A Reusable Header
234 Moving GetInitialProps
235 Issues with Custom App GetInitialProps
236 Handling Multiple GetInitialProps
237 Passing Props Through
238 Building the Header
239 Conditionally Showing Links
240 Signing Out
241 A note about ECONNREFUSED errors
242 Ingress-Nginx Namespace and Service – Important Update
243 React App Catchup
244 Suggestion Regarding a Default Export Warning

Code Sharing and Reuse Between Services
245 Shared Logic Between Services
246 Options for Code Sharing
247 NPM Organizations
248 Publishing NPM Modules
249 Project Setup
250 An Easy Publish Command
251 Relocating Shared Code
252 Updating Import Statements
253 Updating the Common Module
254 Typo in package.json files Field – Do Not Skip

Create-Read-Update-Destroy Server Setup
255 Ticketing Service Overview
256 Project Setup
257 Running the Ticket Service
258 Mongo Connection URI
259 Quick Auth Update
260 Test-First Approach
261 Creating the Router
262 Adding Auth Protection
263 Faking Authentication During Tests
264 Building a Session
265 Testing Request Validation
266 Validating Title and Price
267 Reminder on Mongoose with TypeScript
268 Defining the Ticket Model
269 Creation via Route Handler
270 Testing Show Routes
271 Unexpected Failure!
272 What’s that Error!
273 Better Error Logging
274 Complete Index Route Implementation
275 Ticket Updating
276 Handling Updates
277 Permission Checking
278 Final Update Changes
279 Manual Testing
280 globalThis has no index signature TS Error

NATS Streaming Server – An Event Bus Implementation
281 What Now
282 Three Important Items
283 Creating a NATS Streaming Deployment
284 Big Notes on NATS Streaming
285 Building a NATS Test Project
286 Port-Forwarding with Kubectl
287 Publishing Events
288 Listening For Data
289 Accessing Event Data
290 Client ID Generation
291 Queue Groups
292 Manual Ack Mode
293 Client Health Checks
294 Graceful Client Shutdown
295 Core Concurrency Issues
296 Common Questions
297 [Optional] More Possible Concurrency Solutions
298 Solving Concurrency Issues
299 Concurrency Control with the Tickets App
300 Event Redelivery
301 Durable Subscriptions
302 Small Required Command Change

Connecting to NATS in a Node JS World
303 Reusable NATS Listeners
304 The Listener Abstract Class
305 Extending the Listener
306 Quick Refactor
307 Leveraging TypeScript for Listener Validation
308 Subjects Enum
309 Custom Event Interface
310 Enforcing Listener Subjects
311 Enforcing Data Types
312 Where Does this Get Used
313 Custom Publisher
314 Using the Custom Publisher
315 Awaiting Event Publication
316 Common Event Definitions Summary
317 Updating the Common Module
318 Restarting NATS
319 Quick Note ‘readonly’ in Typescript

Managing a NATS Client
320 Publishing Ticket Creation
321 More on Publishing
322 NATS Client Singleton
323 Remember Mongoose
324 Singleton Implementation
325 Accessing the NATS Client
326 Graceful Shutdown
327 Successful Listen!
328 Ticket Update Publishing
329 Failed Event Publishing
330 Handling Publish Failures
331 Fixing a Few Tests
332 Redirecting Imports
333 Providing a Mock Implementation
334 Test-Suite Wide Mocks
335 Ensuring Mock Invocations
336 NATS Env Variables
337 TS Error – Did you forget to include ‘void’ in your type argument

Cross-Service Data Replication In Action
338 The Orders Service
339 Scaffolding the Orders Service
340 A Touch More Setup
341 Ingress Routing Rules
342 Scaffolding a Few Route Handlers
343 Subtle Service Coupling
344 Associating Orders and Tickets
345 Order Model Setup
346 The Need for an Enum
347 Creating an Order Status Enum
348 More on Mongoose Refs
349 Defining the Ticket Model
350 Order Creation Logic
351 Finding Reserved Tickets
352 Convenience Document Methods
353 Order Expiration Times
354 Test Suite Setup
355 Asserting Tickets Exist
356 Asserting Reserved Tickets
357 Testing the Success Case
358 Fetching a User’s Orders
359 A Slightly Complicated Test
360 Fetching Individual Orders
361 Does Fetching Work
362 Cancelling an Order
363 Can We Cancel
364 globalThis has no index signature TS Error
365 Type ‘Documentany, any’ is not assignable Error

Understanding Event Flow
366 Orders Service Events
367 Creating the Events
368 Implementing the Publishers
369 Publishing the Order Creation
370 Publishing Order Cancellation
371 Testing Event Publishing

Listening for Events and Handling Concurrency Issues
372 Time for Listeners!
373 Reminder on Listeners
374 Blueprint for Listeners
375 A Few More Reminders
376 Simple onMessage Implementation
377 ID Adjustment
378 Ticket Updated Listener Implementation
379 Initializing the Listeners
380 A Quick Manual Test
381 Clear Concurrency Issues
382 Reminder on Versioning Records
383 Optimistic Concurrency Control
384 Mongoose Update-If-Current
385 Implementing OCC with Mongoose
386 Testing OCC
387 One More Test
388 Who Updates Versions
389 Including Versions in Events
390 Updating Tickets Event Definitions
391 Applying a Version Query
392 Did it Work
393 Abstracted Query Method
394 [Optional] Versioning Without Update-If-Current
395 Testing Listeners
396 A Complete Listener Test
397 Testing the Ack Call
398 Testing the Ticket Updated Listener
399 Success Case Testing
400 Out-Of-Order Events
401 The Next Few Videos
402 Fixing a Few Tests
403 Listeners in the Tickets Service
404 Building the Listener
405 Strategies for Locking a Ticket
406 Reserving a Ticket
407 Setup for Testing Reservation
408 Test Implementation
409 Missing Update Event
410 Private vs Protected Properties
411 Publishing While Listening
412 Mock Function Arguments
413 Order Cancelled Listener
414 A Lightning-Quick Test
415 Don’t Forget to Listen!
416 Rejecting Edits of Reserved Tickets
417 Property ‘version’ is missing TS Errors After Running Skaffold
418 Test functions cannot both take a ‘done’ callback and return something Error

Worker Services
419 The Expiration Service
420 Expiration Options
421 Initial Setup
422 A Touch of Kubernetes Setup
423 File Sync Setup
424 Listener Creation
425 What’s Bull All About
426 Creating a Queue
427 Queueing a Job on Event Arrival
428 Testing Job Processing
429 Delaying Job Processing
430 Defining the Expiration Complete Event
431 Publishing an Event on Job Processing
432 Handling an Expiration Event
433 Emitting the Order Cancelled Event
434 Testing the Expiration Complete Listener
435 A Touch More Testing
436 Listening for Expiration
437 Skaffold errors – Expiration Image Can’t be Pulled

Handling Payments
438 The Payments Service
439 Initial Setup
440 Replicated Fields
441 Another Order Model!
442 Update-If-Current
443 Replicating Orders
444 Testing Order Creation
445 Marking an Order as Cancelled
446 Cancelled Testing
447 Starting the Listeners
448 Payments Flow with Stripe
449 Implementing the Create Charge Handler
450 Validating Order Payment
451 Testing Order Validation Before Payment
452 Testing Same-User Validation
453 Stripe Setup
454 Creating a Stripe Secret
455 Creating a Charge with Stripe
456 Manual Testing of Payments
457 Automated Payment Testing
458 Mocked Stripe Client
459 A More Realistic Test Setup
460 Realistic Test Implementation
461 Tying an Order and Charge Together
462 Testing Payment Creation
463 Publishing a Payment Created Event
464 More on Publishing
465 Marking an Order as Complete
466 Don’t Cancel Completed Orders!
467 globalThis has no index signature TS Error
468 Important Info About the Next Lecture – Don’t Skip

Back to the Client
469 A Few More Pages
470 Reminder on Data Fetching with Next
471 Two Quick Fixes
472 Scaffolding a Form
473 Sanitizing Price Input
474 Ticket Creation
475 Listing All Tickets
476 Linking to Wildcard Routes
477 Creating an Order
478 Programmatic Navigation to Wildcard Routes
479 The Expiration Timer
480 Displaying the Expiration
481 Showing a Stripe Payment Form
482 Configuring Stripe
483 Test Credit Card Numbers
484 Paying for an Order
485 Filtering Reserved Tickets
486 Header Links
487 Rendering a List of Orders

CICD
488 Development Workflow
489 Git Repository Approaches
490 Creating a GitHub Action
491 Adding a CI Test Script
492 Running Tests on PR Creation
493 Output of Failing Tests
494 Running Tests in Parallel
495 Verifying a Test Run
496 Selective Test Execution
497 Deployment Options
498 Creating a Hosted Cluster
499 Reminder on Kubernetes Context
500 Reminder on Swapping Contexts
501 The Deployment Plan
502 Building an Image in an Action
503 Testing the Image Build
504 Restarting the Deployment
505 Applying Kubernetes Manifests
506 Prod vs Dev Manifest Files
507 Manual Secret Creation
508 Don’t Forget Ingress-Nginx!
509 Testing Automated Deployment
510 Additional Deploy Files
511 A Successful Deploy!
512 Buying a Domain Name
513 Configuring the Domain Name
514 I Really Hope This Works
515 Next Steps
516 Three Important Changes Needed to Deploy – Do Not Skip!

[Appendix A] – Basics of Docker
517 Why Use Docker
518 What is Docker
519 Docker for Mac Windows
520 Installing Docker on macOS
521 Installing Docker for Windows Professional
522 More Windows Professional Setup
523 One Last Piece of Windows Professional Setup
524 Using the Docker Client
525 But Really… What’s a Container
526 How’s Docker Running on Your Computer
527 Docker Run in Detail
528 Overriding Default Commands
529 Listing Running Containers
530 Container Lifecycle
531 Restarting Stopped Containers
532 Removing Stopped Containers
533 Retrieving Output Logs
534 Stopping Containers
535 Multi-Command Containers
536 Executing Commands in Running Containers
537 The Purpose of the ‘it’ Flag
538 Getting a Command Prompt in a Container
539 Starting with a Shell
540 Container Isolation
541 Creating Docker Images
542 Building a Dockerfile
543 Dockerfile Teardown
544 What’s a Base Image
545 The Build Process in Detail
546 A Brief Recap
547 Rebuilds with Cache
548 Tagging an Image
549 Manual Image Generation with Docker Commit
550 Project Outline
551 Node Server Setup
552 A Few Planned Errors
553 Base Image Issues
554 A Few Missing Files
555 Copying Build Files
556 Container Port Forwarding
557 Specifying a Working Directory
558 Unnecessary Rebuilds
559 Minimizing Cache Busting and Rebuilds
560 Buildkit for Docker Desktop v2.4.0+ and Edge
561 Installing Docker for Windows Home users
562 Installing Docker on Linux
563 Quick Note for Windows Users
564 Reminder for Windows Home Docker Toolbox Students
565 Required WORKDIR update – Could not detect node name, idealTree errors

[Appendix B] – Basics of Typescript
566 How to Get Help
567 TypeScript Overview
568 Environment Setup
569 A First App
570 Executing Typescript Code
571 One Quick Change
572 Catching Errors with TypeScript
573 Catching More Errors!
574 Do Not Skip – Course Overview
575 Types
576 More on Types
577 Examples of Types
578 Where Do We Use Types
579 Type Annotations and Inference
580 Annotations With Variables
581 Object Literal Annotations
582 Annotations Around Functions
583 Understanding Inference
584 The Any Type
585 Fixing the Any Type
586 Delayed Initialization
587 When Inference Doesn’t Work
588 More on Annotations Around Functions
589 Inference Around Functions
590 Annotations for Anonymous Functions
591 Void and Never
592 Destructuring with Annotations
593 Annotations Around Objects
594 Arrays in TypeScript
595 Why Typed Arrays
596 Multiple Typees in Arrays
597 When to Use Typed Arrays
598 Tuples in TypeScript
599 Tuples in Action
600 Why Tuples
601 Interfaces
602 Long Type Annotations
603 Fixing Annotations With Interfaces
604 Syntax Around Interfaces
605 Functions in Interfaces
606 Code Reuse with Interfaces
607 General Plan with Interfaces
608 Classes
609 Basic Inheritance
610 Class Method Modifiers
611 Fields in Classes
612 Fields with Inheritance
613 Where to Use Classes
614 App Overview
615 Bundling with Parcel
616 Project Structure
617 Generating Random Data
618 Type Definition Files
619 Using Type Definition Files
620 Export Statements in TypeScript
621 Defining a Company
622 Adding Google Maps Support
623 Google Maps Integration with TypeScript
624 Exploring Type Definition Files
625 Hiding Functionality
626 Why Use Private Modifiers Here’s Why
627 Adding Markers
628 Duplicate Code
629 One Possible Solution
630 Restricting Access with Interfaces
631 Implicit Type Checks
632 Showing Popup Windows
633 Updating Interface Definitions
634 Optional Implements Clauses
635 App Wrapup
636 Important Note About Google Maps Key
637 Required Update for New @types Library

Bonus!
638 Bonus!