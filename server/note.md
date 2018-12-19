# use case

```
admin = {
    publish
    edit
    delete
    comment
    login
}

user = {
    explore
    comment
    search
    signup /?
    login /?
}
```

# data base
```
article = {
    id (pk)
    title
    publish-time
    tag
    content
}

comment = {
    aId (article: id)
    id (pk)
    content
    time-stamp
    author/signature
    comment (aId / id)
    floor
}
```