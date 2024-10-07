import React from 'react'
import "./helphowsection.scss"
import SearchIcon from '../../../assets/svg/Search-icon'

export default function Helphowsection() {
    return (
        <>
            <div className='help-how-main'>
                <div className='help-container'>
                    <h1>Hi, how can we help?</h1>
                    <div className='search-input-main'>
                        <div className='search-input'>
                            <input type="text" placeholder="Search how-tos and more" aria-label="Search how-tos and more" />
                            <button type='button'>
                                <SearchIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
