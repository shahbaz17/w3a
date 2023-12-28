# npx w3a

Web3Auth Scaffolding tool for quick starts.

## Installation

To use this tool, you can install it globally using the following command:

```bash
npm install -g w3a
```

## Usage

Run the command with the desired parameters:

```bash
npx w3a [x] [y] [z]
```

- x can be either "pnp" or "core-kit"
- y can be one of the following: "modal", "nomodal", "android", "ios", "flutter", "react-native", "vue"
- z can be one of the following: "react", "nextjs", "angular", "react-vite", "vanillajs", "vue"

For example:

```bash
npx w3a pnp modal react
```

This will download the specified project template to a folder of your choice.

Project Combinations

| x        | y            | z            |
| -------- | ------------ | ------------ |
| pnp      | modal        | angular      |
| pnp      | modal        | nextjs       |
| pnp      | modal        | react        |
| pnp      | modal        | react-vite   |
| pnp      | modal        | vanillajs    |
| pnp      | modal        | vue          |
| pnp      | nomodal      | angular      |
| pnp      | nomodal      | nextjs       |
| pnp      | nomodal      | react        |
| pnp      | nomodal      | react-vite   |
| pnp      | nomodal      | vanillajs    |
| pnp      | nomodal      | vue          |
| pnp      | android      | -            |
| pnp      | ios          | -            |
| pnp      | react-native | -            |
| pnp      | flutter      | -            |
| core-kit | sfa          | web          |
| core-kit | sfa          | node         |
| core-kit | sfa          | android      |
| core-kit | sfa          | ios          |
| core-kit | sfa          | flutter      |
| core-kit | sfa          | react-native |
| core-kit | mfa          | web          |
| core-kit | mfa          | android      |
| core-kit | mfa          | ios          |
| core-kit | mfa          | react-native |
