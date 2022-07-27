import React from "react";
import "./Keyboard.css"

export default function Keyboard() {
    return (
        //     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        //           rel="stylesheet"/>
        // <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        //       integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        //

        <div className="macbook flex flex-col">
            <div className="keyboard-panel">
                <div className="touch-bar bg-gray-900 h-10 pl-8">
                    <div className="flex flex-row justify-start items-center">
                        <button className="bg-mac-gray w-16 rounded h-6 text-white text-sm mr-3">esc</button>
                        <button className="bg-mac-gray w-16 rounded h-6 text-white text-sm mr-1">
                            <i className="far fa-arrow-left"></i>
                        </button>
                        <button className="bg-mac-gray w-16 rounded h-6 text-white text-sm mr-1"><i
                            className="fa fa-arrow-right text-xs"></i></button>
                        <button className="bg-mac-gray w-16 rounded h-6 text-white text-sm mr-1"><i
                            className="fa fa-redo text-xs"></i></button>
                        <input type="text"
                               className="bg-mac-gray w-64 rounded h-6 text-white text-sm mx-2"
                               placeholder="&#xF002; Search or type URL"/>

                        <button className="bg-mac-gray w-16 rounded h-6 text-white text-sm mr-1"><i
                            className="fa fa-star text-xs"></i></button>
                        <button className="bg-mac-gray w-16 rounded h-6 text-white text-sm mr-3"><i
                            className="fa fa-plus-circle text-xs"></i></button>
                        <button className="bg-mac-gray w-3 rounded-l h-6 border-r border-gray-900 text-white text-sm"><i
                            className="fa fa-angle-left text-xs"></i></button>
                        <button className="bg-mac-gray w-16 border-r border-gray-900 h-6 text-white text-sm"><i
                            className="fa fa-lock text-xs"></i></button>
                        <button className="bg-mac-gray w-16 border-r border-gray-900 h-6 text-white text-sm"><i
                            className="fa fa-sun text-xs"></i></button>
                        <button className="bg-mac-gray w-16 border-r border-gray-900 h-6 text-white text-sm"><i
                            className="fa fa-volume-up text-xs"></i></button>
                        <button className="bg-mac-gray w-16 rounded-r h-6 text-white text-sm"><i
                            className="fa fa-volume-mute text-xs"></i></button>
                        <button className="bg-black ml-3 w-8 rounded-r h-10 text-white text-sm"></button>
                    </div>
                </div>
                <div className="keyboard flex flex-col pt-1">
                    <div className="flex flex-row justify-between">
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">~{'\n'}`
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">!{'\n'}1
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">@{'\n'}2
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">#{'\n'}3
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">${'\n'}4
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">%{'\n'}5
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">^{'\n'}6
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">&{'\n'}7
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">*{'\n'}8
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">({'\n'}9
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">){'\n'}0
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">_{'\n'}-
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">+{'\n'}=
                        </button>
                        <button
                            className="w-24 h-16 bg-black my-1 rounded-lg text-right pr-3 text-xs text-white">{'\n'}{'\n'}delete
                        </button>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="w-24 h-16 bg-black my-1 text-left rounded-lg pl-3 text-xs text-white">{'\n'}{'\n'}tab
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">Q</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">W</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">E</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">R</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">T</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">Y</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">U</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">I</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">O</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">P</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">{'{'}
                            {'\n'}[
                        </button>
                        <button
                            className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">{'}'}{'\n'}]
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">|{'\n'}\
                        </button>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="w-28 h-16 bg-black my-1 text-left rounded-lg pl-3 text-xs text-white">{'\n'}{'\n'}caps
                            lock
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">A</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">S</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">D</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">F</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">G</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">H</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">J</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">K</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">L</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">:{'\n'};
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">"{'\n'}'
                        </button>
                        <button
                            className="w-28 h-16 bg-black my-1 rounded-lg text-right pr-3 text-xs text-white">{'\n'}{'\n'}return
                        </button>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="w-32 h-16 bg-black my-1 text-left rounded-lg pl-3 text-xs text-white">{'\n'}{'\n'}shift
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">Z</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">X</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">C</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">V</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">B</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">N</button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">M</button>
                        <button
                            className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">{'<'}{'\n'},
                        </button>
                        <button
                            className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">{'>'}{'\n'}.
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded-lg text-center text-sm text-white">?{'\n'}/
                        </button>
                        <button
                            className="w-32 h-16 bg-black my-1 rounded-lg text-right pr-3 text-xs text-white">{'\n'}{'\n'}shift
                        </button>
                    </div>
                    <div className="flex flex-row justify-between">
                        <button
                            className="w-16 h-16 bg-black my-1 rounded text-left pl-3 text-xs text-white">{'\n'}{'\n'}fn
                        </button>
                        <button
                            className="w-16 h-16 bg-black my-1 rounded text-center text-xs text-white">{'\n'}{'\n'}control
                        </button>
                        <button
                            className="w-16 h-16 bg-black my-1 rounded text-center text-xs text-white">{'\n'}{'\n'}option
                        </button>
                        <button
                            className="w-18 h-16 bg-black my-1 rounded text-center text-xs text-white">{'\n'}{'\n'}command
                        </button>
                        <button className="w-100 h-16 bg-black my-1 rounded text-center text-sm text-white"></button>
                        <button
                            className="w-18 h-16 bg-black my-1 rounded text-center text-xs text-white">{'\n'}{'\n'}command
                        </button>
                        <button
                            className="w-16 h-16 bg-black my-1 rounded text-center text-xs text-white">{'\n'}{'\n'}option
                        </button>
                        <button className="w-16 h-16 bg-black my-1 rounded text-center text-sm text-white"><i
                            className="fa fa-caret-left"></i></button>
                        <div className="flex flex-col">
                            <button
                                className="w-16 h-8 bg-black mt-1 border-b border-gray-700 rounded-t text-center text-sm text-white">
                                <i className="fa fa-caret-up"></i></button>
                            <button
                                className="w-16 h-8 bg-black border-t border-gray-700 rounded-b text-center text-sm text-white">
                                <i className="fa fa-caret-down"></i></button>
                        </div>
                        <button className="w-16 h-16 bg-black my-1 rounded text-center text-sm text-white"><i
                            className="fa fa-caret-right"></i></button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center my-2 h-full">
                <div className="touch-pad h-full "></div>
            </div>
            <div className="flex justify-center items-center my-1 h-2">

            </div>
        </div>


    )
}
