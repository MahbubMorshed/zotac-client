import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="collapse my-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-center text-2xl bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content ">
          <b>How will you improve the performance of a react application ?</b>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Optimizing application performance is key for developers who are
            mindful of keeping a user’s experience positive to keep them on an
            app and engaged.
            <br /> According to research by Akamai, a second delay in load time
            can cause a 7 percent reduction in conversions, making it imperative
            for developers to create apps with optimized performance.
            <br /> In React applications, we are guaranteed a very fast UI by
            default. However, as an application grows, developers may encounter
            some performance issues.
            <br /> In this guide, we will discuss five important ways to
            optimize the performance of a React application, including
            pre-optimization techniques. These include:
            <br />
            <br />
            1. Keeping component state local where necessary
            <br />
            2. Memoizing React components to prevent unnecessary re-renders
            <br />
            3. Code-splitting in React using dynamic import()
            <br />
            4. Windowing or list virtualization in React
            <br />
            5. Lazy loading images in React
          </p>
        </div>
      </div>
      <div className="collapse my-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-2xl text-center text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <b>
            What are the different way to manage a state in a react application
            ?
          </b>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1>The Four Kinds of React State to Manage</h1>
          <p>
            When we talk about state in our applications, it’s important to be
            clear about what types of state actually matter.
          </p>
          <br />
          <b>
            There are four main types of state you need to properly manage in
            your React apps:
          </b>
          <ul>
            <li>Local state</li>
            <li>Server statee</li>
            <li>Global state</li>
            <li>URL state</li>
          </ul>
        </div>
      </div>
      <div className="collapse my-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-2xl text-center text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <b>How dose prototypical inheritence work ?</b>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <h1>The Four Kinds of React State to Manage</h1>
          <p>
            Every object with its methods and properties contains an internal
            and hidden property known as [[Prototype]].
            <br /> The Prototypal Inheritance is a feature in javascript used to
            add methods and properties in objects. It is a method by which an
            object can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object.setPrototypeOf.
            Nowadays, in modern language, it is being set using __proto__.
          </p>
        </div>
      </div>
      <div className="collapse my-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-2xl text-center text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <b>What is a unit test ? Why should writes unit tests ?</b>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            UNIT TESTING is a type of software testing where individual units or
            components of a software are tested. <br />
            The purpose is to validate that each unit of the software code
            performs as expected. <br />
            Unit Testing is done during the development (coding phase) of an
            application by the developers. Unit Tests isolate a section of code
            and verify its correctness.
            <br />
            <br /> A unit may be an individual function, method, procedure,
            module, or object. In SDLC, STLC, V Model, Unit testing is first
            level of testing done before integration testing. Unit testing is a
            WhiteBox testing technique that is usually performed by the
            developer.
            <br /> Though, in a practical world due to time crunch or reluctance
            of developers to tests, QA engineers also do unit testing.
          </p>
        </div>
      </div>
      <div className="collapse my-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-2xl text-center text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <b>
            You have an array of products. Each object has a name, price,
            description, etc. How will you implement a search to find products
            by name ?
          </b>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            You have an array of products. Each object has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </p>
        </div>
      </div>
      <div className="collapse my-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-2xl text-center text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <b>
            Why you do not set the state directly in React. For example, if you
            have `const [products, setProducts] = useState([])`. Why you do not
            set `products = [...]` instead, you use the `setProducts`
          </b>
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Why you do not set the state directly in React. For example, if you
            have `const [products, setProducts] = useState([])`. Why you do not
            set `products = [...]` instead, you use the `setProducts`
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
