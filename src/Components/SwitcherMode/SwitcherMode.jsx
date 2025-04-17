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
                theme === 'light' ? <i class="fa-regular fa-moon"></i>:<i class="fa-regular fa-sun"></i>
            }
        </button> 
 
    </>
  )
}

export default SwitcherMode