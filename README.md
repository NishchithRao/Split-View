# Split View

A small library that enables split view between 2 screens with an props to add actions in the split bar.

<img src="./example/assets/Example.png" height="400" />

In app splitting for screens on android and ios.

### Usage Example

1. Import the component

```jsx
import { SplitPane } from "split-view";
```

2. Provide Screens for the component

```jsx
const App = () => {
  return <SplitPane startScreen={<Mail />} endScreen={<Posts />} />;
};
```

3. Provide additional actions to showcase in the divider

```jsx
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <SplitPane
        left={<Button onClick={account_action} icon="account-circle" />}
        right={<Button onClick={fix_action} icon="auto-fix" />}
        startScreen={<Posts />}
        endScreen={<Mail />}
        enabled
      />
    </SafeAreaView>
  );
};
```
