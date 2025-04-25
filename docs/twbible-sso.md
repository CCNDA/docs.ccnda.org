---
title: 台灣聖經網 SSO 登入系統
sidebar_position: 1
description: 台灣聖經網 SSO 登入系統整合說明文件
---
# 台灣聖經網 SSO 登入系統

🔗 線上 DEMO：[https://app.ccnda.net/sso-demo/](https://app.ccnda.net/sso-demo/)

## 📋 申請流程

在開始整合之前，請先申請 API 存取權限。請將以下資訊寄送至 info@ccnda.org：

1. 服務名稱
2. 網域名稱（主網域即可涵蓋所有子網域）
3. 服務條款網址
4. 隱私權政策網址

我們會在收到申請後，盡快為您處理並提供所需的 `client_id`。

## 🚀 快速開始

### 步驟 1：引入 SDK

將以下程式碼加入您的 HTML 檔案的 `<head>` 或 `<body>` 區塊中：

```html
<script src="https://api.taiwanbible.com/sso/sdk/sdk.min.js" crossorigin="anonymous"></script>
```

### 步驟 2：準備登入按鈕容器

在您想要顯示登入按鈕的位置加入：

```html
<div id="twbible_login"></div>
```

### 步驟 3：初始化

```javascript
twbible.init({
    client_id: YOUR_CLIENT_ID,    // 您的客戶端 ID
    back: window.location.href,   // 登入成功後的回調網址
    container: "#twbible_login"   // 登入按鈕容器
});
```

## 📝 完整程式碼範例

```html
<!DOCTYPE html>
<html>
<head>
    <title>台灣聖經網 SSO 登入範例</title>
</head>
<body>
    <!-- 步驟 2：登入按鈕容器 -->
    <div id="twbible_login"></div>

    <!-- 步驟 1：引入 SDK -->
    <script src="https://api.taiwanbible.com/sso/sdk/sdk.min.js" crossorigin="anonymous"></script>

    <!-- 步驟 3：初始化 -->
    <script>
        twbible.init({
            client_id: YOUR_CLIENT_ID,
            back: window.location.href,
            container: "#twbible_login"
        });

        // 步驟 4：處理登入回調
        window.addEventListener('twbible:login', function(event) {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            // 處理 token...
        });
    </script>
</body>
</html>
```

## 🔒 安全性驗證

### JWT Token 驗證

為確保安全性，請務必在伺服器端驗證 Token。以下是驗證所需的公鑰：

```text
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEiaMqkVpKS9Fc+zM7o+BkhUNRO2E/
iFic+aXN+vVoIGPc6/0htZ7k5jq2OWZaezq3/FazJxDZ5PSai+LuwlFsrQ==
-----END PUBLIC KEY-----
```

### Node.js 驗證範例

```javascript
const jwt = require('jsonwebtoken');
const fs = require('fs');

const publicKey = fs.readFileSync('public.key');

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, publicKey, { algorithms: ['ES256'] });
        return decoded;
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return null;
    }
}
```

## 📊 回傳資料格式

成功登入後，JWT Token 會包含以下資訊：

```json
{
    "ID": "用戶ID",
    "Username": "用戶名",
    "Name": "用戶暱稱",
    "Email": "用戶信箱",
    "Avatar": "用戶頭貼網址", 
    "iat": "簽發時間",
    "exp": "過期時間",
    "iss": "taiwanbible"
}
```

## ⚠️ 重要注意事項

1. **安全性檢查清單**

   * ✅ 使用 HTTPS 進行所有通訊
   * ✅ 在伺服器端驗證 Token
   * ✅ 檢查 Token 的過期時間
2. **常見問題處理**

   ```javascript
   function handleError(error) {
       console.error('Error:', error);
       // 實作適當的錯誤處理機制
   }
   ```

## 📚 API 參考

### 初始化選項

| 參數        | 類型     | 說明              |
| --------- | ------ | --------------- |
| client_id | Number | 您的客戶端 ID        |
| back      | String | 登入成功後的回調 URL    |
| container | String | 登入按鈕容器的 CSS 選擇器 |

### 事件

| 事件名稱          | 說明         |
| ------------- | ---------- |
| twbible:login | 當用戶成功登入後觸發 |

## 📞 技術支援

如有任何技術問題，請聯絡台灣聖經網團隊。
