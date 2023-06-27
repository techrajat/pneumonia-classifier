import numpy as np
from keras.models import load_model
from keras.utils import img_to_array, load_img

my_model = load_model('my_model.h5')

def predict_pneumonia(img_array):
    img_array = np.expand_dims(img_array, axis=0)
    processed_img = img_array / 255.0
    prediction = (my_model.predict(processed_img) > 0.5).astype(int)
    return prediction