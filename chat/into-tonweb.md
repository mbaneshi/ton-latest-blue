3.  **Network Configuration:**
    - **Default Network:** By default, the library uses the mainnet API from `toncenter.com`.
    - **API Keys:** To avoid rate limits, you can pass your TonCenter API keys when creating a TonWeb instance to use high ratelimit.
        ```js
        const tonweb = new TonWeb(
            new TonWeb.HttpProvider('https://toncenter.com/api/v2/jsonRPC', {
                apiKey: 'YOUR_MAINNET_TONCENTER_API_KEY',
            }),
        );
        ```
    - **Testnet Support:** You can configure it to use the testnet instead of the mainnet:
        ```js
        const tonweb = new TonWeb(
            new TonWeb.HttpProvider('https://testnet.toncenter.com/api/v2/jsonRPC', {
                apiKey: 'YOUR_TESTNET_TONCENTER_API_KEY',
            }),
        );
