# Asset Chain Telegram Starter Kit Demo App 

This is a sample app showing builders how to develop Telegram Mini Apps on Asset Chain; using the official Asset Chain [Telegram Starter Kit](https://github.com/xendfinance/assetchain-telegram-app-starter-kit).

## Table of content
- [Getting Started](https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app#getting-started)
- [Contributing](https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app#contributing)
- [License](https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app#license)
- [Support](https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app#support)

## Getting Started
To get started, follow the steps below:

1. Clone this repo
2. cd into any of the projects
3. Install the project's dependencies

``` bash
git clone https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app.git
cd assetchain-telegram-starterkit-demo-app
```

---

For further details and configuration tips, refer to the [AssetChain Telegram App Starter Kit Documentation](https://www.npmjs.com/package/assetchain-telegram-app-starter-kit).

### Troubleshooting WebSocket Connection Error

When integrating with WalletConnect, you may encounter the following WebSocket error:

```plaintext
WebSocket connection to 'wss://relay.walletconnect.org/?auth=<auth-key>' failed:
```

This error occurs when the WebSocket connection to WalletConnect's relay server cannot be established, often due to regional restrictions or network firewalls blocking access to `wss://relay.walletconnect.org`. To bypass this issue, it’s recommended to use a Virtual Private Network (VPN) to reroute your connection, which may allow you to connect without interference.

**Steps to resolve:**
1. Enable a VPN and select a region with unrestricted access to `cloud.reown.com` services.
2. Retry the connection through your application to see if the issue is resolved.

---

---

### Getting Started with Telegram Mini Apps

To start building a Telegram Mini App:

- **Read the Docs**: Visit the [Telegram Mini Apps Guide](https://core.telegram.org/bots/webapps#initializing-mini-apps) for steps to set up and initialize your app.

--- 

## Contributing

See [CONTRIBUTING.md](https://github.com/xendfinance/assetchain-telegram-starterkit-demo-app/CONTRIBUTING.md) for contribution and pull request protocol. We expect contributors to follow our guide when submitting code or comments.

## License

[![License: GPL v3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or suggestions, just say Hi on [Telegram](https://t.me/assetchainbuilders).<br/>
We're always glad to help.
