# lang_typescript

## Build and run the app
```
npm run build
npm start
```

## Build and run the app using nerdctl
```
nerdctl build -t ci-basic-github-typescript .
nerdctl run --rm ci-basic-github-typescript
```

## Test
```
npm test
```

#### Alternatively
```
npx vitest
```
