# Stream Token Server

A simple Express.js server to generate Stream chat tokens securely.

## Setup

1. Create `.env` from the example:
   ```
   cp .env.example .env
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

## Endpoint

**POST** `/get-stream-token`

Headers:
- `Authorization: Bearer my_super_secret_key`
- `Content-Type: application/json`

Body:
```json
{ "uid": "your-user-id" }
```
