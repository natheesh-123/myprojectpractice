import React from 'react'
import './ExternalA.css'
import modstyle from '../ModuleCss/FirstA.module.css'
import '../ModuleCss/dummyfolder/dummy.css'

import '../../reduxcode/store.css'
import '../../reduxcode/api/apislice.css'




function ExternalCssA() {
    return (
        <div>
            <h1 className='heading'>this is External css</h1>
            <p className='paragraph'> these  two are styled using External css</p>

            <h1 className={modstyle.heading}>this is styled using module css inside  external css example </h1>

            <h2 className='paragraphB'> hi !</h2>
            
            <h2 className='paragraphC'> hello !</h2>

            <h3 className='dummy'>this is dummy</h3>

        
    
        </div>
    )
}

export default ExternalCssA
