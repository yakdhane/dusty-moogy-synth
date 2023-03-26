Sure, here's a sample README.md file:

# Analog Dusty Moogy Synthesizer App

![synthesizer](https://img.icons8.com/cotton/2x/synthesizer.png)

This is a simple JavaScript application that allows you to play piano notes and adjust knobs to create analog dusty moogy sounds. The application consists of three main components:

- `synth.js`: This file contains the `Synth` class, which creates an oscillator and gain node to play a specific frequency and stop the sound after a specified duration.
- `keyboard.js`: This file contains the `Keyboard` class, which listens for mouse and keyboard events and plays or stops the corresponding note using the `Synth` class.
- `index.js`: This file creates a new `Keyboard` instance and sets up the audio context.

## Installation

To install the dependencies, run:

```
npm install
```

## Usage

To run the application, run:

```
npm start
```

Then, open your browser and navigate to `http://localhost:3000`.

## Docker

To run the application using Docker, first build the Docker image:

```
docker build -t synth-app .
```

Then, run the Docker container:

```
docker run -p 3000:3000 synth-app
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.