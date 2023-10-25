# rePlay
## Intro
This website analysis google play reviews. User can quickly look into the review highlight of several apps. 

## frontend

```
cd frontend
yarn install
yarn start
```

## backend

1. 先載 pyenv(https://www.maxlist.xyz/2020/04/01/python-pyenv-virtualenv/ )，在pyenv中下載 python3.9.2 的版本 \
2. 建置 python3.9 的環境 \
   ```
   cd backend
   python3 -m virtualenv -p ~/.pyenv/versions/3.9.2/bin/python rePlay-env
   ```
3. 進入虛擬環境 \
   `source rePlay-env/bin/acitvate`
4. 下載所需套件
   ` pip3 install -r requirements.txt`
5. 打開後端
   ` python3 app.py`
6. 測試（得到 hello world 即可）
   `curl http://127.0.0.1:8000/helloWorld`

### 其他後端溫馨小貼士

- save packages in requirements.txt \
   `pip3 freeze > requirements.txt `
- activate virtual env \
   `source Traviewl-backend/bin/activate`
- deactivate \
   `deactivate`
- vs code 開後端盡量直接開 backend 的 folder，文字編輯區塊會比較好看到編譯的提示
- vs code terminal 不想一直打 activate 可以參考這篇 (https://pythonviz.com/vscode/visual-studio-code-virtual-environment-setup/)
