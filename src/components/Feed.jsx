import React, {useEffect, useContext} from 'react'
import { Context } from '../context/apiContext'
import LeftNav from './LeftNav';
import { categories} from '../utils/Constants';

const Feed = () => {

  const {} = useContext(Context);

  return (
   <div className="flex h-[calc(100% - 56px)]">
    <LeftNav />
   </div>
  )
}

export default Feed