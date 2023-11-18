# rePlay
## Intro
This website analysis google play reviews. User can quickly look into the review highlight of several apps. The main functionalities will be based on three aspects: firstly, predicting the app that users desire based on the comments they input; secondly, identifying the most common positive and negative keywords in each category, as well as the pros and cons of apps; and finally, extracting essential aspects of each app for users as functional references. 

## frontend

```
cd frontend
yarn install
yarn start
```

## backend

1. Download pyenv(https://www.maxlist.xyz/2020/04/01/python-pyenv-virtualenv/ )，download version of python3.9.2 in pyenv \
2. build python3.9 environment \
   ```
   cd backend
   python3 -m virtualenv -p ~/.pyenv/versions/3.9.2/bin/python rePlay-env
   ```
3. virtual environment \
   `source rePlay-env/bin/acitvate`
4. download requirement documents
   ` pip3 install -r requirements.txt`
5. open back-end
   ` python3 app.py`
6. test（get hello world）
   `curl http://127.0.0.1:8000/helloWorld`

### other back-end reminding

- save packages in requirements.txt \
   `pip3 freeze > requirements.txt `
- activate virtual env \
   `source Traviewl-backend/bin/activate`
- deactivate \
   `deactivate`
