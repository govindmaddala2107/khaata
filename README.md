# React Native Expo + React Navigation Setup Guide

This guide helps avoid dependency/version issues while setting up React Navigation in Expo projects.

---

# 1. Create Expo Project

```bash
npx create-expo-app khaata
```

Move into project:

```bash
cd khaata
```

---

# 2. Start Expo

```bash
npx expo start
```

Scan QR using Expo Go app.

---

# 3. IMPORTANT RULE

For Expo projects:

✅ Prefer:

```bash
npx expo install
```

❌ Avoid:

```bash
npm install
```

for native packages.

Expo automatically installs compatible versions.

---

# 4. Install React Navigation Properly

## Install required Expo-compatible packages

```bash
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
```

---

## Install React Navigation v6

```bash
npm install @react-navigation/native@6
```

```bash
npm install @react-navigation/bottom-tabs@6
```

---

# 5. If Dependency Conflict Happens

Remove old/broken packages:

```bash
npm uninstall @react-navigation/native @react-navigation/bottom-tabs
```

Delete cache + modules:

```bash
rm -rf node_modules
rm package-lock.json
```

(Windows PowerShell)

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
```

Reinstall:

```bash
npm install
```

---

# 6. Clear Expo Cache

Always clear cache after dependency changes:

```bash
npx expo start -c
```

---

# 7. App.js Setup

```jsx
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

---

# 8. Home.jsx Example

```jsx
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
```

---

# 9. Common Boolean Error

Error:

```txt
java.lang.String cannot be cast to java.lang.Boolean
```

Cause:

```jsx
horizontal="true"
```

Wrong because `"true"` is string.

Correct:

```jsx
horizontal={true}
```

---

# 10. Common Props That Cause Crash

Check these carefully:

```jsx
visible={true}
editable={false}
horizontal={true}
enabled={true}
```

NOT:

```jsx
visible="true"
editable="false"
```

---

# 11. Recommended Versions

For Expo SDK 54:

```txt
@react-navigation/native -> v6
@react-navigation/bottom-tabs -> v6
```

Avoid React Navigation v7 unless Expo officially supports it.

---

# 12. Useful Commands

## Start project

```bash
npx expo start
```

## Start with cache clear

```bash
npx expo start -c
```

## Install Expo-compatible package

```bash
npx expo install package-name
```

## Install JS-only package

```bash
npm install package-name
```

---

# 13. Folder Structure

```txt
khaata/
│
├── App.js
├── components/
│   └── Home.jsx
├── package.json
└── node_modules/
```

---

# 14. Recommended Future Setup

For state management:

```bash
npm install zustand
```

For icons:

```bash
npx expo install @expo/vector-icons
```

For local storage:

```bash
npx expo install @react-native-async-storage/async-storage
```

For charts:

```bash
npm install react-native-chart-kit
```

---

# 15. Best Practice

Whenever app crashes unexpectedly:

1. Check JSX props
2. Clear Expo cache
3. Delete node_modules
4. Reinstall packages
5. Ensure Expo-compatible versions
6. Restart Metro server

---

# 16. Important Expo Notes

Expo SDK controls compatible versions.

Never blindly install latest React Native libraries.

Always check Expo compatibility first.

---