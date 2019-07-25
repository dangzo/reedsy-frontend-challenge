
# reedsy-frontend-challenge

### Project setup
```
yarn install
```

### Project structure and folders organisation

```
|
|- e2e/
|- q3/
|   |- css/                 # Generated CSS
|   |- images/
|   |- scss/                # SCSS
|   \- q3.html              # Q3 entry file
|- src/
|   |- assets/              # Generic assets (actually empty)
|   |- components/          # Dump components
|   |- containers/          # Containers
|   |- layouts/             # Layout components
|   |- models/              # Data models
|   |- pages/               # Pages components
|   |- store/
|   |       |- modules/     # Store modules
|   |       \- index.ts
|   |- styles/              # Global SCSS (base elements, variables, etc)
|   |- App.vue
|   |- main.ts
|   \- router.ts
\- public/                  # Static files (Q3 images, SPA index.html, etc.)
```


## Q3 styling

Styling is almost pixel perfect (just can't be sure 100%). Used SCSS, with a bit of an anarchic file organisation... but makes sense somehow, and it seems to work well.

Implemented styling considering cross browser compatibility and different screen sizes.

I put everything into the ```/q3``` folder, outside of the SPA since this was a test on its own and it had to be standalone. ```q3.html``` is a simple HTML file, all the magic done by CSS like requested. The only extra edits I made was to add the viewport meta tag for mobile responsiveness and a pure css hamburger menu. On mobile the header sticks to top, footer is not-sticky instead.

### Compile SCSS and generate CSS files
```
yarn q3
```

### Compile SCSS and watch
```
yarn q3-watch
```

Or, if you prefer using your sass installed globally: 

```
sass q3/scss:q3/css
```

Then just open ```q3/q3.html```.

## SPA

### General notes and naming convention

- Using decorators from [vuex-class](https://github.com/ktsn/vuex-class) and [vue-property-decorators](https://github.com/kaorun343/vue-property-decorator) as this is just the way I used to code with Vue in the last year (so quicker to set up, more familiar, etc).
- Containers names are in the form of "Name.container.vue" (i.e. `BookList.container.vue`)
- Local methods names are in the form of "doSomething" (i.e. `doRetrieveBookData()`)
- Getters names always start with a `get` word (i.e. `getTruncatedSynopsis`)
- Using both prettier and eslint for code style and formatting
- All pages optimised for mobile

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test
```

### Lints and fixes files
```
yarn lint
```

