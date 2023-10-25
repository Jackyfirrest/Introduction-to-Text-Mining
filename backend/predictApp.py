import sys, os
import pickle
# import tensorflow
# import sklearn
from keras_bert import extract_embeddings
# from keras_bert import load_vocabulary
# from keras_bert import Tokenizer

sys.path.append(os.path.join(os.path.dirname(__file__), '..'))

model_path = './models/uncased_L-12_H-768_A-12'
dict_path = './models/uncased_L-12_H-768_A-12/vocab.txt'

def predict(review):
    review = [review]


    # 評論內容
    # print("sys.argv 內容：", sys.argv)
    # review = str()
    # for i in range(1, len(sys.argv)):
    #     review = review + sys.argv[i] + " "
    # review = [review]
    # print(review)

    # load model
    f2=open('./models/svm.model','rb')
    s2=f2.read()
    SVM_model2=pickle.loads(s2)
    # print(SVM_model2)

    # 輸出預測app
    embedding_t = extract_embeddings(model_path, review)
    x_test1 = []
    x_test1.append(embedding_t[0][0])
    predicted_results_linear_bert = []
    predicted_results_linear_bert.extend(SVM_model2.predict(x_test1))
    # print(predicted_results_linear_bert[0])
    
    return predicted_results_linear_bert[0]

