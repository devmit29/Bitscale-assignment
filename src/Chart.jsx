import React from 'react';
import Details from './Details';
import buttonIcon from './assets/Button.svg';
import columnsIcon from './assets/columns-03.svg';
import filterIcon from './assets/filter-funnel-02.svg';
import sortIcon from './assets/sort.svg';
import shareIcon from './assets/share-07.svg';
import downloadIcon from './assets/download.svg';
import deleteIcon from './assets/delete.svg';

function Chart() {
  return (
    <div className='flex flex-col items-center h-full w-full'>
        <div className='flex justify-between p-4 w-full items-center'>
            <div className='flex justify-center items-center'>
                <div className='mx-2 relative'>
                    <input type='text' placeholder='Search' className='border-2 text-black outline-none border-gray-150 p-2 rounded-lg w-[364px] pl-10' />
                    <i className='fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'></i>
                </div>
                <div className='flex cursor-pointer mx-4 justify-center items-center'>
                    <img src={buttonIcon} alt='rows' />
                    <p className='text-gray-800 text-xs font-medium mx-2'>1/1 Row</p>
                </div>
                <div className='flex cursor-pointer mx-4 justify-center items-center'>
                    <img src={columnsIcon} alt='columns' />
                    <p className='text-gray-800 text-xs font-medium mx-2'>3/3 Column</p>
                </div>
                <div className='flex cursor-pointer mx-4 justify-center items-center'>
                    <img src={filterIcon} alt='Filter' />
                    <p className='text-gray-800 text-xs font-medium mx-2'>0 Filter</p>
                </div>
                <div className='flex cursor-pointer mx-4 justify-center items-center'>
                    <img src={sortIcon} alt='sort' />
                    <p className='text-gray-800 text-xs font-medium mx-2'>Sort</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='h-[38px] w-[38px] flex justify-center items-center'>
                    <img className='cursor-pointer' src={shareIcon} alt='share' />
                </div>
                <div className='h-[38px] w-[38px] flex justify-center items-center'>
                    <img className='cursor-pointer' src={downloadIcon} alt='download' />
                </div>
                <div className='h-[38px] w-[38px] flex justify-center items-center'>
                    <img className='cursor-pointer' src={deleteIcon} alt='delete' />
                </div>
            </div>
        </div>
        <Details />
    </div>
  );
}

export default Chart;