import './styles.css';
import App from './App';
import anime from 'animejs';

new App({
  target: document.getElementById('app')!,
});

anime({
  targets: 'textarea, input, select, button',
  translateY: [-20, 0],
  opacity: [0, 1],
  delay: anime.stagger(100),
  duration: 800,
  easing: 'easeOutExpo'
});