(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(6427)}])},6427:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294);let AboutSection=param=>{let{children}=param;return(0,jsx_runtime.jsx)("section",{id:"about",className:"grid grid-cols-6 mt-24 ",children:children})};var Pagination=__webpack_require__(7488);let ProjectList=param=>{let{children,setFilters,categories,totalPages,setPagination,pagination}=param,handleCategoryChange=e=>{setFilters({idCategory:e.target.value})};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-1 gap-4 mx-2 sm:mx-20 md:grid-cols-3 ",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-end mt-4 col-span-full",children:(0,jsx_runtime.jsxs)("select",{onChange:handleCategoryChange,defaultValue:"",className:"text-2xl dark:bg-back-dark dark:text-txt-dark bg-back-light text-txt-light",children:[(0,jsx_runtime.jsx)("option",{value:"",children:"Category"}),categories.length>0&&categories.map(param=>{let{id,color,name}=param;return(0,jsx_runtime.jsx)("option",{value:id,style:{color:color},children:name},"cat-".concat(id))})]})}),children]}),(0,jsx_runtime.jsx)(Pagination.t,{pagination:pagination,setPagination:setPagination,totalPages:totalPages})]})},ProjectCard=param=>{var ref,ref1;let{project:{githubUrl,idCategory,description,name},categoriesMap}=param,[showTruncateContent,setShowTruncateContent]=(0,react.useState)(!1),[isLong,_]=(0,react.useState)(description.length>117);return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col justify-between px-3 py-4 border rounded-lg border-txt-light dark:border-txt-dark hover:border-secondary dark:hover:border-secondary hover:scale-105 hover:border-2 hover:ease-out hover:duration-100",children:[(0,jsx_runtime.jsx)("div",{className:"w-full py-2 border-b-2 border-txt-light dark:border-txt-dark",children:(0,jsx_runtime.jsx)("h2",{className:"text-xl",children:name})}),(0,jsx_runtime.jsx)("p",{style:isLong?{cursor:"pointer"}:{},onClick:()=>setShowTruncateContent(prev=>!prev),className:"mt-1 text-xl",children:isLong?showTruncateContent?description:description.substring(0,117)+"...":description}),(0,jsx_runtime.jsxs)("div",{className:"flex justify-between",children:[(0,jsx_runtime.jsx)("p",{className:"font-bold",style:{color:null===(ref=categoriesMap.get(idCategory))||void 0===ref?void 0:ref.color},children:null===(ref1=categoriesMap.get(idCategory))||void 0===ref1?void 0:ref1.name}),(0,jsx_runtime.jsx)("a",{className:"font-bold",href:githubUrl,target:"_blank",style:{color:"#0b7285"},rel:"noopener noreferrer",children:"GitHub"})]})]})},SkillList=param=>{let{children,name,color}=param;return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center gap-3 px-3 py-4 border-2 rounded-lg",style:{borderColor:color},children:[(0,jsx_runtime.jsx)("h2",{className:"text-4xl ",children:name}),children]})},SkillRow=param=>{let{name}=param;return(0,jsx_runtime.jsx)("p",{className:"text-2xl",children:"-".concat(name)},name)},CategoryList=param=>{let{children}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("section",{className:"grid grid-cols-1 gap-4 mx-2 sm:mx-20 md sm:grid-cols-2 md:grid-cols-3 xl:mx-36 2xl:mx-64 ",children:children})})};var hooks=__webpack_require__(7186),next_link=__webpack_require__(1664),link_default=__webpack_require__.n(next_link),api=__webpack_require__(3433);function Home(){let projectAPI=(0,hooks.ij)(new api.P9("".concat("https://portfolio-api-3fr6.onrender.com","/projects"))),categoryAPI=(0,hooks.ij)(new api.RF("".concat("https://portfolio-api-3fr6.onrender.com","/categories"))),postAPI=(0,hooks.ij)(new api.wp("".concat("https://portfolio-api-3fr6.onrender.com","/posts"))),skillAPI=(0,hooks.ij)(new api.LN("".concat("https://portfolio-api-3fr6.onrender.com","/skills"))),{items:projects,setFilters,totalPages,setPagination,pagination}=(0,hooks.ib)(projectAPI,{currentPage:1,limit:6},[{by:"name",order:"asc"}]),{items:categories}=(0,hooks.ib)(categoryAPI,{currentPage:1,limit:10},[]),{items:skills}=(0,hooks.ib)(skillAPI,{currentPage:1,limit:100},[]),{items:posts}=(0,hooks.ib)(postAPI,{currentPage:1,limit:3},[{order:"desc",by:"publishedDate"}]),categoriesMap=(0,hooks.eF)(categories),skillsByCategory=(0,hooks.Cq)(skills,categoriesMap);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(AboutSection,{children:(0,jsx_runtime.jsxs)("div",{className:"flex flex-col items-center justify-center col-span-6 mx-4 md:col-start-2 md:col-span-4",children:[(0,jsx_runtime.jsx)("h1",{className:"text-6xl ",children:"Jose Mata"}),(0,jsx_runtime.jsx)("p",{className:"mt-10 text-2xl",children:"I'm a person who is passionate about software development, software architecture and the cloud. For that reason, I always try to write a code which is clean, testable, maintainable, reusable, and easy to extend, following design patterns like Clean Architecture. I found my passion in Back-End development, although I'm not limited to that. I also have solid knowledge about Front-End development with React/Next.js and cloud services such as AWS."})]})}),(0,jsx_runtime.jsx)("h1",{id:"skills",className:"pt-10 mt-32 mb-10 text-6xl text-center",children:"Skills"}),(0,jsx_runtime.jsx)(CategoryList,{children:Array.from(skillsByCategory.keys()).length>0&&Array.from(skillsByCategory.keys()).map(idCategory=>{var ref,ref1,ref2,ref3;return(0,jsx_runtime.jsx)(SkillList,{name:null===(ref=skillsByCategory.get(idCategory))||void 0===ref?void 0:ref.name,color:null===(ref1=skillsByCategory.get(idCategory))||void 0===ref1?void 0:ref1.color,children:null===(ref2=skillsByCategory.get(idCategory))||void 0===ref2?void 0:ref2.skills.map(skill=>(0,jsx_runtime.jsx)(SkillRow,{name:skill.name},"skill-".concat(skill.name)))},"cat-".concat(null===(ref3=skillsByCategory.get(idCategory))||void 0===ref3?void 0:ref3.name))})}),(0,jsx_runtime.jsx)("h1",{id:"projects",className:"mt-32 text-6xl text-center",children:"Projects"}),(0,jsx_runtime.jsx)(ProjectList,{setFilters:setFilters,categories:categories,totalPages:totalPages,pagination:pagination,setPagination:setPagination,children:projects.length>0&&projects.map(project=>(0,jsx_runtime.jsx)(ProjectCard,{project:project,categoriesMap:categoriesMap},"skill-".concat(project.id)))}),(0,jsx_runtime.jsx)("h1",{id:"blog",className:"mt-32 mb-20 text-6xl text-center",children:"Latest Posts"}),(0,jsx_runtime.jsx)("div",{className:"flex justify-center mt-10",children:(0,jsx_runtime.jsx)(link_default(),{className:"w-full text-2xl text-center text-primary",href:"/blog",children:"See more.."})})]})}}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);