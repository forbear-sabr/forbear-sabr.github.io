---
title : "Mongoose Connect"
pubDate : 2025-03-21
---

## Method 

```js
mongoose.connect()
```

## Mongoose Connect with MongoDB Compass(Local)

```javascript
mongoose.connect('mongodb://localhost:27017/database')
```

- This is default port (27017).
- `database` to connect database.
- If get error, change `localhost` to `127.0.0.1`.

```js
mongoose.connect('mongodb://127.0.0.1:27017/database')
```

## Mongoose Connect with MongoDB Altas

**Connection String Formats**

```javascript
mongoose.connect('mongodb+srv://<username>:<db_password>@<cluster>.xuqup.mongodb.net/')
```

- This is SRV connection format.
- SRV connection format with a hostname that correspongs to a DNS SRV record.
