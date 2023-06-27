from flask import *
app = Flask(__name__)

from flask_cors import CORS
CORS(app)

import predictor
import image_decoder

# Route for predicting Pneumonia :-
@app.route('/predict', methods=['POST'])
def predict():
    imageData = request.form['imageData']
    image_array = image_decoder.decode_image(imageData) # Decode and preprocess the image to an array
    prediction = predictor.predict_pneumonia(image_array) # Get prediction using the model
    prediction = int(prediction[0][0])
    return {"prediction": prediction}, 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)