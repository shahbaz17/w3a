#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const repoMap = {
    pnp: {
        modal: {
            angular: 'Web3Auth/web3auth-pnp-examples/web-modal-sdk/quick-starts/angular-modal-quick-start',
            nextjs: 'Web3Auth/web3auth-pnp-examples/web-modal-sdk/quick-starts/nextjs-modal-quick-start',
            react: 'Web3Auth/web3auth-pnp-examples/web-modal-sdk/quick-starts/react-modal-quick-start',
            'react-vite': 'Web3Auth/web3auth-pnp-examples/web-modal-sdk/quick-starts/react-vite-modal-quick-start',
            vanillajs: 'Web3Auth/web3auth-pnp-examples/web-modal-sdk/quick-starts/vanillajs-modal-quick-start',
            vue: 'Web3Auth/web3auth-pnp-examples/web-modal-sdk/quick-starts/vue-modal-quick-start',
        },
        nomodal: {
            angular: 'Web3Auth/web3auth-pnp-examples/web-no-modal-sdk/quick-starts/angular-no-modal-quick-start',
            nextjs: 'Web3Auth/web3auth-pnp-examples/web-no-modal-sdk/quick-starts/nextjs-no-modal-quick-start',
            react: 'Web3Auth/web3auth-pnp-examples/web-no-modal-sdk/quick-starts/react-no-modal-quick-start',
            'react-vite': 'Web3Auth/web3auth-pnp-examples/web-no-modal-sdk/quick-starts/react-vite-no-modal-quick-start',
            vanillajs: 'Web3Auth/web3auth-pnp-examples/web-no-modal-sdk/quick-starts/vanillajs-no-modal-quick-start',
            vue: 'Web3Auth/web3auth-pnp-examples/web-no-modal-sdk/quick-starts/vue-no-modal-quick-start',
        },
        android: 'Web3Auth/web3auth-pnp-examples/android/android-quick-start',
        ios: 'Web3Auth/web3auth-pnp-examples/ios/ios-quick-start',
        'react-native': 'Web3Auth/web3auth-pnp-examples/react-native/rn-bare-quick-start',
        flutter: 'Web3Auth/web3auth-pnp-examples/flutter/flutter-quick-start',
        // Add more mappings as needed
    },
    'core-kit': {
        sfa: {
            web: 'Web3Auth/web3auth-core-kit-examples/single-factor-auth-web/quick-starts/sfa-react-quick-start',
            node: 'Web3Auth/web3auth-core-kit-examples/single-factor-auth-node/sfa-node-quick-start',
            android: 'Web3Auth/web3auth-core-kit-examples/single-factor-auth-android/sfa-android-quick-start',
            ios: 'Web3Auth/web3auth-core-kit-examples/single-factor-auth-ios/sfa-ios-quick-start',
            flutter: 'Web3Auth/web3auth-core-kit-examples/single-factor-auth-flutter/sfa-flutter-quick-start',
            'react-native': 'Web3Auth/web3auth-core-kit-examples/single-factor-auth-react-native/sfa-rn-bare-quick-start',
        },
        mfa: {
            web: 'Web3Auth/web3auth-core-kit-examples/tkey-web/quick-starts/tkey-react-quick-start',
            android: 'Web3Auth/web3auth-core-kit-examples/tkey-android/tkey-android-quick-start',
            ios: 'Web3Auth/web3auth-core-kit-examples/tkey-ios/tkey-ios-quick-start',
            'react-native': 'Web3Auth/web3auth-core-kit-examples/tkey-react-native/tkey-react-native-quick-start',
        }
    },
    // Add more mappings as needed
};

const getUserInput = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
};

const main = async () => {

    const [, , x, y, z] = process.argv;

    const folderName = await getUserInput('Enter the folder name: ');

    if (!repoMap[x] || !repoMap[x][y] || !repoMap[x][y][z]) {
        console.error(`Invalid combination of parameters: ${x} ${y} ${z}`);
        process.exit(1);
    }

    const repoUrl = repoMap[x][y][z];
    const command = `npx degit ${repoUrl} ${folderName}`;

    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Error executing command: ${command}`);
        process.exit(1);
    }

    console.log(`Project downloaded to: ${folderName}`);
    console.log(`To install dependencies, run: cd ${folderName} && npm install`);
    console.log(`To run the project, run: cd ${folderName} && npm run start`);
    rl.close();
};

main();
