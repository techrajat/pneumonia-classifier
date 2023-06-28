# Pneumonia Classifier

![GitHub repo size](https://img.shields.io/github/repo-size/techrajat/pneumonia-classifier)
![GitHub contributors](https://img.shields.io/github/contributors/techrajat/pneumonia-classifier)
![GitHub stars](https://img.shields.io/github/stars/techrajat/pneumonia-classifier?style=social)

The Pneumonia Classifier is a machine learning model that uses chest X-ray images to classify whether a person has pneumonia or not. This project includes a Jupyter Notebook containing the model implementation and the user interface consists of a React website connected to a Flask backend.

## Dataset Citation

The dataset used for training and testing the model is the "Labeled Optical Coherence Tomography (OCT) and Chest X-Ray Images for Classification" dataset provided by Daniel S. Kermany, Kang Zhang and Michael Goldbaum.

- Dataset Citation: http://www.cell.com/cell/fulltext/S0092-8674(18)30154-5
- Data: [Download Dataset](https://data.mendeley.com/datasets/rscbjbr9sj/2)

## Installation

1. Clone the repository:
   ```shell
   git clone https://github.com/techrajat/pneumonia-classifier.git
   ```

2. Set up the backend:
   - Navigate to the backend directory:
     ```shell
     cd pneumonia-classifier/backend
     ```
   - Create a virtual environment (optional):
     ```shell
     python -m venv myenv
     ```
   - Activate the virtual environment:
     - On Windows:
       ```shell
       myenv\Scripts\activate
       ```
     - On macOS/Linux:
       ```shell
       source myenv/bin/activate
       ```
   - Install the project dependencies:
     ```shell
     pip install -r requirements.txt
     ```

3. Set up the frontend:
   - Navigate to the root directory:
     ```shell
     cd ../
     ```
   - Install the frontend dependencies:
     ```shell
     npm install
     ```

## Usage

1. Start the backend server:
   - Navigate to the backend directory:
     ```shell
     cd pneumonia-classifier/backend
     ```
   - Activate the virtual environment (if using one):
     - On Windows:
       ```shell
       myenv\Scripts\activate
       ```
     - On macOS/Linux:
       ```shell
       source myenv/bin/activate
       ```
   - Run the Flask server:
     ```shell
     python app.py
     ```

2. Start the frontend development server:
   - Open a new terminal and navigate to the root directory:
     ```shell
     cd pneumonia-classifier
     ```
   - Run the React development server:
     ```shell
     npm start
     ```

3. Access the Pneumonia Classifier website:
   - Open your web browser and visit: [http://localhost:3000](http://localhost:3000)

## Architecture

The Pneumonia Classifier consists of a React frontend for user interaction and a Flask backend for serving the machine learning model.

- The React frontend provides a user-friendly interface for uploading chest X-ray images and displaying the classification results.
- The Flask backend handles the image classification process and communicates with the frontend to send the results back to the user.

The interaction between the frontend and backend follows the following steps:

1. The user uploads a chest X-ray image through the React frontend.
2. The React frontend sends the image to the Flask backend via an HTTP request.
3. The Flask backend receives the image and performs the classification using the trained machine learning model.
4. The Flask backend sends the classification results back to the React frontend.
5. The React frontend displays the results to the user.

This architecture allows for a seamless integration between the machine learning model and the user interface, providing a smooth user experience for pneumonia classification based on chest X-ray images.