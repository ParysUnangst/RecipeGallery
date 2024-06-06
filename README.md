# Recipe Gallery App

This is an Expo React application that showcases an interactive recipe gallery. The gallery displays images from a predefined list, and users can navigate through the images using "Next" and "Previous" buttons. This project demonstrates the use of React state to manage dynamic content and respond to user actions.

## Features

- Display a gallery of recipe images.
- Navigate through the images using "Next" and "Previous" buttons.
- Multi-line descriptions for each image.
- Centered and well-spaced text for image descriptions.

## Setup and Installation

1. **Clone the Repository**
   git clone https://github.com/yourusername/recipe-gallery.git
   cd recipe-gallery


2.**Install Dependencies**
npm install

3.**Run the Application**
npm start
This will start the Expo development server. You can then use the Expo Go app on your mobile device to scan the QR code and view the application.

Project Structure
recipe-gallery/
├── components/
│   ├── image1.jpg
│   └── image2.jpg
├── imageList.js
├── Gallery.js
├── App.js
└── README.md

components/: Contains the local image files.
imageList.js: Defines the list of recipe images with their descriptions.
Gallery.js: Contains the Gallery component that displays the images and navigation buttons.
App.js: The main entry point of the application that renders the Gallery component.
README.md: Project documentation.

Code Overview
imageList.js
This file imports local images and defines the list of images with their IDs, URLs, and descriptions.

javascript
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';

export const images = [
  {
    id: 1,
    url: image1,
    description: 'Local Image 1 Description\nThis is the second line.\nAnd here is the third line.'
  },
  {
    id: 2,
    url: image2,
    description: 'Local Image 2 Description\nThis is another multi-line description\nwith additional details here.'
  },
  // Add more images as needed
];

Gallery.js
This file contains the Gallery component that displays the current image, its description, and navigation buttons.

javascript

import React, { useState } from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={images[currentIndex].url} style={styles.image} />
      <Text style={styles.description}>{images[currentIndex].description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePrevious} disabled={currentIndex === 0} />
        <Button title="Next" onPress={handleNext} disabled={currentIndex === images.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',  // Center the text horizontally
    lineHeight: 24,       // Add line height for spacing between lines
    letterSpacing: 1,     // Add letter spacing
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default Gallery;

App.js
The main entry point of the application that renders the Gallery component.

javascript
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './Gallery';

export default function App() {
  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

https://github.com/ParysUnangst/RecipeGallery