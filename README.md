# Code Pointers

- Task 1 is done by fetching country details from public graphql api. The page can be reached from the nav bar. There are two pages - all countries, country specific detail page.
- Task 2: Toast is accomplished with `useToast` composable present in the `hooks` folder. Display of toasts is done by `Toaster` component.
- Task 3: Test for `useToast` composable is present in the `tests` folder.

# Frontend Coding Challenge

Clone this repo, run `npm install` and start the project using `npm run dev`.
The instructions for completing the task can be found in the site that will launch.

## Additional Hints

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
