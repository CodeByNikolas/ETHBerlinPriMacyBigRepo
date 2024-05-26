This Project is a Fork off of https://github.com/yashgo0018/maci-wrapper
(even though it is not shown in the top of the repository)

# PriMaci Backend Voting Template

Welcome to the PriMaci Backend Voting Template!

## Features

-   **Deployment of Contracts on Sepolia**: Easy Deployment of the Smart contracts on Sepolia using Hardhat

## Deployed Contracts

Contracts are Deployed on the Sepolia Testnet.

ConstantInitialVoiceCreditProxy: "0x332ea6D019e40fe440c36efA31Ffa26aB95e6449"<br>
FreeForAllGatekeeper: "0x9fE23118a2e1fd77B12C7c3Ea8276DE782bFAcc9"<br>
MACIWrapper: "0x0228795053F899a28f29c8acEce7f813BCFe9F3C"<br>
MessageProcessorFactory: "0xE31b7c3E58b5D678FF5F6e6d5e5f42f255a570f3"<br>
PollFactory: "0xa6a222Aa2b0BA74Ecc1155c6eeeE7CBaF79DA67a"<br>
PoseidonT3: "0xbE7CE64159F3848d24c280c88C2E88D2BDaD6B59"<br>
PoseidonT4: "0xA439784b59d3239d0914232391397B674eA1303C"<br>
PoseidonT5: "0x182872214D06528B03910569c74EeB6740D52940"<br>
PoseidonT6: "0x8f34FfF7E14Aed8B0Df84Ac340EBc5661ECfaEbF"<br>
TallyFactory: "0x7D493033383A7433BAfDBfE2E3bbF59eBD36F090"<br>
TopupCredit: "0x43451A452d265a82F181742A7621EB91dA165adC"<br>
Verifier: "0xbB311c742c03D75db24a2a7Eb59D500431b423e2"<br>
VkRegistry: "0x280F716a21FfcFAF55038787ceF3f4361A73B57d"<br>

## Requirements

Ensure you have the following tools installed before you proceed:

-   [Node (>= v18.17)](https://nodejs.org/en/download/)
-   Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
-   [Git](https://git-scm.com/downloads)

## Quickstart

Jumpstart your development with these simple steps:

1. **Clone and Set Up the Project**

```bash
git clone https://github.com/CodeByNikolas/EthBBackend
cd EthBBackend
yarn install
```

2. **Download the zkeys for the maci circuits**

In your first terminal window, run:

```bash
yarn download-zkeys
```

These Files are quite big so it will take a short while. These files are also the reason why we split up our Repo into Back- and Frontend because I was not able to include those big files in a working vercel Deployment

3. **Update the environment variables**

Copy the env example files to env files

```bash
cp packages/hardhat/.env.example packages/hardhat/.env
cp packages/nextjs/.env.example packages/nextjs/.env.local
```

Update the values of the env variables in these new .env files (In this case especially the hardhat .env file)

4. **Deploy Contracts**

First delete the deployment folder to delete the existing contracts

In a terminal, deploy your test contracts on sepolia using:

```bash
cd packages/hardhat
yarn install
yarn download-zkeys
yarn deploy --network sepolia
```

Find the contract in `packages/hardhat/contracts`. This script deploys your contract to Sepolia, with customization available in `packages/hardhat/deploy`.

5. **Compute Results**

-   In a terminal, clone the maci repo - `git clone git@github.com:privacy-scaling-explorations/maci.git` and then reset to `ee3e2a6` commit using `git reset --hard ee3e2a6` (I also dont know why sorry)
-   Copy the zkeys generated from the maci wrapper repo to the cli directory of the maci repo using `cp -r maci-wrapper/packages/hardhat/zkeys maci/cli`.
-   Install the dependencies using `pnpm i` and build the maci project using `pnpm run build`
-   Copy the new contract addresses from the maci wrapper repo to the maci repo using `cp -r maci-wrapper/packages/contractAddresses.json maci/cli/build/contractAddresses.json`.
-   After this you should be able to run the commands written in the [maci documentation](https://maci.pse.dev/docs/v1.2/cli).
-   First merge signups, then merge messages, and then generate proof, and upload the tally.json file which is generated in the process to the admin panel after the poll is over.

Navigate to `http://localhost:3000` (In your Frontend that you cloned from https://github.com/CodeByNikolas/ETHBFrontEnd/) to interact with your dApp. Modify your app configuration in `packages/nextjs/contracts.config.ts` and `packages/hardhat/constants.ts` as necessary.
And also in `packages/nextjs/deployedContracts.ts` as also in `packages/hardhat/deployments/` (Copy them over from the Backend)

The deployed contracts will be saved to the file `packages/hardhat/contractAddresses.json`, this file is compatible with maci cli.

The coordinator keys will be stored in the file `packages/hardhat/coordinatorKeyPair.json`.

## Usage

After setting up the project, you can:

-   **Launch**: Launch the Contracts to Sepolia, to use them in your Frontend
-   **Compute**: Compute valid proofs using the Maki library and the Maki repository

## Contributing

Your contributions are welcome! Feel free to report issues, submit fixes, or suggest new features to enhance the project.

## License

This project is licensed under the [MIT License](LICENSE).
