import React, { useState } from 'react';

function Details() {
  const [headers, setHeaders] = useState([
    { imageUrl: '', name: '' },
    { imageUrl: '', name: '' },
    { imageUrl: 'src/assets/table header/Frame 16.svg', name: 'Input Column' },
    { imageUrl: 'src/assets/table header/image 16.svg', name: 'Action Column' },
    { imageUrl: 'src/assets/table header/image 54.svg', name: 'Enrich Company' },
    { imageUrl: 'src/assets/table header/plus.svg', name: 'Add Column' },
  ]);

    const [rows, setRows] = useState(() => {
        const initialRows = [
            ['1', '', 'Oct 12, 2024 at 14:08 PM', { logo: '', content: 'Bitscale Evaluation - Account relevancy check.csv', className: '' }, { logo: 'src/assets/logos/Logomark.svg', name: 'Bitscale Evaluation - Account relevancy check.csv' }, ''],
            ['2', '', 'Oct 12, 2024 at 14:08 PM', { logo: 'src/assets/alert-triangle.svg', content: 'cell data size exceeds limit', className: 'italic text-sm font-normal text-gray-700' }, { logo: 'src/assets/logos/bmw.svg', name: 'BMW Evaluation - Relevancy check.csv' }, ''],
            ['3', '', 'Oct 12, 2024 at 14:08 PM', {logo:'src/assets/link-external-02.svg', content: 'https://www.linkedIn.com/bitScale.ai/sample', className: ''}, { logo: 'src/assets/logos/3rd.svg', name: 'Google Evaluation - Lilevancy check.csv' }, ''],
        ['4', '', 'Oct 12, 2024 at 14:08 PM', { logo: 'src/assets/loading.svg', content: 'Loading data, Please wait', className: 'italic text-sm font-normal text-gray-700' }, { logo: 'src/assets/logos/4th.svg', name: 'Apple Evaluation - Olvancy check.csv' }, ''],
        ['5', '', 'Oct 12, 2024 at 14:08 PM', { logo: 'src/assets/loading.svg', content: 'Loading data, Please wait', className: 'italic text-sm font-normal text-gray-700' }, { logo: 'src/assets/logos/5th.svg', name: 'Figma Evaluation - Evancy check.csv' }, ''],
    ];
    while (initialRows.length < 25) {
      initialRows.push(Array(6).fill(''));
    }
    return initialRows;
  });
  const handleAddColumn = () => {
    const newHeaders = [...headers, { imageUrl: '', name: 'New Column' }];
    const newRows = rows.map(row => [...row, '']);
    setHeaders(newHeaders);
    setRows(newRows);
  };

  const handleCellChange = (rowIndex, cellIndex, value) => {
    const newRows = rows.map((row, rIndex) => 
      row.map((cell, cIndex) => (rIndex === rowIndex && cIndex === cellIndex ? value : cell))
    );
    setRows(newRows);
  };
    
    let isFirstEmptyRow = false;
    let FirstZeroRow = false;
  return (
    <div className="details-table overflow-auto h-full w-full border-gray-150 border-2 border-l-0">
      <table className="w-full h-full">
        <thead className="bg-[#F6F6F6]">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={`border-r-2 border-b-2 border-gray-150 py-1 ${index===2 ? 'bg-[#FEF2C7]': ''} ${index === 0 || index === 1 ? 'serial-number-column' : `${header.name.replace(' ', '')}`}`}>
                <div className="flex items-center">
                  {header.imageUrl && <img src={header.imageUrl} alt={header.name} className="cell mx-2 header-cell" />}
                  <span className="cell header-cell text-black text-sm font-semibold">{header.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {rows.map((row, rowIndex) => {
                if (row.every(cell => cell === '') && !isFirstEmptyRow && !FirstZeroRow) {
                    isFirstEmptyRow = true;
                    FirstZeroRow = true;
                }
                else if (isFirstEmptyRow) { isFirstEmptyRow = false; }
                return (
                    <tr key={rowIndex} className={row.every(cell => cell === '') ? 'empty-row' : ''}>
                    {row.map((cell, cellIndex) => (
                        <td
                        key={cellIndex}
                            className={`border-r-2 border-b-2 border-gray-150 ${cellIndex === 0 ? 'serial-number-column' : ''}
                        ${cellIndex === 2 && isFirstEmptyRow && FirstZeroRow ? 'bg-[#F6F6F6]' : ''}`}
                        >
                            {cellIndex === 1 && !row.every(cell => cell === '') ? (
                                <div className='flex justify-center items-center'>
                                    <img src='src/assets/play_circle.svg' alt='play' className='cursor-pointer' />
                                </div>
                            ) : (
                                cellIndex === 2 && isFirstEmptyRow && FirstZeroRow ? (
                                    <div className='flex px-4 items-center cursor-pointer'>
                                        <img src='src/assets/table header/plus.svg' alt='image' className='cursor-pointer' />
                                        <span className='px-2 text-black'>Add a row</span>
                                    </div>
                                    ) : (cellIndex === 3 && !isFirstEmptyRow && !FirstZeroRow ? (
                                        <div className='flex px-2 items-center cursor-pointer'>
                                        {cell.logo && <img src={cell.logo} alt='image' className=' pl-2 cursor-pointer' />}
                                            <span className={`px-2 ${cell.className?cell.className:'text-black'} flex-0 overflow-ellipsis whitespace-nowrap overflow-hidden`}>{cell.content}</span>
                                      </div>
                                ) : (cellIndex === 4 && !isFirstEmptyRow && !FirstZeroRow ? (
                                        <div className='flex px-2 items-center cursor-pointer'>
                                        {cell.logo && <img src={cell.logo} alt='image' className='cursor-pointer' />}
                                        <input
                                        type="text"
                                        disabled={row.every(cell => cell === '') || cellIndex === headers.length - 1}
                                        value={cell.name}
                                        onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                                        className={`w-full h-full text-black p-2 overflow-ellipsis outline-none`}
                                    />
                                      </div>
                                ):(
                                    <input
                                        type="text"
                                        disabled={row.every(cell => cell === '') || cellIndex === headers.length - 1}
                                        value={cell}
                                        onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
                                        className={`w-full h-full text-black p-2 overflow-ellipsis outline-none`}
                                    />
                                )))
                            )}
                        </td>
                    ))}
                    </tr>
                );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Details;