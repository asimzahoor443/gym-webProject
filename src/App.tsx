import Navbar from './scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from '@/shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  return (
    <div className="app bg-gray-20">
      <h1>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </h1>
    </div>
  );
}

export default App;
