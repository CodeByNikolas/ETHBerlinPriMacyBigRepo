This Project is a Fork off of https://github.com/yashgo0018/maci-wrapper
(even though it is not shown in the top of the repository)

# PriMaci Frontend Voting Template

Welcome to the PriMaci Frontend Voting Template!

## Features

-   **Voter Registration**: Secure registration process through the MACI contract, enabling eligible voting.
-   **Poll Management**: Admins can easily create and manage polls, including question and options setup.
-   **Secure Voting**: Leverage MACI's privacy-preserving technology to ensure votes are cast anonymously and securely.
-   **Results Display**: Transparent display of poll results after the voting phase concludes.
-   **Admin Dashboard**: Comprehensive admin interface for poll oversight, including current status and results analytics.

## Requirements

Ensure you have the following tools installed before you proceed:

-   [Node (>= v18.17)](https://nodejs.org/en/download/)
-   Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
-   [Git](https://git-scm.com/downloads)

## Quickstart

Jumpstart your development with these simple steps:

1. **Clone and Set Up the Project**

```bash
git clone https://github.com/CodeByNikolas/ETHBFrontEnd
cd ETHBFrontEnd
yarn install
```

2. **Add the Previous Deployment Contracts from the Backend**

You should either already have to contract addresses, that you want to use on Sepolia, or you can deploy your own using: https://github.com/CodeByNikolas/EthBBackend

Copy the Contract adresses from your Backend deployment into the

```
/pachages/nextjs/contracts/deployedContracts.ts
```

also make sure to copy the deployment folder over to

```
/pachages/hardhat/deployments
```

3. **Launch the NextJS Application**

In a terminal, start the NextJS frontend:

```bash
cd packages/nextjs
yarn install
yarn start
```

## Usage

After setting up the project, you can:

-   **Register**: Use the app's interface to register with the MACI contract and gain voting rights.
-   **Create Polls**: As an admin, you can create polls with custom questions and options.
-   **Vote**: Registered voters can participate in polls, utilizing MACI's secure voting mechanism.
-   **View Results**: Access poll outcomes after the voting phase ends.
-   **Admin Dashboard**: Monitor and manage ongoing polls, including viewing detailed poll status.

## Contributing

Your contributions are welcome! Feel free to report issues, submit fixes, or suggest new features to enhance the project.

## License

This project is licensed under the [MIT License](LICENSE).
