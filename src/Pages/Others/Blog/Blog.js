import React from 'react';

const Blog = () => {
  return (
    <div className='min-h-screen m-12 space-y-6'>
      <p className='text-center my-16 font-bold text-5xl'>Here is some frequently asked questions <br /> that has been prepared for you.</p>
      <p className='text-3xl font-semibold'>Read these questions carefully as it is important for your career.</p>
      <div className='m-12'>
        <ol className='space-y-6'>
          <li>
            <p className='text-3xl mb-3 font-semibold'>1. What is cors?</p>
            <p className='text-lg'><span className="font-semibold">Answer: </span> The full meaning of cors is Cross-Origin Resource Sharing (CORS). It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
            </p>
          </li>
          <li>
            <p className='text-3xl mb-3 font-semibold'>2 Why are you using firebase? What other options do you have to implement authentication?
            </p>
            <p className='text-lg'>
              <span className="font-semibold">Answer: </span>
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
              There are several options available for implementing authentication in software applications, each with its own advantages and considerations. Here are some common authentication methods:
              Username and Password, OAuth and OpenID Connect, Token-based Authentication, Certificate-based Authentication, Biometric Authentication, Password less Authentication, Tokenization, LDAP and Active Directory, Social Media Authentication, Single Sign-On (SSO).
              The choice of authentication method depends on factors such as the level of security required, user experience, the nature of the application, regulatory requirements, and available technology. In many cases, a combination of these methods might be used to achieve the desired balance of security and usability.

            </p>
          </li>
          <li>
            <p className='text-3xl mb-3 font-semibold'>3. How does the private route work?</p>
            <p className='text-lg'>
              <span className="font-semibold">Answer: </span>
              Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
              <p>Here are some steps how it is done:</p>
              <ol className='my-4 mx-4 space-y-1'>
                <li>
                  <span className='font-semibold'>1.</span> Ensure users are authenticated, usually through tokens or sessions.
                </li>
                <li>
                  <span className='font-semibold'>2.</span>  Define routes using a router library like React Router.
                </li>
                <li>
                  <span className='font-semibold'>3.</span> In private route components, verify user authentication status.
                </li>
                <li>
                  <span className='font-semibold'>4.</span> If authenticated, render protected content; if not, redirect.
                </li>
                <li>
                  <span className='font-semibold'>5.</span> Implement private routes using higher-order components or custom hooks.
                </li>
                <li><span className='font-semibold'>6.</span> Wrap protected components with private route logic.</li>
                <li><span className='font-semibold'>7.</span> Optionally, incorporate roles and permissions for more advanced access control.</li>
                <li><span className='font-semibold'>8.</span> Redirect unauthorized users to login or other appropriate pages.</li>
                <p>
                  In essence, private routes ensure secure access to specific parts of your React application based on user authentication.
                </p>
              </ol>
            </p>
          </li>
          <li>
            <p className='text-3xl mb-3 font-semibold'>4. What is Node? How does Node work?</p>
            <p className='text-lg'>
              <span className="font-semibold">Answer: </span>
              Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language. Node is sometimes referred to as a programming language or software development framework, but neither is true; it is strictly a JavaScript runtime.It lets JavaScript run on servers. It works with an event-driven, single-threaded architecture. Asynchronous programming is key, where operations don't block the main thread. Modules help organize code, and the event-driven structure uses listeners to handle events. npm manages packages, making it easy to share and use code. Common uses include real-time apps, APIs, and servers. Frameworks like Express.js simplify development. In essence, Node.js enables efficient, non-blocking server-side JavaScript execution.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Blog;