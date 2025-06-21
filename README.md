Session is in Repository
Session 4 and Session 5

Install dependencies

npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

modify MainActivity.kt

Run Metro
    npx react-native start

Launch on device or emulator
    npx react-native run-android   # for Android
    npx react-native run-ios       # for iOS

Screens Overview
    LoginScreen
        Props: navigation (from React Navigation)
        State: email, password (managed via useState)
        Behavior: Validates input (placeholder), then uses setSignedIn(true) to move to Home.

    HomeScreen/ProductScreen
        Data: Static products array (id, name, price)
        UI: Renders products with React Native's FlatList.
        Styling: Basic styles for container, list items, text.

        Task: Ecommerce App Navigation Challenge

Objective:
    Students will create a unified e-commerce React Native application that incorporates both bottom tab navigation and nested stack navigation, styled manually or with styled-components, to display product listings and detailed views.

Requirements

        Project Initialization

        Install and configure React Navigation core, bottom-tabs, and native-stack packages following the official documentation:

            Bottom Tabs: https://reactnavigation.org/docs/bottom-tab-navigator
            Native Stack: https://reactnavigation.org/docs/native-stack-navigator

        Navigation Architecture

            Bottom Tab Navigator with two tabs:
                ProductsTab: Hosts the ProductsStack.
                SettingsTab: A placeholder screen displaying a centered Text labeled "Settings".

            ProductsStack (nested under the ProductsTab) should include:
                ProductList: Renders a list of products.
                ProductDetail: Shows detailed information for a selected product.

        ProductList Screen

            Define a static array of at least 5 products, each with an id, name, imageUrl, price, and description
            Use FlatList to render product cards.
            Each card must show the product image, name, and price, and be styled with shadows, padding, and rounded corners.
            On card press, navigate to ProductDetail, passing the selected product's data via route parameters.

        ProductDetail Screen

            Layout the screen to display:
            Product image at the top.
            Product name and price below the image.
            Multiline description text.
            Ensure the native-stack header displays a back button and the product name as the title.

        Settings Screen

            Simple screen with a centered Text component: "Settings".

        Styling Guidelines

            Use styled-components OR React Native's StyleSheet for all styling tasks.
            Do NOT use any external UI component libraries (e.g., React Native Paper, UI Kitten).

        Deliverables

            A GitHub repository with the complete source code.

        Constraints

            No AI-generated code: Follow only the official React Navigation documentation; do not use ChatGPT or similar AI tools to produce code.
            No UI libraries: Styling must be handcrafted or via styled-components; avoid pre-built component libraries.
            Emphasize hands-on practice with navigation and manual styling.

