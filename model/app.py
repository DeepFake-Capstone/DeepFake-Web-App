from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from keras_preprocessing import image
from PIL import Image

from flask_cors import CORS 

app = Flask(__name__)

CORS(app)

model = tf.keras.models.load_model('simpleModel_30_04_2024.h5')

def preprocess_image(img_path):
    image_data = []
    img = image.load_img(img_path,target_size=(224,224))
    img_array = image.img_to_array(img)
    img_array[:] = img_array[:]/255
    image_data.append(img_array)
    data = np.array(image_data) 
    return data



@app.route('/')
def index():
    return jsonify({"Message":"Hello from Flask"})

@app.route('/predict',methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'})

    image = request.files['image']

    img_path = 'temp.jpg'  # Temporary file path
    image.save(img_path)

    preprocessed_image = preprocess_image(img_path)
    prediction = model.predict(preprocessed_image)
    predicted_class = np.argmax(prediction)

    # Assuming you have class labels
    class_labels = ['Fake', 'Real']

    return jsonify({'predicted_class': class_labels[predicted_class]})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)