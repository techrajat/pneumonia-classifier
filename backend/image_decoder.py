import numpy as np
from PIL import Image
import io
import base64

def decode_image(image_data):
    _, encoded_data = image_data.split(",", 1)
    decoded_data = base64.b64decode(encoded_data)
    image_file = io.BytesIO(decoded_data)
    image = Image.open(image_file)
    image = image.resize((300, 300)).convert("RGB")
    image_array = np.array(image)
    return image_array