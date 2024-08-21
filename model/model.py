# from keras_preprocessing import image
# import tensorflow as tf
# from tensorflow.python.keras.models import load_model
# import numpy as np
# from PIL import ImageFile, Image

from keras_preprocessing import image
import tensorflow as tf
import numpy as np


model = tf.python.keras.load_model("simpleModel_30_04_2024.h5")
def detect(img):
    image_data = []
    original_image = Image.open(img)
    original_image = original_image.convert('RGB')
    original_image = original_image.resize(224,224)

    image_array = image.img_to_array(original_image)
    image_array[:] = image_array[:]/255
    image_data.append(image_array)
    data = np.array(image_data)

    labels = {
        0 : "Fake",
        1 : "Real"
    }

