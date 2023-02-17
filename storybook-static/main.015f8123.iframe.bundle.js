(self.webpackChunkreact_demo=self.webpackChunkreact_demo||[]).push([[179],{"./src/stories/Button.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultButton:function(){return DefaultButton},LargeButton:function(){return LargeButton},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["title"],Button=function Button(_ref){var title=_ref.title,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)("button",(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"bg-blue-500 text-white py-2 px-4 hover:bg-blue-700",onClick:props.click},props),{},{children:title}))};Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var components_Button=Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\components\\Button.js"});__webpack_require__("./src/App.css");var Button_stories={title:"Ex/Button",component:components_Button,argTypes:{click:{action:alert("Button clicked!")}}},Template=function Template(args){return(0,jsx_runtime.jsx)(components_Button,(0,objectSpread2.Z)({},args))},DefaultButton=Template.bind({});DefaultButton.args={onClick:function onClick(){return alert("SMALL BUTTON")},title:"SMALL"};var LargeButton=Template.bind({});LargeButton.args={onClick:function onClick(){return alert("BIG BUTTON")},title:"BIG",className:"text-xl bg-blue-500 text-white py-2 px-4 hover:bg-blue-700"},DefaultButton.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},DefaultButton.parameters),LargeButton.parameters=(0,objectSpread2.Z)({storySource:{source:"(args) => <Button {...args} />"}},LargeButton.parameters);var __namedExportsOrder=["DefaultButton","LargeButton"]},"./src/stories/LoginWindow.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultLoginWindow:function(){return DefaultLoginWindow},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return LoginWindow_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoginWindow=function LoginWindow(){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray.Z)(_useState,2),username=_useState2[0],setUsername=_useState2[1],_useState3=(0,react.useState)(""),_useState4=(0,slicedToArray.Z)(_useState3,2),password=_useState4[0],setPassword=_useState4[1];return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("div",{className:"border bg-gray-100 p-4 ",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center pb-4",children:(0,jsx_runtime.jsx)("h1",{className:"font-bold text-2xl",children:"Login"})}),(0,jsx_runtime.jsx)("div",{className:"",children:(0,jsx_runtime.jsxs)("form",{className:"flex flex-col",onSubmit:function handleSubmit(e){e.preventDefault(),console.log("Username: ".concat(username)),console.log("Password: ".concat(password))},children:[(0,jsx_runtime.jsx)("label",{className:"flex flex-col py-4",children:(0,jsx_runtime.jsx)("input",{type:"text",id:"username",value:username,placeholder:"Username",onChange:function onChange(event){return setUsername(event.target.value)},className:"border min-w-36 p-2"})}),(0,jsx_runtime.jsx)("label",{className:"flex flex-col py-4",children:(0,jsx_runtime.jsx)("input",{type:"password",id:"password",value:password,placeholder:"Password",onChange:function onChange(event){return setPassword(event.target.value)},className:"bordermin-w-36 p-2"})}),(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)("input",{type:"submit",value:"Log In",className:"p-4 border bg-green-400 hover:bg-green-600 duration-200"})})]})})]})})};LoginWindow.__docgenInfo={description:"",methods:[],displayName:"LoginWindow"};var components_LoginWindow=LoginWindow;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\LoginWindow.js"]={name:"LoginWindow",docgenInfo:LoginWindow.__docgenInfo,path:"src\\components\\LoginWindow.js"});__webpack_require__("./src/App.css");var LoginWindow_stories={title:"Ex/Login Window",component:components_LoginWindow},DefaultLoginWindow=function Template(){return(0,jsx_runtime.jsx)(components_LoginWindow,{})}.bind({});DefaultLoginWindow.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <LoginWindow/>"}},DefaultLoginWindow.parameters);var __namedExportsOrder=["DefaultLoginWindow"]},"./src/stories/NavBar.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultNavBar:function(){return DefaultNavBar},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return NavBar_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),react=__webpack_require__("./node_modules/react/index.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),index_esm=__webpack_require__("./node_modules/react-icons/ai/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavBar(){var _useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),navbar=_useState2[0],setNavbar=_useState2[1];return(0,jsx_runtime.jsx)("nav",{className:"w-full bg-gray-100 shadow",children:(0,jsx_runtime.jsxs)("div",{className:"justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center justify-between py-3 md:py-5 md:block",children:[(0,jsx_runtime.jsx)("a",{href:"/",children:(0,jsx_runtime.jsx)("h2",{className:"text-2xl font-bold text-black",children:"DEMO"})}),(0,jsx_runtime.jsx)("div",{className:"md:hidden",children:(0,jsx_runtime.jsx)("button",{className:"p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",onClick:function onClick(){return setNavbar(!navbar)},children:navbar?(0,jsx_runtime.jsx)(index_esm.oHP,{}):(0,jsx_runtime.jsx)(index_esm.qTj,{})})})]})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(navbar?"block":"hidden"),children:[(0,jsx_runtime.jsxs)("ul",{className:"items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0",children:[(0,jsx_runtime.jsx)("li",{className:"text-black hover:text-green-600 duration-200",children:(0,jsx_runtime.jsx)("a",{href:"/",children:"Home"})}),(0,jsx_runtime.jsx)("li",{className:"text-black hover:text-green-600 duration-200",children:(0,jsx_runtime.jsx)("a",{href:"/",children:"Blog"})}),(0,jsx_runtime.jsx)("li",{className:"text-black hover:text-green-600 duration-200",children:(0,jsx_runtime.jsx)("a",{href:"/",children:"About US"})}),(0,jsx_runtime.jsx)("li",{className:"text-black hover:text-green-600 duration-200",children:(0,jsx_runtime.jsx)("a",{href:"/",children:"Contact US"})})]}),(0,jsx_runtime.jsxs)("div",{className:"mt-3 space-y-2 md:hidden ",children:[(0,jsx_runtime.jsx)("a",{href:"/login",className:"inline-block w-full px-4 py-2 text-center text-white bg-green-600 rounded-md shadow hover:bg-gray-800 duration-200",children:"Log in"}),(0,jsx_runtime.jsx)("a",{href:"/signup",className:"inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 duration-200",children:"Sign up"})]})]})}),(0,jsx_runtime.jsxs)("div",{className:"hidden space-x-2 md:inline-block",children:[(0,jsx_runtime.jsx)("a",{href:"/login",className:"px-4 py-2 text-white bg-green-600 rounded-md shadow hover:bg-gray-800 duration-200",children:"Log in"}),(0,jsx_runtime.jsx)("a",{href:"/signup",className:"px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 duration-200",children:"Sign up"})]})]})})}NavBar.__docgenInfo={description:"",methods:[],displayName:"NavBar"};var components_NavBar=NavBar;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\NavBar.js"]={name:"NavBar",docgenInfo:NavBar.__docgenInfo,path:"src\\components\\NavBar.js"});__webpack_require__("./src/App.css");var NavBar_stories={title:"Ex/Navigation Bar",component:components_NavBar,argTypes:{click:{action:alert("Button clicked!")}}},DefaultNavBar=function Template(){return(0,jsx_runtime.jsx)(components_NavBar,{})}.bind({});DefaultNavBar.parameters=(0,objectSpread2.Z)({storySource:{source:"() => <NavBar/>"}},DefaultNavBar.parameters);var __namedExportsOrder=["DefaultNavBar"]},"./.storybook/preview.js-generated-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:function(){return __namedExportsOrder},parameters:function(){return parameters}});var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters=(__webpack_require__("./src/App.css"),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}),__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/App.css":function(){},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/Button.stories.js":"./src/stories/Button.stories.js","./stories/LoginWindow.stories.js":"./src/stories/LoginWindow.stories.js","./stories/NavBar.stories.js":"./src/stories/NavBar.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"./storybook-init-framework-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},"?4f7e":function(){},"./generated-stories-entry.cjs":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C[\\\\/]%7C(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/])(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},function(__webpack_require__){var __webpack_exec__=function(moduleId){return __webpack_require__(__webpack_require__.s=moduleId)};__webpack_require__.O(0,[401],(function(){return __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs")}));__webpack_require__.O()}]);