import React from 'react'

export const Minicalendario = () => {
    return (
        <div>
            <div className='miniCalendario-estado'>
                <div className='miniCalendario-fecha'>
                    <span>Abril 2022</span>
                </div>
                <div className='miniCalendario-navegacion'>
                    <button className='button'>
                        <i className='icon-chevronLeft'></i>
                    </button>
                    <button className='button'>
                        <i className='icon-chevronRight'></i>
                    </button>
                </div>
            </div>
            
            <div className='miniCalendario' aria-label='Calendario de navegación'>
                {/* <div className='miniCalendario'></div>
                <div className='miniCalendario'></div> */}
                <span>D</span>
                <span>L</span>
                <span>M</span>
                <span>M</span>
                <span>J</span>
                <span>V</span>
                <span>S</span>

                <div className='is-inactive'>28</div>
                <div className='is-inactive'>29</div>
                <div className='is-inactive'>30</div>
                <div className='is-inactive'>31</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>1</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>2</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>3</div>

                <div className='miniCalendario-dia' tabIndex={'0'}>4</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>5</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>6</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>7</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>8</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>9</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>10</div>

                <div className='miniCalendario-dia' tabIndex={'0'}>11</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>12</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>13</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>14</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>15</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>16</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>17</div>

                <div className='miniCalendario-dia' tabIndex={'0'}>18</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>19</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>20</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>21</div>
                <div className='miniCalendario-dia is-today' tabIndex={'0'}>22</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>23</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>24</div>

                <div className='miniCalendario-dia' tabIndex={'0'}>25</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>26</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>27</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>28</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>29</div>
                <div className='miniCalendario-dia' tabIndex={'0'}>30</div>
                <div className='is-inactive'>1</div>

                <div className='is-inactive'>2</div>
                <div className='is-inactive'>3</div>
                <div className='is-inactive'>4</div>
                <div className='is-inactive'>5</div>
                <div className='is-inactive'>6</div>
                <div className='is-inactive'>7</div>
                <div className='is-inactive'>8</div>
            </div>
        </div>
    )
}
