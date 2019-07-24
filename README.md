# reedsy-frontend-challenge

## Q3 styling

Styling is almost pixel perfect (just can't be sure 100%). Used SCSS, with a bit of an anarchic file organisation... but makes sense and works somehow.

Implemented styling considering cross browser compatibility and different screen sizes.

I put everything into the ```/q3``` folder, outside of the SPA since this was a test on its own and it had to be standalone. ```q3.html``` is a simple HTML file, all the magic done by CSS like requested. The only extra edits I made was to add the viewport meta tag for mobile responsiveness and a pure css hamburger menu. On mobile the header sticks to top, footer is not-sticky instead.

### Compile SCSS and generate CSS files
```
npm run q3
```

### Compile SCSS and watch
```
npm run q3-watch
```


Or, if you prefer using your sass installed globally: 

```
sass q3/scss:q3/css
```

Then just open ```q3/q3.html```.

## SPA

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
