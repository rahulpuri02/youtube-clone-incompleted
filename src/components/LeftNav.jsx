import React from 'react'
import { categories } from '../utils/Constants'
import { useContext } from 'react'
import { Context } from '../context/apiContext'
import LeftNavMenuItem from './LeftNavMenuItem';
import { useNavigate } from 'react-router';


const LeftNav = () => {

  const {selectedCategories, setSelectedCategories, mobileMenu} = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
      switch (type) {
          case "category":
              return setSelectedCategories(name);
          case "home":   
              return setSelectedCategories(name);
          case "menu":
              return false;
          default:
              break;
      }
  };


  return (
    <div className='md:block w-[240px] overflow-y-auto h-full py-4 absolute md:relative z-10 translate-x-[-240] md:translate-x-0 transition-all'>
     <div className='flex flex-col px-5'>
     {categories.map((item) => {
                    return (
                        <React.Fragment key={item.name}>
                            <LeftNavMenuItem
                                text={item.type === "home" ? "Home" : item.name}
                                icon={item.icon}
                                action={() => {
                                  clickHandler(item.name, item.type)
                                  navigate('/')
                                }}
                                className={`${
                                  selectedCategories === item.name
                                        ? "bg-zinc-200"
                                        : ""
                                }`}
                            />
                            {item.divider && (
                                <hr className="my-5 border-zinc-300" />
                            )}
                        </React.Fragment>
                    );
                })}
                <hr className="my-5 border-zinc-300" />
                <div className="text-zinc-500 text-sm">
                &#169; {new Date().getFullYear()} Rahul Puri
                </div>
            </div>
        </div>
  )
}

export default LeftNav