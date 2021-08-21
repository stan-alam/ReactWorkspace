## Mastering queries, mutations, integration with auth, testing and more!

React Query has become the go-to solution for server state management in React apps, and for good reason! This smart, comprehensive solution makes it easy to keep your app up-to-date with data on the server.

In fact, if you are using Redux simply to manage data from the server, React Query can replace Redux in your app. And, for server data management, React Query is much simpler and more powerful than Redux. For example, React Query:

tracks loading and error states for your server queries (no need to manage that yourself!)

makes cached server data available for display while you’re fetching updated data

This course starts with a simple app to learn the basics of React Query:

queries
loading and error states
React Query dev tools
pagination and pre-fetching
mutations
Then we take a detour with the Star Wars API to learn about Infinite Queries (getting more data just as the user has gotten near the end of the current data).

Finally, we work on a large, multi-component app to learn about the above in more detail, plus

centralizing loading and error handling
filtering data
integrating React Query with auth
ways to keep data up to date after mutations, including optimistic updates
testing React Query
Other notable course features:

pre-written projects to use as a backdrop for React Query, so there’s no time wasted writing code not relevant to the course
ample opportunities to practice with periodic “code quizzes” to make sure you’re understanding the concepts
visual models for complicated concepts to help understand all of the moving pieces
the major project is written in TypeScript
supportive instructor who loves engaging with students in Q&A
Come see what the hype is about, and improve your apps with simpler, more powerful server state management!

What you’ll learn

React Query queries, mutations, and cache control
Using React Query for pagination, infinite scroll, and optimistic updates
Integrating React Query with Authentication
Testing React Query
Table of Contents
Creating Queries and Loading Error states
1 Introduction to React Query
2 Introduction to this Course
3 First project Blog-em Ipsum
4 Creating Queries with useQuery
5 Handling Loading and Error States
6 React Query Dev Tools
7 staleTime vs cacheTime

Pagination, Pre-fetching and Mutations
8 Intro to Code Quizzes
9 Code Quiz! Create Query for Blog Comments
10 Query Keys
11 Pagination
12 Pre-fetching Data
13 isLoading vs isFetching
14 Intro to Mutations
15 Delete Post with useMutation
16 Code Quiz! Mutation to Update Post Title
17 Summary React Query Basics

Infinite Queries for Loading Data Just in Time
18 Introduction to Infinite Scroll
19 Code Quiz! Set up Infinite SWAPI for React Query
20 Intro to useInfiniteQuery
21 Infinite Scroll Diagram
22 Write useInfiniteQuery Call
23 InfiniteScroll Component
24 useInfiniteQuery Fetching and Error states
25 Code Quiz! Infinite Species
26 Summary Infinite Scroll

React Query in Larger App Setup, Centralization, Custom Hooks
27 Intro to Lazy Days Spa App
28 Lazy Days Spa App Code Orientation
29 Install and set up React Query
30 Custom Query Hook useTreatments
31 Fallback Data
32 Centralized Fetching indicator with useIsFetching
33 onError Handler for useQuery
34 onError Default for Query Client
35 Code Quiz! Custom Hook for useStaff
36 Summary Larger App Setup, Centralization, Custom Hooks

Query Features I Pre-Fetching and Pagination
37 Adding Data to the Cache
38 Pre-Fetching Treatments (concepts)
39 Pre-Fetching Treatments (syntax)
40 Intro to useAppointments Custom Hook
41 useQuery for useAppointments
42 Query Keys as Dependency Arrays
43 Code Quiz! Pre-Fetch Appointments
44 Summary Query Features I

Query Features II Transforming and Re-Fetching Data
45 Filtering Data with the useQuery select Option
46 Code Quiz! Selector for useStaff
47 Intro to Re-Fetch
48 Update Re-Fetch Options
49 Global Re-Fetch Options
50 Overriding Re-Fetch Defaults and Polling
51 Polling Auto Re-Fetching at an Interval
52 Summary Query Features II

React Query and Authentication
53 Intro to React Query and Authentication
54 Intro to useAuth and useUser
55 Dependent Query in useUser
56 Code Quiz! Dependent Query in useUserAppointments
57 Adding User Data to Query Cache
58 Removing User Appointments Data on Signout
59 Summary React Query and Authentication

Mutations Using React Query to Update Data on the Server
60 Introduction to Mutations and Mutations Global Settings
61 Custom Mutation Hook useReserveAppointments
62 OPTIONAL TypeScript for `mutate` Function
63 Invalidating Query after Mutation
64 Query Key Prefixes
65 Code Quiz! Mutation to Cancel an Appointment
66 Update User and Query Cache with Mutation Response
67 Intro to Optimistic Updates in React Query
69 Making a Query Cancel-able
70 Writing Optimistic Update
71 Summary Mutations

Testing React Query
72 Intro to Testing React Query
73 Testing Setup, including Mock Service Worker
74 Query Client and Provider in Tests
75 Testing Rendered Query Data
76 Code Quiz! Test Rendered Staff Data
77 Testing Query Errors
78 Code Quiz! Staff Query Errors
79 Testing Mutations
80 Code Quiz! Test Cancel Appointment Mutation
81 Intro to Testing Custom Hooks
82 Test Appointments Filter
83 Code Quiz! Test Staff Filter
84 Summary Testing React Query