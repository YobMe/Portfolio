(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{46:function(e,t,i){"use strict";i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return d}));var a=i(7),o=i(1),r=i(24),s=i(23),n=(i.p,[{id:1,title:"Exam Time",category:"Mobile Application",img:i.p+"static/media/mobile-project-3.c7906753.jpg",ProjectHeader:{title:"Project UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Ashewa Ecommerce",category:"Mobile Application",img:i.p+"static/media/mobile-project-4.3a21373a.jpg"},{id:3,title:"Bridgely",category:"Mobile Application",img:i.p+"static/media/mobile-project-5.0a754ebf.jpg"},{id:4,title:"EPP Timesheet Managemet System",category:"Web Application",img:i(22).a},{id:5,title:"React Social App",category:"Mobile Application",img:s.a},{id:6,title:"Apple Design System",category:"UI/UX Design",img:r.a}]),l=i(2),c=Object(o.createContext)(),d=function(e){var t=Object(o.useState)(n),i=Object(a.a)(t,2),r=i[0],s=i[1],d=Object(o.useState)(""),m=Object(a.a)(d,2),g=m[0],u=m[1],p=Object(o.useState)(""),b=Object(a.a)(p,2),h=b[0],j=b[1],y=r.filter((function(e){return e.title.toLowerCase().includes(g.toLowerCase())||""===g?e:""})),x=r.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(h)}));return Object(l.jsx)(c.Provider,{value:{projects:r,setProjects:s,searchProject:g,setSearchProject:u,searchProjectsByTitle:y,selectProject:h,setSelectProject:j,selectProjectsByCategory:x},children:e.children})}},47:function(e,t,i){"use strict";var a=i(1),o=i(5),r=i(44),s=i(3),n=i(2),l=function(e){e.id;var t=e.title,i=e.category,a=e.image,o=e.onProjectClick,l=Object(s.f)();return Object(n.jsx)(r.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)("button",{onClick:function(){o(t),l("/projects/single-project")},"aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:i})]})]})})})},c=i(46),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})},g=i(26),u=i.p+"static/media/ashewa11.f3939838.jpg",p=i.p+"static/media/ashewa22.d61858d3.jpg",b=i.p+"static/media/ashewa33.e051bace.jpg",h=i(23),j=i(24),y=i(22),x={ProjectHeader:{title:"Project UI",publishDate:"Jul 26, 2021",tags:"UI / Frontend"},ProjectImages:[{id:1,title:"Ashewa Ecommerce Project UI",img:u},{id:2,title:"Ashewa Ecommerce Project UI",img:p},{id:3,title:"Ashewa Ecommerce Project UI",img:b}],ProjectInfo:{ClientHeading:"About Client",CompanyInfo:[{id:1,title:"Ashewa Technologies",details:"Company Ltd"},{id:2,title:"Services",details:"Ecomerce"},{id:3,title:"Website",details:"https://ashewa.com/"},{id:4,title:"Phone",details:"+251 988321313"}],ObjectivesHeading:"Objective",ObjectivesDetails:"A team, that desire to build a technology transfer in the sphere of Education. Aspirational, want to have an influence on Ethiopia\u2019s Educational system and leave a digital footprint.",Technologies:[{title:"Tools & Technologies",techs:["CSS","JavaScript","React Native"]}],ProjectDetailsHeading:"Challenge",ProjectDetails:[{id:1,details:"Resolving Issues With Data Integration Between Mobile Apps and Web Services."},{id:2,details:"Ensuring Security Throughout Development Processes. "},{id:3,details:"In their survey, White Hat Security found that roughly 50% of applications in industries like manufacturing, public services, healthcare, retail, education, and utilities are vulnerable to a cyberattack because of one or more serious bugs in the code. And the consequences can be dire. Not only could hackers steal data from inside your app, but they could also infect your app with malicious software that later installs itself on your users\u2019 phones. "}],SocialSharingHeading:"Share This",SocialSharing:[{id:1,name:"Twitter",icon:Object(n.jsx)(o.q,{}),url:"https://twitter.com/eyobadugna23"},{id:2,name:"Instagram",icon:Object(n.jsx)(o.g,{}),url:"https://instagram.com/eyob_adugna"},{id:3,name:"Facebook",icon:Object(n.jsx)(o.d,{}),url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:Object(n.jsx)(o.h,{}),url:"https://linkedin.com/"}]},RelatedProject:{title:"Related Projects",Projects:[{id:1,title:"Mobile UI",img:h.a},{id:2,title:"Web Application",img:j.a},{id:3,title:"UI Design",img:y.a},{id:4,title:"Kabul Mobile App UI",img:b}]}},f=i.p+"static/media/br1.7c353036.jpg",v=i.p+"static/media/br2.67e1935f.jpg",O=i.p+"static/media/br3.0c062342.jpg",P={ProjectHeader:{title:"Project UI",publishDate:"Jul 26, 2021",tags:"UI / Frontend"},ProjectImages:[{id:1,title:"Bridgely Project UI",img:f},{id:2,title:"Bridgely Project UI",img:v},{id:3,title:"Bridgely Project UI",img:O}],ProjectInfo:{ClientHeading:"About Client",CompanyInfo:[{id:1,title:"One Child",details:"Nonprofit organization"},{id:2,title:"Services",details:"Aid Platform"},{id:3,title:"Website",details:"https://bridgely.org/"},{id:4,title:"Mail",details:"P.O. Box 62600"}],ObjectivesHeading:"Objective",ObjectivesDetails:"21st century international nonprofits and mission-engaged churches will grow by mobilizing, connecting and empowering their communities. We\u2019re building the platform to make that possible.",Technologies:[{title:"Tools & Technologies",techs:["CSS","JavaScript","React Native"]}],ProjectDetailsHeading:"Challenge",ProjectDetails:[{id:1,details:"Understanding the Scope of the Project , It might look like a lot of things to consider and research but believe us, it will save you a lot of time in the long run Not only will this make it easier for you to decide if you should even pursue developing your mobile app, but it will also simplify communication between you and the developers. "},{id:2,details:"Coding for Multiple Platforms, Choosing between native and cross-platform code apps will also be a key decision to make. Native apps are faster, more stable, and support all in-built features of the phones, while cross-platform apps are easier and faster to build and can help you reach a wider audience. So which one should you pick for your mobile application development process? A clever way to find out would be to check whether your audience prefers one platform over another. "},{id:3,details:"Maintaining Code Quality Over Time, As you keep adding new features or updates to your application, the amount of data on it grows, and you might find it getting tough to keep the code clean and free of errors. But leaving it \u201cas it is\u201d is out of the question \u2013 everything, from your app\u2019s compatibility to its security and performance, depends on its codebase. "}],SocialSharingHeading:"Share This",SocialSharing:[{id:1,name:"Twitter",icon:Object(n.jsx)(o.q,{}),url:"https://twitter.com/eyobadugna23"},{id:2,name:"Instagram",icon:Object(n.jsx)(o.g,{}),url:"https://instagram.com/eyob_adugna"},{id:3,name:"Facebook",icon:Object(n.jsx)(o.d,{}),url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:Object(n.jsx)(o.h,{}),url:"https://linkedin.com/"}]},RelatedProject:{title:"Related Projects",Projects:[{id:1,title:"Mobile UI",img:h.a},{id:2,title:"Web Application",img:j.a},{id:3,title:"UI Design",img:y.a},{id:4,title:"Kabul Mobile App UI",img:O}]}},k=i.p+"static/media/epp2.d2870a4a.jpg",w=i.p+"static/media/epp3.3dcaa0aa.jpg",I={ProjectHeader:{title:"Project UI",publishDate:"Jul 26, 2021",tags:"UI / Frontend"},ProjectImages:[{id:1,title:"EPP Project UI",img:y.a},{id:2,title:"EPP Project UI",img:k},{id:3,title:"EPP Project UI",img:w}],ProjectInfo:{ClientHeading:"About Client",CompanyInfo:[{id:1,title:"Excellerent",details:"Outsourcing company"},{id:2,title:"Services",details:"Software Developement"},{id:3,title:"Website",details:"https://excellerentsolutions.com"},{id:4,title:"Address",details:"Kebede Haile Building, Bole Road, Addis Ababa, Ethiopia"}],ObjectivesHeading:"About Excellerent",ObjectivesDetails:"Excellerent is a global consulting company offering end-to-end services and solutions on Open Source, Cloud, API, and Automation technologies.",Technologies:[{title:"Tools & Technologies",techs:["CSS","JavaScript","React Native"]}],ProjectDetailsHeading:"Challenge",ProjectDetails:[{id:1,details:"Understanding the Scope of the Project , It might look like a lot of things to consider and research but believe us, it will save you a lot of time in the long run Not only will this make it easier for you to decide if you should even pursue developing your mobile app, but it will also simplify communication between you and the developers. "},{id:2,details:"Coding for Multiple Platforms, Choosing between native and cross-platform code apps will also be a key decision to make. Native apps are faster, more stable, and support all in-built features of the phones, while cross-platform apps are easier and faster to build and can help you reach a wider audience. So which one should you pick for your mobile application development process? A clever way to find out would be to check whether your audience prefers one platform over another. "},{id:3,details:"Maintaining Code Quality Over Time, As you keep adding new features or updates to your application, the amount of data on it grows, and you might find it getting tough to keep the code clean and free of errors. But leaving it \u201cas it is\u201d is out of the question \u2013 everything, from your app\u2019s compatibility to its security and performance, depends on its codebase. "}],SocialSharingHeading:"Share This",SocialSharing:[{id:1,name:"Twitter",icon:Object(n.jsx)(o.q,{}),url:"https://twitter.com/eyobadugna23"},{id:2,name:"Instagram",icon:Object(n.jsx)(o.g,{}),url:"https://instagram.com/eyob_adugna"},{id:3,name:"Facebook",icon:Object(n.jsx)(o.d,{}),url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:Object(n.jsx)(o.h,{}),url:"https://linkedin.com/"}]},RelatedProject:{title:"Related Projects",Projects:[{id:1,title:"Mobile UI",img:h.a},{id:2,title:"Web Application",img:j.a},{id:3,title:"UI Design",img:y.a},{id:4,title:"Kabul Mobile App UI",img:w}]}},S=i(27);t.a=function(){var e=Object(a.useContext)(c.a),t=e.projects,i=e.searchProject,r=e.setSearchProject,s=e.searchProjectsByTitle,d=e.selectProject,u=e.setSelectProject,p=e.selectProjectsByCategory,b=Object(a.useContext)(g.a).setSingleProjectData,h=function(e){switch(e){case"Exam Time":b(S.a);break;case"Ashewa Ecommerce":b(x);break;case"Bridgely":b(P);break;case"EPP Timesheet Managemet System":b(I)}};return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(n.jsx)(o.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){r(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:u})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?p.map((function(e){return Object(n.jsx)(l,{id:e.id,title:e.title,category:e.category,image:e.img,onProjectClick:h},e.id)})):i?s.map((function(e){return Object(n.jsx)(l,{id:e.id,title:e.title,category:e.category,image:e.img,onProjectClick:h},e.id)})):t.map((function(e){return Object(n.jsx)(l,{id:e.id,title:e.title,category:e.category,image:e.img,onProjectClick:h},e.id)}))})]})}},55:function(e,t,i){"use strict";i.r(t);var a=i(13),o=i(7),r=i(28),s=i(5),n=i.p+"static/media/developer.ef097afb.svg",l=i.p+"static/media/developer-dark.3f07bd13.svg",c=i(44),d=i(2),m=function(){var e=Object(r.a)(),t=Object(o.a)(e,1)[0];return Object(d.jsxs)(c.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(d.jsx)(c.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hello, I'm Eyob"}),Object(d.jsx)(c.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full-Stack Developer & Nature Enthusiast"}),Object(d.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(d.jsxs)("a",{download:"Eyob_Adugna-Resume.pdf",href:"/files/Eyob_Adugna-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(d.jsx)(s.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(d.jsx)(c.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(d.jsx)("img",{src:"dark"===t?n:l,alt:"Developer"})})]})},g=i(47),u=i(46),p=i(18);t.default=function(){return Object(d.jsxs)("div",{className:"container mx-auto",children:[Object(d.jsx)(m,{}),Object(d.jsx)(u.b,{children:Object(d.jsx)(g.a,{})}),Object(d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(d.jsx)(a.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(d.jsx)(p.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.8cf71598.chunk.js.map