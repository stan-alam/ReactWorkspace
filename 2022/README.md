React Forms

Form Library Recommendations
Once you understand how to build forms in React, here's a few form libraries you might want to try:

formsy-react
https://github.com/christianalfoni/formsy-react

formsy-react tries to strike a balance between flexibility and reusability. This is a worthwhile goal as the author of this module acknowledges that forms, inputs, and validation are handled quite differently across projects.

The general pattern is that you use the Formsy.Form component as your form element, and provide your own input components as children (using the Formsy.Mixin). The Formsy.Form component has handlers like onValidSubmit() and onInvalid() that you can use to alter state on the form's parent, and the mixin provides some validation and other general purpose helpers.

react-input-enhancements
https://github.com/alexkuz/react-input-enhancements

react-input-enhancements is a collection of five rich components that you can use to augment forms. This module has a nice demo to showcase how you can use the Autosize, Autocomplete, Dropdown, Mask, and DatePicker components. The author does make a note that they aren't quite ready for production and are more conceptual. That said, they might be useful if you're looking for a drop-in datepicker or autocomplete element.

tcomb-form
http://gcanti.github.io/tcomb-form

tcomb-form is meant to be used with tcomb models which center around Domain Driven Design. The idea is that once you create a model, the corresponding form can be automatically generated. In theory, the benefits are that you don't have to write as much markup, you get usability and accessibility for free (e.g. automatic labels and inline validation), and your forms will automatically stay in sync with changes to your model. If tcomb models seem to be a good fit for your app, this tcomb-form is worth considering.

winterfell
https://github.com/andrewhathaway/winterfell

If the idea of defining your forms and fields entirely with JSON, winterfell might be for you. With winterfell, you sketch out your entire form in a JSON schema. This schema is a large object where you can define things like CSS class names, section headers, labels, validation requirements, field types, and conditional branching. winterfell is organized into "form panels", "question panels", and "question sets". Each panel has an ID and that ID is used to assign sets to it. One benefit of this approach is that if you find yourself creating/modifying lots of forms, you could create a UI to create/modify these schema objects and persist them to a database.

react-redux-form
https://github.com/davidkpiano/react-redux-form

If Redux is more your style react-redux-form is a "collection of action creators and reducer creators" to simplify "building complex and custom forms with React and Redux". In practice, this module provides a modelReducer and a formReducer helper to use when creating your Redux store. Then within your form you can use the provided Form, Field, and Error components to help connect your label and input elements to the appropriate reducers, set validation requirements, and display appropriate errors. In short, this is a nice thin wrapper to help you build forms using Redux.

The State Of Web Components In 2022
Web Components have slowly become a "thing" over the last decade. The spec was introduced in 2011, and Google launched its Polymer library, based on Web Components, in 2013. Since then, this is how far Web Components have come:

~18% of page loads tracked by Google contain a Web Component
Stencil is the most downloaded library for developing Web Components
Custom Elements Manifest powers documentation for Storybook where Web Components became a first-class citizen in 2021
Web Components have been growing in popularity among web developers ever since Custom Elements v1 became available in every evergreen browser: Chrome, Safari, Firefox, and Edge.
Faster Performance And Smaller Bundle Sizes
Among its touted benefits, Web Components promises faster performance and smaller bundle sizes. This, in addition to the ability to be framework agnostic, meaning you can use your components across libraries such as React, Angular, or Svelte. You'll be able to reuse your components across frameworks, making frontend development much faster.

In its analysis, Div Riots examined bundle size and performance of several Web Components libraries. They found that:

4 variants render faster than the same component coded with Svelte
5 variants have a bundle size smaller than the same component coded with Svelte
54 variants coded with custom elements have a bundle-size smaller and render faster than the same component coded with React or Vue
Top 5 Web Component Libraries By Downloads
The following JavaScript libraries are ranked by npm downloads. These libraries either use Web Components "under the hood" or compile down to Web Components.

Stencil - 331,588
Svelte - 301,070
Lit - 204,125
Solid - 18,974
Lightning Web Components - 4,475
Tooling And Storybook Support
In the past year, Web Components became a first-class citizen in Storybook.

Custom Elements Manifest is "a file format that describes custom elements". The @custom-elements-manifest/analyzer package generates a JSON file that provides rich information about Web Components. Storybook uses this tool to generate documentation of Web Components.

Browser Support For Web Component Features
Every major browser supports custom elements, with the exception that Apple Safari doesn't support customized built-in elements. Web Components is a set of specifications that include custom elements, Shadow DOM, and HTML templates.

Other specifications enhance Web Components in some way, like CSS custom properties, but are not under the umbrella of Web Components. Below, each specification is described, along with the level of browser support:

Autonomous custom elements - allow engineers to define custom HTML elements. Autonomous custom elements have shipped in every modern browser.
Customized built-in elements - allow reuse of behaviors from existing HTML elements, which can be a boon for Accessibility in some use cases. Customized built-in elements are available in every modern browser except Apple Safari.
Form-associated custom elements - enable custom elements to participate in the HTML form lifecycle. This specification allows developers to make entirely new form controls and overcome issues that block form controls from reporting validity and value to HTMLFormElement, while also enabling Accessibility. They are available in Chrome, Edge, and Firefox Developer Edition.
Shadow DOM - provides encapsulation for HTML markup and styling for custom elements. Shadow DOM is available in every modern browser.
HTML Templates - a way to cache HTML in DOM that isn't immediately rendered but can be reused in the document. HTML templates are available in every modern browser.
CSS custom properties - otherwise known as CSS variables, are a viable means to provide "design tokens" that cross the Shadow boundary. CSS custom properties are found in every modern browser.
CSS Shadow Parts - allow shadow hosts to "selectively expose chosen elements from their shadow tree to the outside page for styling purposes." CSS Shadow Parts are useful for theming or other style customizations in custom elements that use Shadow DOM. CSS Shadow Parts are in every modern browser.
New Specification Proposals
Web Components are a set of browser specifications. Spec is introduced over time, iterated upon, and integrated into browsers. Web Components specifications are maintained and proposed in several places. An index is found on Web Incubator CG Github repository README.md.

Various specifications are in some stage of the proposal process that impacts Web Components. Those new specifications include:

Declarative Shadow DOM - a specification that enables Shadow DOM to be declared in an HTML template, rather than imperatively in a JavaScript class definition. Declarative Shadow DOM enables the server-side rendering of custom elements.
Constructable Stylesheets - allow users to compose CSS styles programmatically without the need for a style tag. This promotes the reuse of CSS styles, helping to solve a problem common in UI library development where the same CSS is repeated throughout the codebase.
HTML Template Instantiation - a specification proposed by Apple in 2017. HTML Template Instantiation would allow HTML templates to instantiate "with some parts of it substituted, conditionally included, or repeated based on JavaScript values," similar to the syntax available in Angular, Vue, or Ember.
What You Can Do With Web Components Today
Curious about Web Components but don't know where to start? The reality is that you can already use it to build web apps and UI libraries with your own custom elements today. These are just some of the things you can do:

Code components using autonomous, customized built-in, and form-associated custom elements, Shadow DOM, HTML templates, CSS variables, and Declarative Shadow DOM
Develop libraries with TypeScript decorators that streamline UI component development
Code full apps using Web Components, TypeScript, and your other favorite tools for frontend development
I'll walk you through building real world projects with Web Components over the next several tutorials.

Cheers,

-- Nate


