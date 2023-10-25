import pymongo
from bson.objectid import ObjectId
import re

from predictApp import predict

def connect():
    client = pymongo.MongoClient("mongodb+srv://mongodb:mongodb@cluster0.rcmouet.mongodb.net/?retryWrites=true&w=majority")
    db = client.rePlay
    return db

def getSearchApps(keyword):
    db = connect()
    appCl = db.App
    data = list(appCl.find({'name':{'$regex':keyword}}))
    keywordCl = db.Keyword

    returnData = [{
        "app_id": str(x["_id"]),
        "app_name": x["name"],
        "app_image": x["image"], 
        "app_category": x['category'], 
        "app_rating": x['rating'],
        "advantage": [ keywordCl.find_one({"_id": ObjectId(y)})["text"] for y in x["advantage"] ],
        "disadvantage": [ keywordCl.find_one({"_id": ObjectId(y)})["text"] for y in x["disadvantage"] ]
    } for x in data]

    
    return returnData



def getApps():
    db = connect()
    app = db.App
    keyword = db.Keyword

    data = list(app.find(
        {'$or': [
            {"keyword.0": {"$exists": True}},
            {"advantage.0": {"exists": True}},
            {"disadvantage.0": {"exists": True}}
        ]}
    ))
    
    returnData = [{
        "app_id": str(x["_id"]),
        "app_name": x["name"],
        "app_image": x["image"],
        "app_category": x['category'],
        "app_rating": x['rating'],
        "advantage": [e['text'] for e in list(keyword.find({"_id": {"$in": [ObjectId(y) for y in x['advantage']]}}))],
        "disadvantage": [e['text'] for e in list(keyword.find({"_id": {"$in": [ObjectId(y) for y in x['disadvantage']]}}))]
    } for x in data ]

    return returnData

def getAppsContent(app_id):
    db = connect()
    app = db.App
    keywordCl = db.Keyword
    app_id = ObjectId(app_id)

    data = app.find_one({ '_id': app_id })

    returnData = {
        'app_id': str(data['_id']),
        'app_name': data['name'],
        'app_image': data['image'], 
        'app_category': data['category'], 
        'app_rating': data['rating'],
        'keywords': [e['text'] for e in list(keywordCl.find({"_id": {"$in": [ObjectId(x) for x in data['keyword']]}}))],
    },

    return returnData[0]

def getAppAspect(app_id, aspect):
    db = connect()
    appCl = db.App
    reviewCl = db.Review
    app_id = ObjectId(app_id)
    

    appData = appCl.find_one({ '_id': app_id })
    print(appData["aspect_review"][aspect])
    reviewData = list(reviewCl.find({"_id": {"$in": [ObjectId(x) for x in appData["aspect_review"][aspect]]}}))
    print(reviewData)
    returnData = [{
        "review_id": str(x["_id"]),
        "text": x["text"],
        "sentiment": x["sentiment"]
    } for x in reviewData]


    return returnData

def getPrediction(review):
    db = connect()
    app = db.App
    keywordCl = db.Keyword

    name = predict(review)
    data = app.find_one({ 'name': name })

    returnData = {
        'app_id': str(data['_id']),
        'app_name': data['name'],
        'app_image': data['image'], 
        'app_category': data['category'], 
        'app_rating': data['rating'],
        'keywords': [e['text'] for e in list(keywordCl.find({"_id": {"$in": [ObjectId(x) for x in data['keyword']]}}))],
    },

    return returnData[0]