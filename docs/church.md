---
title: 華人教會名錄 API
sidebar_position: 2
description: 華人教會名錄 API 整合說明文件
---

# 華人教會名錄 API

## 📋 申請流程

在開始使用 API 之前，請先申請 API KEY。請將以下資訊寄送至 info@ccnda.org：

1. 使用目的
2. 使用者相關聯絡資訊

我們會在收到申請後，盡快為您處理並提供所需的 `api_key`。

## 🔐 API 存取說明

- API 採用 HTTPS 加密傳輸
- 所有請求都需要在 URL 中包含您的 `api_key`
- 基礎 URL：`https://church.oursweb.net/api/`

## 📚 API 端點說明

### 取得單筆教會資訊

```
GET https://church.oursweb.net/api/{api_key}/oid/{教會編號}
```

#### 回傳資料欄位

| 欄位 | 說明 |
|------|------|
| oid | 編碼 |
| ocname | 中文名稱 |
| ocnick | 中文別名 |
| oename | 英文名稱 |
| oenick | 英文別名 |
| president | 職稱 |
| cname | 代表人 |
| tel | 電話 |
| fax | 傳真 |
| email1 | 電子郵件 |
| code | 國碼 |
| country | 國名 |
| city | 城市 |
| town | 鄉鎮 |
| zipcode | 郵碼 |
| address | 地址1 |
| address2 | 地址2 |
| lat | 緯度 |
| lng | 經度 |
| udate | 更新日期 |
| orgpid | 宗派編碼 |
| porg_cname | 宗派名稱 |

#### 聚會時間資料結構

```json
{
    "meet": {
        "0": {
            "mname": "聚會名稱",
            "mweek": "週幾",
            "mbhour": "開始時",
            "mbminute": "開始分",
            "mehour": "結束時",
            "meminute": "結束分"
        }
    }
}
```

### 搜尋範圍內教會機構

```
GET https://church.oursweb.net/api/{api_key}/latlng/{lat},{lng},{distance}
```

| 參數 | 說明 |
|------|------|
| lat | 緯度 |
| lng | 經度 |
| distance | 搜尋半徑（公尺） |

### 關鍵字搜尋

```
GET https://church.oursweb.net/api/{api_key}/search/{keyword}
```

### 取得教會圖片

```
GET https://church.oursweb.net/api/img/{oid}
```

### 取得所有資料

```
GET https://church.oursweb.net/data/church.json
```

#### 資料欄位說明

| 欄位 | 說明 |
|------|------|
| og | 類別 |
| oc | 中文名稱 |
| oe | 英文名稱 |
| mt | 職稱 |
| mn | 代表人 |
| em | 電子郵件 |
| t | 電話 |
| f | 傳真 |
| cc | 國別簡稱 |
| co | 國別中文 |
| z | 郵遞區號 |
| cy | 城市 |
| tn | 城市 |
| a1 | 地址1 |
| a2 | 地址2 |
| lt | 緯度 |
| lg | 經度 |
| ul | 網址 |
| ud | 修改日期 |
| pd | 宗派編碼 |

## 🔄 資料更新與回報

### 回報錯誤資訊

```
POST https://church.oursweb.net/api/{api_key}/report/{oid}
```

#### 請求參數

| 參數 | 說明 |
|------|------|
| email | 回報者 Email |
| report | 回報內容 |

### 登錄新資料

```
POST https://church.oursweb.net/api/{api_key}/add_data
```

#### 請求參數

| 參數 | 說明 |
|------|------|
| ocname | 教會名稱 |
| passwd | 管理密碼 |
| code | 國家（兩個字元，例：TW） |
| tel | 電話 |
| email1 | Email |
| zipcode | 郵遞區號 |
| city | 城市 |
| area | 區域 |
| address | 地址 |

## 📞 技術支援

如有任何技術問題或需要協助，請聯絡我們：
- Email：info@ccnda.org