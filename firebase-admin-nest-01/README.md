### 実行方法

1. firebase の秘密鍵を取得する
2. env に秘密鍵を設定する
3.

```bash
export GOOGLE_APPLICATION_CREDENTIALS=秘密鍵のパス
echo $GOOGLE_APPLICATION_CREDENTIALS
```

4. yarn start:dev

---

- [Params](https://docs.nestjs.com/custom-decorators#param-decorators)

- [DI の分かりやすい説明](https://blog.shgnkn.io/dependency-injection-in-nestjs/)

---

"project_id": "doctormate-tech-admin",

---

```
http://localhost:3000/user/test/facility-users
```

get
```bash
curl localhost:3000/auth/test/12
```
post
```bash
curl -X POST http://localhost:3000/auth/create
```  
post body
```bash
curl -X POST -d 'name=太郎' http://localhost:3000/auth/create
```
post json
```bash
`curl -X POST -H "Content-Type: application/json" -d '{"name":"太郎"}' http://localhost:3000/auth/create
```

---

## [参考記事](https://firebase.google.com/docs/auth/admin/verify-id-tokens?hl=ja)

## cloud functions

- [firestore のドキュメントの変更をトリガーにする](https://cloud.google.com/firestore/docs/extend-with-functions?hl=ja)
