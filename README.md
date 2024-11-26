# Rsbuild test

## Reproduce the bug

1. Install the dependencies:

    ```bash
    pnpm install
    ```

2. Build the app for production:

    ```bash
    pnpm build
    ```

3. Observe the JavaScript output artifact contains the generator polyfill.

4. Go to the `.browserslistrc` file and change the Chrome version to 125.

5. Build the app for production:

    ```bash
    pnpm build
    ```

6. Observe the JavaScript does not contain any polyfill.
