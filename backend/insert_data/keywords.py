import sys, os
sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

from database import connect
from bson.objectid import ObjectId
from datetime import datetime
import pandas as pd

db = connect()
keyword = db.Keyword
app = db.App

def insert_advantage(path='../data/keywords.xlsx'):
    df = pd.read_excel(path)
    df = df[['App', 'Positive']]

    for idx, row in df.iterrows():
        name = row['App']
        ids = []
        
        for term in row['Positive'].split():
            # insert
            query = keyword.find_one({'text': term}, {'text': 0})
            if query:
                ids.append(str(query['_id']))
            else:
                _id = keyword.insert_one({'text': term}).inserted_id
                ids.append(str(_id))

        # update
        filter = { 'name': name }
        newvalues = { "$set": { 'advantage': ids } }
        app.update_one(filter, newvalues)

def insert_disadvantage(path='../data/keywords.xlsx'):
    df = pd.read_excel(path)
    df = df[['App', 'Negative']]

    for idx, row in df.iterrows():
        name = row['App']
        ids = []
        
        for term in row['Negative'].split():
            # insert
            query = keyword.find_one({'text': term}, {'text': 0})
            if query:
                ids.append(str(query['_id']))
            else:
                _id = keyword.insert_one({'text': term}).inserted_id
                ids.append(str(_id))

        # update
        filter = { 'name': name }
        newvalues = { "$set": { 'disadvantage': ids } }
        app.update_one(filter, newvalues)

def insert_keyword(path='../data/keywords.xlsx'):
    df = pd.read_excel(path)
    df = df[['App', 'All']]

    for idx, row in df.iterrows():
        name = row['App']
        ids = []
        
        for term in row['All'].split():
            # insert
            query = keyword.find_one({'text': term}, {'text': 0})
            if query:
                ids.append(str(query['_id']))
            else:
                _id = keyword.insert_one({'text': term}).inserted_id
                ids.append(str(_id))

        # update
        filter = { 'name': name }
        newvalues = { "$set": { 'keyword': ids } }
        app.update_one(filter, newvalues)

insert_advantage()
insert_disadvantage()
insert_keyword()