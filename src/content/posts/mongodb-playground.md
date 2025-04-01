---
title: 'Mongodb & Visual Code Studio'
pubDate : 2025-03-28
---

|Student Name     |Age    |Team        |Genre|Student Year|
|-----------------|-------|------------|-----|------------|
|Sakura Haruka    |15     |bofurin     |male |student     |
|Sako Kouta       |17     |shishitoren |male |student     |
|Tachibana Kotoha |16     |No Team     |male |student     |
|Hiiragi Touma    |17     |bofurin     |male |student     |
|Nirei Akihiko    |15     |bofurin     |male |student     |
|Tomiya Choji     |16     |shishitoren |male |student     |
|Unemiya Hajime   |17     |bofurin     |male |student     |
|Suo Hayato       |15     |bofurin     |male |student     |
|Kaji Ren         |16     |bofurin     |male |student     |
|Togame Jo        |17     |shishitoren |male |student     |


*How to make CRUD with Mongodb Playground*


## Create a Database

```js
use('windBreaker');
```

## Create a Collection

```js
db.createCollection('students');
```

## Create a One Document

**Q** : Please register new student.

```js
db.getCollection('students').insertOne(
    {
        "name" : "Sakura Haruka", "age" : 15, "team": "bofurin", "student": "student", "genre": "male"
    }
)
```

## Create a Many Document

**Q** : Please register all new student in single operation.

```js
db.getCollection('students').insertMany(
    [
        {"name": "Hiiragi Touma", "age": 17, "team": "bofurin", "student": "student", "genre":"male"},
        {"name": "Tomiya Choji", "age": 17, "team": "shishitore", "student": "student", "genre":"male"},
        {"name": "Nirei Akihiko", "age": 15, "team": "bofurin", "student": "student", "genre":"male"},
        {"name": "Kaji Ren", "age": 16, "team": "bofurin", "student": "student", "genre":"male"},
        {"name": "Togame Jo", "age": 17, "team": "shishitore", "student": "student", "genre":"male"},
        {"name": "Tachibana Kotoha", "age": 16, "team": "bofurin", "student": "student", "genre":"male"},
        {"name": "Sako Kouta", "age": 17, "team": "shishitore", "student": "student", "genre":"male"},
        {"name": "Unemiya Hajime", "age": 17, "team": "bofurin", "student": "student", "genre":"male"},
        {"name": "Suo Hayato", "age": 15, "team": "bofurin", "student": "student", "genre":"male"},
    ]
)
```

## Read a All Document

**Q** : Please show all student.

```js
db.getCollection('students').find({});
```

## Read Document with Query

**Q** : Please show all student who are 15 year old.

```js
db.getCollection('students').find(
    {
        "age" : 15
    }
)
```

## Read a One Document

**Q** : Please show the detail of a student named *Tachibana Kotoha*.

```js
db.getCollection('students').findOne(
    {
        "name": "Tachibana Kotoha"
    }
)
```

## Update a Document

**Q** : Tachibana Kotoha's student detail are incorrect. Please change Tachibana Kotoha's *genre* to 
*female*.

```js
db.getCollection('students').updateOne(
    { "name": "Tachibana Kotoha" },
    { "$set": { "gerne": "female"}}
)
```

> `updateOne()`
>
> **Filter** - Select one student detail.
>
> **update** - Use `$set` operators to define the changes.

## Update a Many Document

**Q** : Please change *student* detail to *first year* for all student who are 15 year old.

```js 
db.getCollection('students').updateMany(
    { "age": 15 },  // filter
    { $set: { "student": "first year" }}
)
```

> `updateMany{}`
>
> **Filter** - Select a age detail
>
> **update** - Use `$set` operators to define the change.

## Delete a Document

**Q** : Please remove *Tachibana Kotoha's* detail.

```js
db.getCollection('students').deleteOne(
    {"gerne" : "female"}
)
```

## Delete a Many Document

**Q** : Please remove all *Shishitore* teams.

```js
db.getCollection('students').deleteMany(
    { "team": "shishitore" }
)