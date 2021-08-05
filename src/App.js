
import './App.css';
import DiscountHeader from './components/DiscountHeader.jsx';
import Hero from './components/Hero';

export const discount = 15;
function App() {
  return (
    <div className="fresh-meal-wizard-container is-flex container is-max-desktop">
      <DiscountHeader discount={` $${discount} off first box: Code FIRSTBOX automatically applied`} />
      <Hero />
    </div>
  );
}

export default App;
