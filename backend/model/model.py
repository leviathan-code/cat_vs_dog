import os
import tensorflow as tf
os.environ["CUDA_VISIBLE_DEVICES"]="-1"    
from PIL import Image
import numpy as np
from io import BytesIO

def read_imagefile(file) -> Image.Image:
    image = Image.open(BytesIO(file))

    return image


def prepare_img(image: Image.Image):
    image = np.asarray(image.resize((32, 32)))
    image = np.expand_dims(image, 0)

    return image 


def predict(image: Image.Image):
    image = prepare_img(image)

    model = tf.keras.models.load_model(r"..\CNN")
    
    predictions = model.predict(image)[0]
    
    if predictions[0] > 0.5:
        return f'cat {round(100 * predictions[0], 2)}%'
    else:
        return f'dog {round(100 * predictions[1], 2)}%'
