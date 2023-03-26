
class Keyboard {
  constructor() {
    this.keys = document.querySelectorAll('.key');
    this.activeKeys = {};

    this.init();
  }

  init() {
    this.keys.forEach(key => {
      key.addEventListener('mousedown', () => this.play(key.dataset.note));
      key.addEventListener('mouseup', () => this.stop(key.dataset.note));
      key.addEventListener('mouseleave', () => {
        if (this.activeKeys[key.dataset.note]) {
          this.stop(key.dataset.note);
        }
      });

      const note = key.dataset.note;
      this.activeKeys[note] = false;
    });

    window.addEventListener('keydown', e => {
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if (!key) return;

      const note = key.dataset.note;
      if (this.activeKeys[note]) return;

      key.classList.add('active');
      this.activeKeys[note] = true;
      this.play(note);
    });

    window.addEventListener('keyup', e => {
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if (!key) return;

      const note = key.dataset.note;
      key.classList.remove('active');
      this.activeKeys[note] = false;
      this.stop(note);
    });
  }

  play(note) {
    const synth = new Synth(audioContext);
    synth.play(noteToFrequency(note));
  }

  stop(note) {
    const synth = new Synth(audioContext);
    synth.stop();
  }
}

function noteToFrequency(note) {
  const notes = {
    'C': 261.63,
    'D': 293.66,
    'E': 329.63,
    'F': 349.23,
    'G': 392.00,
    'A': 440.00,
    'B': 493.88
  };

  const octave = note[note.length - 1];
  const noteName = note.slice(0, -1);
  const frequency = notes[noteName] * Math.pow(2, octave);

  return frequency;
}
