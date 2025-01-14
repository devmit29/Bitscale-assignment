import { useState } from 'react'
import './App.css'
import Chart from './Chart';

function App() {
  const [autoSave, setAutoSave] = useState(false);
  const label = "autoSave";

  const handleToggle = () => {
    setAutoSave(!autoSave);
  };

  return (
    <>
      <nav className='border-b-2 border-gray-150 w-full flex justify-between items-center text-white p-4 '>
        <div className='flex justify-center items-center'>
          <img src='public/assets/arrow-left.svg' alt='back-arrow' className='mr-2 cursor-pointer' />
          <p className='text-gray-500'>Name of the file</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center mr-4'>
            <label className="switch">
              <input
                type="checkbox"
                name={label}
                id={label}
                checked={autoSave}
                onChange={handleToggle}
              />
              <span className="slider round"></span>
            </label>
            <p className={`ml-2 font-medium text-sm ${autoSave ? 'text-green-500' : 'text-gray-500'}`}>Auto Save</p>
          </div>
          <div className='flex justify-center items-center bg-[#FEECDC] ml-2 p-2 rounded-full'>
            <img src='src/assets/user-03.svg' alt='user' className='cursor-pointer' />
          </div>
        </div>
      </nav>
      <div className='flex h-full w-full'>
        <div className='border-r-2 h-full border-gray-150 w-16 flex flex-col justify-between items-center p-4'>
        <div className='flex flex-col items-center'>
            <img className='my-4 cursor-pointer' width="24px" height={'24px'} src="src/assets/table.svg" alt="table-icon" />
            <img className='my-4 cursor-pointer' width="24px" height={'24px'} src="src/assets/puzzle-piece-01.svg" alt="puzzle-icon" />
            <img className='my-4 cursor-pointer' width="24px" height={'24px'} src="src/assets/intersect-circle.svg" alt="circle-icon" />
        </div>
        <div className='flex justify-end flex-col items-center'>
            <img className='my-4 cursor-pointer' width="24px" height={'24px'} src="src/assets/credit-card-02.svg" alt="credit-card-icon" />
            <img className='my-4 cursor-pointer' width="24px" height={'24px'} src="src/assets/coins-stacked-01.svg" alt="coins-icon" />
        </div>
        </div>
        <Chart />
      </div>
    </>
  )
}

export default App