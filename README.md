
# portfolio-frontend

This Web Application is my current portfolio, it was built with the **JavaScript's** framework **Next.js**  and  **Tailwind** for styles.  Talking more about the styles, to be honest, designing is not my strong area, so I tried to keep the styles simple to get a clean design.

This Web Application has an "Administration Panel" that is used to handle the content on the web. Due to it, I had to build a [back-end](https://github.com/mata649/portfolio_api) for this project. To handle the sessions I have used **JSON Web Token** because it's the easiest way to handle sessions with an **API**.

## Highlights
### useFetch 
One of my favorites things on this project was this [**customHook**](https://github.com/mata649/portfolio-frontend/blob/main/hooks/useFetch.ts) that I develop to handle the fetch calls to the backend more easily, reusing the same hook for each entity and avoiding to write a **customHook** for each different entity in the project. In addition, this **customHook** was very helpful to handle the pagination, sorting, and filters.
That was possible thanks to the **Generics** that at least for me, is one of the most important things that we need to know when we are writing reusable code.
#### Some examples using the useFetch
    const  {  items:  projects,  setFilters,  totalPages,  setPagination,  pagination  }  =  useFetch<Project>(projectAPI,  {  currentPage:  1,  limit:  6  },  [{  by:  'name',  order:  'asc'  }])
    
    const  {  items:  categories  }  =  useFetch<Category>(categoryAPI,  {  currentPage:  1,  limit:  10  },  [])
    
    const  {  items:  posts  }  =  useFetch<Post>(postAPI,  {  currentPage:  1,  limit:  3  },  [{  order:  'desc',  by:  'publishedDate'  }])
The first argument it's an abstraction of the API calls for each endpoint, the second is the arguments that will be used to work the pagination, and the last it's the order of the records. 

### API Call Abstraction
To be honest, this idea was not completely my idea, I used to handle the request to the API in the same event, but while I was working on this project I read an article about how to handle it in a "clean" way and it looked amazing. Then, I combined that idea with the cools **generics** and voila, we have and highly **reusable** and **extensible** class to handle the different API call for each service.
Now we don't have to write request by request to the backend in each post, get, delete or put. We just have to create a new class and extend from the GenericAPI class and now we have access to all the requests for that new services fastly.
Here is the code of the [**GenericAPI**](https://github.com/mata649/portfolio-frontend/blob/main/api/GenericAPI.ts)
#### Examples 

    import { GenericAPI } from './GenericAPI';
    
    export class CategoryAPI extends GenericAPI<Category> {
    
    constructor(url: string) {
    
    super(url);
    }
    }
Here is an example of how easy is to create a new service with this generic abstraction.

    import axios from 'axios';
    
    import { GenericAPI } from './GenericAPI';
    
    export class PostAPI extends GenericAPI<Post> {
    
    constructor(url: string) {
    
    super(url);
    
    }
    
    async getContentBySlug(
    
    slug: string
    
    ): Promise<{ contents: PostContent[]; publishedDate: string } | null> {
    
    try {
    
    const res = await axios.get(`${this.url}/${slug}/content`);
    
    return {
    
    contents: res.data.data as PostContent[],
    
    publishedDate: res.data.publishedDate as string,
    
    };
    
    } catch (error) {
    
    return null;
    
    }
    
    }
    
    }
Here I was creating a new service but also I had to extend it, so this service has all the main requests used in the **GenericAPI** plus a new request to get the post contents based on a slug.

## Requirements

 - **Node.js:** Node.js® is an open-source, cross-platform JavaScript runtime environment. You can read more about docker-compose [here](https://nodejs.org/en/)


## Installing Project Dependencies
To install the dependencies for this project you just need to be located in the root folder of the project and run the next command.

    npm run install

## Running Project

To run this project you just need to be located in the root folder of the project and run the next command.

    npm run dev
Probably most of the content of the web will be void because it doesn't have access to the backend, so probably I am going to build a docker-compose with the backend image to create a full client-server model with docker.
