import { useEffect, useState }  from 'react'

const SwitcherMode = () => {
    const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
        <button onClick={toggleTheme} className="p-3  m-3 text-center text-2xl rounded-[50%] flex hover:bg-gray-300 bg-opacity-50 dark:text-white dark:hover:text-black transition-colors duration-200 ease-in-out">
            {
                theme === 'light' ? <i className="fa-regular fa-moon"></i>:<svg width="24" height="24" fill="none" class="transform transition-transform scale-100 duration-300"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            }
        </button> 
 
    </>
  )
}

export default SwitcherMode