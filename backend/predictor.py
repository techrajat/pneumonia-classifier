import numpy as np
from keras.models import load_model
from keras.utils import img_to_array, load_img

my_model = load_model('my_model.h5')

def predictor(img):
    # img = load_img(path=img_path, target_size=(300, 300), color_mode='rgb')
    # Resize the image
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    processed_img = img_array / 255.0
    prediction = (my_model.predict(processed_img) > 0.5).astype(int)
    return prediction