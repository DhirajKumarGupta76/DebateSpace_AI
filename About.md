# Project Interview Questions & Simple Answers

This document contains the full set of project-interview questions discussed above, rewritten in simple, easy-to-speak English.

> **Important:** Use only answers that are true for your actual implementation. If an interviewer asks for a detail that you did differently, explain your real implementation.

---

# Part 1 — DebateSpace

## 1. Tell me about your DebateSpace project.

**Answer:**

> “DebateSpace is a full-stack web application that helps users improve their debating and communication skills. Users can have live debates with another person or practice with an AI opponent.
>
> I used React and Tailwind CSS for the frontend, Node.js and Express for the backend, and MongoDB for storing data.
>
> I used Socket.IO for real-time communication and WebRTC for video calls. I also integrated Gemini to generate AI counterarguments and summaries.”

---

## 2. Why did you build this project?

**Answer:**

> “I wanted to build something more than a normal CRUD project. I was interested in real-time communication, WebRTC and AI, so I combined these technologies into a debate platform.”

---

## 3. What was your contribution?

**Answer:**

> “I worked on the full-stack development. I worked with the frontend, backend, database, Socket.IO, WebRTC, Gemini integration and deployment.”

Only say this if it is true for your actual work.

---

# Part 2 — Project Architecture

## 4. Explain the architecture of your project.

**Answer:**

> “The frontend is built with React. It communicates with my Node and Express backend using APIs.
>
> The backend handles authentication, application logic and database operations.
>
> MongoDB stores the application data.
>
> Socket.IO handles real-time events, and WebRTC handles the actual video and audio communication.
>
> Gemini is connected through the backend for the AI features.”

### Simple architecture

```text
React Frontend
      |
      | API
      v
Node + Express
   |     |     |
   |     |     +---- Gemini
   |     |
   |     +---------- Socket.IO
   |
   +-------------- MongoDB

Socket.IO
    |
    v
 WebRTC
    |
    v
User <----> User
```

---

# Part 3 — Technology Questions

## 5. Why did you use React?

**Answer:**

> “I used React because my application has many interactive parts, like debate rooms, timers, participants and video-call states. React makes it easier to manage these changing UI states.”

---

## 6. Why did you use Node.js?

**Answer:**

> “I used Node.js because it works well for APIs and real-time applications. It also allowed me to use JavaScript on both the frontend and backend.”

---

## 7. Why did you use Express?

**Answer:**

> “Express makes it simple to create backend APIs and handle routes and middleware.”

---

## 8. Why did you use MongoDB?

**Answer:**

> “I used MongoDB because my application stores data such as users, debates, history and summaries. MongoDB's document-based structure works well for this type of data.”

---

## 9. Why did you use Socket.IO?

**Answer:**

> “I used Socket.IO because I needed real-time communication. For example, when a user joins or leaves a debate room, the other user should know immediately.”

---

# Part 4 — Socket.IO Questions

## 10. What is Socket.IO?

**Answer:**

> “Socket.IO is a library that allows the client and server to communicate in real time. It is useful when we need instant updates without repeatedly sending normal HTTP requests.”

---

## 11. Why didn't you use normal HTTP?

**Answer:**

> “HTTP mainly follows a request-response model. In my debate application, I need instant communication for things like joining rooms, leaving rooms and signaling. Socket.IO is better suited for that.”

---

## 12. What is a Socket.IO room?

**Answer:**

> “A room is like a private channel. Users who join the same room can receive messages and events related to that room.”

---

## 13. How does a user join a debate room?

**Answer:**

> “The frontend sends the room ID to the server using Socket.IO. The server adds that user's socket to the room and informs the other participants.”

Simple flow:

```text
User
  ↓
Join Room
  ↓
Socket.IO
  ↓
Server
  ↓
Room
```

---

## 14. How do you handle a user leaving?

**Answer:**

> “When the user leaves or disconnects, I notify the other participant so the application can update the room state.”

---

## 15. What happens if the user refreshes the page?

**Answer:**

> “The old socket connection is lost and a new connection is created. The user needs to reconnect and rejoin the room.”

---

# Part 5 — WebRTC Questions

## 16. What is WebRTC?

**Answer:**

> “WebRTC is a browser technology that allows two users to communicate using real-time audio and video.”

---

## 17. Why did you use WebRTC?

**Answer:**

> “I used WebRTC because I wanted users to have real-time video communication during their debates.”

---

## 18. Does WebRTC handle signaling?

**Answer:**

> “No. WebRTC handles the actual audio and video connection, but we need another method to exchange information before the connection is created. I used Socket.IO for that.”

---

## 19. What is signaling?

**Answer:**

> “Signaling is the process of exchanging the information needed to create a WebRTC connection. This includes the offer, answer and ICE candidates.”

---

## 20. What is SDP?

**Answer:**

> “SDP is information that describes the communication session, such as what type of audio or video the user can send or receive.”

---

## 21. What is an SDP offer?

**Answer:**

> “The first user creates an offer that describes their video and audio capabilities and sends it to the other user.”

---

## 22. What is an SDP answer?

**Answer:**

> “The second user receives the offer, creates an answer and sends it back to the first user.”

---

## 23. What are ICE candidates?

**Answer:**

> “ICE candidates are possible network paths that can be used to connect the two users.”

---

## 24. Why are ICE candidates needed?

**Answer:**

> “Users can be behind different networks or routers. ICE helps WebRTC find a working network path between them.”

---

## 25. What is STUN?

**Answer:**

> “STUN helps a device find its public network address when it is behind a router or NAT.”

---

## 26. What is TURN?

**Answer:**

> “TURN is used when two users cannot connect directly. It works as a relay and passes the audio or video between them.”

---

## 27. What happens if a direct WebRTC connection fails?

**Answer:**

> “A TURN server can be used to relay the communication between the two users.”

---

# Part 6 — Complete WebRTC Flow

## 28. Explain the complete WebRTC flow.

**Answer:**

> “First, two users join the same debate room.
>
> One user creates a WebRTC connection and generates an offer.
>
> The offer is sent to the second user through Socket.IO.
>
> The second user creates an answer and sends it back through Socket.IO.
>
> Both users exchange ICE candidates.
>
> WebRTC then finds a working network path and establishes the video and audio connection.”

### Simple flow

```text
User A
  ↓
Create Offer
  ↓
Socket.IO
  ↓
User B
  ↓
Create Answer
  ↓
Socket.IO
  ↓
Exchange ICE Candidates
  ↓
WebRTC Connection
  ↓
Video + Audio
```

---

# Part 7 — Gemini / AI Questions

## 29. How did you integrate Gemini?

**Answer:**

> “I connected Gemini through my backend. The user sends their argument, and the backend sends the relevant debate context to Gemini. Gemini then generates a response or counterargument.”

---

## 30. Why did you call Gemini from the backend?

**Answer:**

> “I called Gemini from the backend because I should not expose the API key in the frontend.”

---

## 31. How does the AI generate contextual responses?

**Answer:**

> “I provide the AI with the current argument and relevant previous conversation. This helps Gemini understand what has already been discussed and generate a relevant counterargument.”

---

## 32. How do you maintain conversation history?

**Answer:**

> “I keep the relevant debate conversation as context and send the necessary previous messages when generating the next AI response.”

If your actual implementation stores history differently, explain your real implementation.

---

## 33. What happens if Gemini stops working?

**Answer:**

> “The backend should handle the error and send a proper response to the frontend instead of crashing the application. We can also use timeouts, limited retries and logging.”

---

## 34. How would you protect the Gemini API key?

**Answer:**

> “I would keep the API key only on the backend and store it in an environment variable. I would never put the secret key directly in the frontend code.”

---

## 35. How would you reduce Gemini API cost?

**Answer:**

> “I would avoid unnecessary requests, limit the amount of conversation history sent to Gemini, use summaries for older context and apply rate limits.”

---

## 36. How would you prevent users from abusing the AI?

**Answer:**

> “I would require authentication, add rate limiting, validate requests and limit how many AI requests a user can make.”

---

# Part 8 — JWT Authentication

## 37. Explain JWT authentication.

**Answer:**

> “When a user logs in, the backend checks their email and password. If they are correct, the server creates a JWT. The client sends this token when accessing protected APIs. The backend verifies the token before allowing access.”

### Simple flow

```text
Login
  ↓
Check Credentials
  ↓
Create JWT
  ↓
Client Stores Token
  ↓
Send Token with Protected Request
  ↓
Server Verifies Token
  ↓
Allow Request
```

---

## 38. What is inside a JWT?

**Answer:**

> “A JWT has three parts: header, payload and signature. The payload can contain information such as the user's ID.”

---

## 39. Is JWT encrypted?

**Answer:**

> “No. JWT is normally signed, not encrypted. Its payload can be decoded, so we should not put sensitive information inside it.”

---

## 40. What is authentication?

**Answer:**

> “Authentication means checking who the user is.”

---

## 41. What is authorization?

**Answer:**

> “Authorization means checking what the user is allowed to do.”

---

## 42. Authentication vs authorization?

**Answer:**

> “Authentication asks: Who are you?
>
> Authorization asks: What are you allowed to do?”

---

## 43. Why do you hash passwords?

**Answer:**

> “We should never store passwords as plain text. Hashing protects passwords if the database is compromised.”

---

## 44. Why did you use bcrypt?

**Answer:**

> “bcrypt is commonly used for password hashing and makes it harder for attackers to recover passwords.”

---

# Part 9 — MongoDB Questions

## 45. What is a MongoDB collection?

**Answer:**

> “A collection is a group of MongoDB documents. It is similar to a table in a relational database.”

---

## 46. What is a MongoDB document?

**Answer:**

> “A document is a record that stores data in a JSON-like format.”

---

## 47. What is Mongoose?

**Answer:**

> “Mongoose is a library that helps Node.js applications work with MongoDB. It allows us to create schemas, models and perform database operations.”

---

## 48. How would you make MongoDB queries faster?

**Answer:**

> “I would create indexes on fields that are frequently searched, avoid unnecessary queries and only fetch the data I need.”

---

## 49. What is a database index?

**Answer:**

> “An index helps the database find data faster. The disadvantage is that indexes require extra storage and can make some writes slightly more expensive.”

---

# Part 10 — REST API Questions

## 50. What is REST?

**Answer:**

> “REST is a common way of designing APIs around resources and HTTP methods.”

---

## 51. What HTTP methods do you know?

**Answer:**

```text
GET     → Get data
POST    → Create data
PUT     → Replace/update data
PATCH   → Partially update data
DELETE  → Delete data
```

---

## 52. What is the difference between PUT and PATCH?

**Answer:**

> “PUT is generally used to replace or update the complete resource, while PATCH is used for a partial update.”

---

## 53. What is HTTP 200?

**Answer:**

> “200 means the request was successful.”

---

## 54. What is HTTP 201?

**Answer:**

> “201 means a new resource was successfully created.”

---

## 55. What is HTTP 400?

**Answer:**

> “400 means the request from the client is invalid.”

---

## 56. What is HTTP 401?

**Answer:**

> “401 usually means the user is not properly authenticated.”

---

## 57. What is HTTP 403?

**Answer:**

> “403 means the user is authenticated but does not have permission to perform the action.”

---

## 58. What is HTTP 404?

**Answer:**

> “404 means the requested resource was not found.”

---

## 59. What is HTTP 500?

**Answer:**

> “500 means there was an error on the server.”

---

# Part 11 — Deployment Questions

## 60. Where did you deploy the frontend?

**Answer:**

> “I deployed the frontend using Vercel.”

---

## 61. Where did you deploy the backend?

**Answer:**

> “I deployed the backend using Render.”

---

## 62. Where did you host the database?

**Answer:**

> “I used MongoDB Atlas.”

---

## 63. How does the frontend communicate with the deployed backend?

**Answer:**

> “The frontend uses the deployed backend URL instead of localhost for API requests and real-time communication.”

---

## 64. Where do you store secret keys?

**Answer:**

> “I store secret keys in environment variables and don't hardcode them in the source code.”

---

## 65. What happens if your backend goes down?

**Answer:**

> “The frontend should show an appropriate error instead of crashing. In a production system, I would also use monitoring and automatic restart or scaling.”

---

# Part 12 — Debate Room Questions

## 66. How do you synchronize two participants?

**Answer:**

> “I use Socket.IO events to tell participants when someone joins or leaves. I also use Socket.IO to exchange the WebRTC signaling information.”

---

## 67. What happens if two users join at the same time?

**Answer:**

> “The server needs to handle their room events consistently. The client should also be able to handle signaling messages even if they arrive in a different order.”

---

## 68. What happens if Socket.IO disconnects?

**Answer:**

> “The application should detect the disconnect and try to reconnect. After reconnecting, the user may need to rejoin the debate room and restore the required state.”

---

# Part 13 — Scalability

## 69. What happens if 10,000 users use your application?

**Answer:**

> “My current project is designed for a smaller scale. For a much larger number of users, I would need multiple backend servers, load balancing, shared Socket.IO state, database optimization, rate limiting and better monitoring.”

---

## 70. How would you scale Socket.IO?

**Answer:**

> “I could run multiple backend servers behind a load balancer and use a shared system such as Redis so that Socket.IO events can work across different servers.”

---

## 71. How would you support group video calls?

**Answer:**

> “For group video calls, I would consider using an SFU. It is more scalable than making every user connect directly to every other user.”

---

## 72. What is an SFU?

**Answer:**

> “An SFU is a server that receives video streams from participants and forwards the required streams to other participants. It is commonly used for scalable group video calls.”

---

# Part 14 — Security

## 73. How do you secure your APIs?

**Answer:**

> “I would use authentication, authorization, password hashing, input validation, environment variables, rate limiting, HTTPS and proper CORS configuration.”

---

## 74. Can a normal user access an admin API?

**Answer:**

> “No. The backend should check the user's role before allowing an admin operation.”

---

## 75. What if a user manually calls the admin API?

**Answer:**

> “The backend must still check authorization. Hiding the admin page is not enough because a user can directly send an HTTP request.”

---

# Part 15 — Difficult Project Questions

## 76. What was the hardest part of DebateSpace?

**Answer:**

> “The hardest part was real-time video communication. I had to understand WebRTC and also use Socket.IO for signaling between the two users.”

---

## 77. What was the biggest bug you faced?

**Answer:**

Use a real bug from your project.

A good structure is:

> “The problem was ____. I found that the reason was ____. I debugged it by ____. Then I changed ____. After that, the problem was solved.”

Don't invent a bug if the interviewer may ask you to show the code.

---

## 78. What would you improve in DebateSpace?

**Answer:**

> “I would improve scalability, error handling and monitoring. I would also improve the WebRTC infrastructure for difficult networks and use an SFU if I wanted to support larger group debates.”

---

## 79. What is the biggest weakness of your current architecture?

**Answer:**

> “The current architecture is suitable for the project's current scale. If the number of users becomes much larger, I would need better Socket.IO scaling, WebRTC infrastructure, database optimization and monitoring.”

---

## 80. If you rebuilt the project, what would you change?

**Answer:**

> “I would keep the basic architecture but improve error handling, monitoring, rate limiting, background processing and scalability.”

---

# Part 16 — GroceryStore

## 81. Explain your GroceryStore project.

**Answer:**

> “GroceryStore is a full-stack e-commerce application. Users can browse products, add products to a cart, checkout and place orders.
>
> I used the MERN stack, Stripe for payments and Nodemailer for email notifications. I also created an admin dashboard for product management and order tracking.”

---

## 82. Why did you build GroceryStore?

**Answer:**

> “I wanted to build a complete e-commerce application where I could learn about product management, carts, orders, payments, authentication and admin functionality.”

---

## 83. Explain the checkout flow.

**Answer:**

> “The user adds products to the cart and goes to checkout. The frontend sends the required information to the backend. The backend creates the payment process with Stripe. After payment is confirmed, the order is created or updated and the user can receive an email notification.”

### Simple flow

```text
Products
   ↓
Cart
   ↓
Checkout
   ↓
Backend
   ↓
Stripe
   ↓
Payment
   ↓
Order
   ↓
Email
```

---

# Part 17 — Stripe Questions

## 84. Why did you use Stripe?

**Answer:**

> “I used Stripe because it provides payment APIs and handles sensitive payment information securely, so I don't have to directly handle card details.”

---

## 85. What is a Stripe webhook?

**Answer:**

> “A webhook is a message sent from Stripe to my backend when an important payment event happens.”

---

## 86. Why are webhooks useful?

**Answer:**

> “They allow the backend to know about payment events directly from Stripe instead of trusting only the frontend.”

---

## 87. What happens if the user closes the browser after payment?

**Answer:**

> “The backend can still receive the payment event through a webhook and update the order.”

---

## 88. Why shouldn't we trust the frontend for payment confirmation?

**Answer:**

> “The frontend is controlled by the user and cannot be fully trusted. The backend should verify the payment with Stripe.”

---

# Part 18 — Nodemailer

## 89. Why did you use Nodemailer?

**Answer:**

> “I used Nodemailer to send emails to users when their order status changes.”

---

## 90. What happens if email sending fails?

**Answer:**

> “The application should handle the error properly. In a larger application, I would use a background job or message queue so email sending does not block the main request.”

---

## 91. How would you improve email handling at large scale?

**Answer:**

> “I would put email tasks into a queue and process them using a background worker.”

### Simple flow

```text
Order API
   ↓
Queue
   ↓
Email Worker
   ↓
Send Email
```

---

# Part 19 — Admin Dashboard

## 92. How do you protect admin features?

**Answer:**

> “I use authentication to identify the user and authorization to check whether the user has admin permission.”

---

## 93. What is the difference between hiding an admin button and securing an admin API?

**Answer:**

> “Hiding the button only changes the UI. It does not provide security. The backend must check the user's permission before performing the admin operation.”

---

# Part 20 — Ownership Questions

## 94. Did you build the project yourself?

**Answer:**

> “Answer honestly. Clearly explain which parts you built yourself and which parts you learned from documentation, tutorials or other resources.”

---

## 95. Which feature did you personally implement?

**Answer:**

Be ready with 2–3 features you can explain deeply.

For example:

> “I personally worked on the real-time debate room and WebRTC communication.”

Only use features you actually implemented.

---

## 96. Which part took the most time?

**Answer:**

> “The real-time video communication took the most time because I had to understand WebRTC signaling, connection states and how Socket.IO communicates between the users.”

Only use this if it reflects your real experience.

---

## 97. Show me the code for this feature.

**Answer:**

> “Be ready to open the actual code and explain what each important part is doing.”

The best preparation is knowing your own code.

---

## 98. Why did you implement it this way?

**Answer:**

> “I chose this approach because it matched the requirement I had. I also considered other approaches, but this one was simpler or more suitable for my project's current scale.”

---

## 99. What alternative approach could you have used?

**Answer:**

> “There are usually multiple ways to solve a problem. I would explain the alternative and then compare the advantages and disadvantages of both approaches.”

---

# Part 21 — "Why Not X?" Questions

## 100. Why MongoDB instead of MySQL?

**Answer:**

> “MongoDB was convenient for my document-based data such as users, debates and history. MySQL could also be used, especially if I needed many complex relationships and SQL queries.”

---

## 101. Why Socket.IO instead of plain WebSocket?

**Answer:**

> “Socket.IO provides useful features such as rooms, events and reconnection, which made it convenient for my application.”

---

## 102. Why WebRTC instead of a video API?

**Answer:**

> “I wanted to implement real-time peer-to-peer communication and understand how WebRTC works.”

---

## 103. Why Gemini instead of another AI model?

**Answer:**

> “I chose Gemini because it provided the AI capabilities and API access I needed for the debate features.”

---

## 104. Why Node.js instead of Java/Spring?

**Answer:**

> “Node.js allowed me to use JavaScript across the frontend and backend. It was also convenient for building APIs and real-time features.”

---

## 105. Why REST instead of GraphQL?

**Answer:**

> “REST was enough for the requirements of my project and kept the API design simple.”

---

## 106. Why JWT instead of sessions?

**Answer:**

> “JWT provides a token-based authentication approach that works well with APIs. Sessions are also a valid choice, but JWT fit the approach I was using.”

---

# Part 22 — Final Boss Questions

## 107. Draw your complete architecture.

Be able to draw and explain:

```text
             React
               |
          REST / Socket.IO
               |
          Node + Express
          /      |       \
         /       |        \
    MongoDB    Gemini    Socket.IO
                           |
                           v
                         WebRTC
                           |
                           v
                       User ↔ User
```

---

## 108. Explain one request from frontend to database.

**Answer:**

> “The React frontend sends an API request. Express receives the request and runs the required middleware. Then the controller uses the Mongoose model to communicate with MongoDB. MongoDB sends the result back, and the backend sends the response to React.”

### Flow

```text
React
 ↓
API Request
 ↓
Express Route
 ↓
Middleware
 ↓
Controller
 ↓
Mongoose
 ↓
MongoDB
 ↓
Response
 ↓
React
```

---

## 109. Explain one WebRTC call from beginning to end.

**Answer:**

> “First, both users join the same room. One user creates an offer and sends it through Socket.IO. The second user creates an answer and sends it back. Both users exchange ICE candidates. After WebRTC finds a working connection, the users can communicate using audio and video.”

---

## 110. What happens if Socket.IO disconnects?

**Answer:**

> “The application should detect the disconnect and try to reconnect. After reconnecting, the user may need to join the room again and restore the required state.”

---

## 111. What happens if Gemini is unavailable?

**Answer:**

> “The backend should catch the error and send a proper response to the frontend. The application should continue working for features that don't depend on Gemini.”

---

## 112. What happens if MongoDB is unavailable?

**Answer:**

> “Database operations will fail, so the backend should handle the error and return an appropriate response instead of crashing.”

---

## 113. How would you scale DebateSpace to 100,000 users?

**Answer:**

> “I would use multiple backend servers behind a load balancer, use Redis for shared real-time state, optimize MongoDB queries, add caching and rate limiting, and improve WebRTC infrastructure.”

---

## 114. How would you support group video debates?

**Answer:**

> “I would use an SFU because it is more efficient for group video calls than having every user connect directly to every other user.”

---

## 115. How would you prevent AI abuse?

**Answer:**

> “I would use authentication, rate limiting, request validation and limits on the number of AI requests a user can make.”

---

## 116. How would you reduce Gemini costs?

**Answer:**

> “I would reduce unnecessary requests, send only useful conversation history, summarize older messages and apply rate limits.”

---

## 117. How would you monitor the application?

**Answer:**

> “I would add logs, error tracking, API performance monitoring, database monitoring and alerts for important failures.”

---

## 118. What is the biggest weakness of your current architecture?

**Answer:**

> “The current architecture is suitable for the project's current scale. For a much larger number of users, I would need better scaling for Socket.IO, WebRTC, the database and monitoring.”

---

## 119. If you had to rebuild the project, what would you change?

**Answer:**

> “I would keep the main idea and architecture, but improve error handling, monitoring, rate limiting, background processing and scalability.”

---

# Part 23 — Most Important 20 Questions

If your interview is very close, prepare these first:

1. **Tell me about DebateSpace.**
2. **Why did you build it?**
3. **Explain the architecture.**
4. **Why did you choose MERN?**
5. **Why Socket.IO?**
6. **What is a Socket.IO room?**
7. **What is WebRTC?**
8. **Why does WebRTC need signaling?**
9. **What is SDP?**
10. **What are ICE candidates?**
11. **What are STUN and TURN?**
12. **Explain the complete WebRTC flow.**
13. **How did you integrate Gemini?**
14. **How did you maintain conversation context?**
15. **Explain JWT authentication.**
16. **Why MongoDB?**
17. **What was your biggest technical challenge?**
18. **How did you deploy the project?**
19. **How would you scale DebateSpace?**
20. **What would you improve?**

---

# Part 24 — Easy Formula for Answering Any Cross-Question

When you don't know how to structure your answer, use:

## Problem → Choice → How → Result

Example:

**Interviewer:** Why did you use Socket.IO?

> **Problem:** “I needed real-time communication between users.”
>
> **Choice:** “So I chose Socket.IO.”
>
> **How:** “I used Socket.IO rooms and events to communicate between users and also used it for WebRTC signaling.”
>
> **Result:** “This allowed users to join the same debate room and communicate in real time.”

This makes your answer clear and natural.

---

# Part 25 — Final Revision Checklist

## DebateSpace

- [ ] Explain the project in 30 seconds.
- [ ] Explain the project in 2 minutes.
- [ ] Explain the architecture.
- [ ] Explain why you chose each technology.
- [ ] Explain Socket.IO.
- [ ] Explain Socket.IO rooms.
- [ ] Explain WebRTC.
- [ ] Explain signaling.
- [ ] Explain SDP.
- [ ] Explain ICE candidates.
- [ ] Explain STUN.
- [ ] Explain TURN.
- [ ] Explain the complete video-call flow.
- [ ] Explain Gemini integration.
- [ ] Explain conversation history.
- [ ] Explain JWT.
- [ ] Explain MongoDB.
- [ ] Explain REST APIs.
- [ ] Explain deployment.
- [ ] Explain your biggest challenge.
- [ ] Explain one real bug.
- [ ] Explain how you would scale the project.
- [ ] Explain how you would secure the project.
- [ ] Explain what you would improve.

## GroceryStore

- [ ] Explain the project.
- [ ] Explain the cart flow.
- [ ] Explain checkout.
- [ ] Explain Stripe.
- [ ] Explain payment verification.
- [ ] Explain webhooks.
- [ ] Explain Nodemailer.
- [ ] Explain order management.
- [ ] Explain admin authorization.
- [ ] Explain how you would improve the project.

---

# Final Interview Tip

The interviewer usually doesn't care only about whether you know the definition.

They want to know whether you understand **your own project**.

So for every major technology, prepare these six questions:

1. **What is it?**
2. **Why did I use it?**
3. **How did I use it?**
4. **What problem did it solve?**
5. **What happens if it fails?**
6. **How would I improve it at a larger scale?**

If you can answer those six questions for WebRTC, Socket.IO, Gemini, MongoDB, JWT and Stripe, you will be well prepared for most project cross-questioning.
